const { DateTime } = require("luxon");
const lodashChunk = require('lodash.chunk');
const lodash = require("./lodash");
const cheerio = require("cheerio");
const pluginRss = require("@11ty/eleventy-plugin-rss");

function getAllKeyValues(collectionArray, key) {
    // get all values from collection
    let allValues = collectionArray.map((item) => {
      let values = item.data[key] ? item.data[key] : [];
      return values;
    });
  
    // to lowercase
    allValues = allValues.map((item) => item.toLowerCase());
    // remove duplicates
    allValues = [...new Set(allValues)];
    // order alphabetically
    allValues = allValues.sort(function (a, b) {
      return a.localeCompare(b, "en", { sensitivity: "base" });
    });
    // return
    return allValues;
}

module.exports = (config) => {

    // === AMOUNT OF POSTS PER PAGE === //
    const postsPerPaginatedPage = 10;

    // Plugins

    config.addPlugin(pluginRss);

    // ***
    // Put this code in the module.exports function for `.eleventy.js`

    // Require `markdown-it.js`
    let markdownIt = require("./markdown-it");
    let markdownItAnchor = require("./markdown-it-anchor");
    let markdownItImageFigures = require("./markdown-it-image-figures");

    // Set options
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };

    // Create a variable for the markdown library
    let markdownLib = markdownIt(options).use(markdownItImageFigures).use(markdownItAnchor, {
        level: 1,
        // slugify: string => string,
        permalink: true, // false to hide permalink symbol
        // renderPermalink: (slug, opts, state, permalink) => {},
        permalinkClass: 'header-anchor',
        permalinkSymbol: '<i class="ri-link-m"></i>',
        permalinkBefore: true
    });
    // To add markdown-it addons, e.g. `markdown-it-footnote.js`
    // let markdownLib = markdownIt(options).use(require('./markdown-it-footnote'));

    // Set the library
    config.setLibrary("md", markdownLib);

    // END // Put this code in the module.exports function for `.eleventy.js`
    // ***

    // Inject ads
    // https://github.com/pdehaan/11ty-2355
    // https://github.com/11ty/eleventy/discussions/2355
    config.addTransform("inject-ads", function (content) {
        if (!this.outputPath?.endsWith(".html")) {
          console.log("abort early:", this.outputPath);
          return content;
        }
        const $ = cheerio.load(content);
        // Inject ads after 3rd <p> tag, then after every 3
        const r = $("article p:nth-of-type(3), article p:nth-of-type(3n)");
        $(r).after('<div class="inline-slot"><div class="article-notice">Article continues after ad</div><div style="background-color: var(--grey); max-width: 1300px;"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4971544242804665" crossorigin="anonymous"></script><ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-4971544242804665" data-ad-slot="7482589955"></ins><script> (adsbygoogle = window.adsbygoogle || []).push({});</script></div></div>');
        const s = $("article p:nth-of-type(2)");
        $(s).after('<div id="rec-filler"></div><script>document.getElementById("rec-filler").innerHTML = rec</script>');
        return $.html();
    });

    config.addPassthroughCopy('_src/assets');
    config.addPassthroughCopy('_src/_data');
    config.addPassthroughCopy('_src/admin');
    config.addPassthroughCopy({'_src/static':  '.'});

    config.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("_src/posts/*.md").reverse();
    });

    config.addCollection("podcasts", function(collection) {
        return collection.getFilteredByGlob("_src/podcast/*.md").reverse();
    });

    config.addCollection("quizzes", function(collection) {
        return collection.getFilteredByGlob("_src/quizzes/*.md").reverse();
    });

    config.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLLL d, yyyy");
    });

    config.addFilter("getAuthor", (authors,label) => {
        let author = authors.filter(a => a.key === label)[0];
	    return author;
    });

    config.addFilter("getPostsByAuthor", (posts,author) => {
        return posts.filter(a => a.data.author === author);
    });

    config.addCollection("blogposts", function (collection) {
        return collection.getFilteredByGlob("./src/blogposts/*.md").reverse();
    });

    config.addCollection("pagedTags", function(collection) {
        const postsCollection = collection.getFilteredByGlob('_src/posts/*.md');
        let tagSet = new Set();
        postsCollection.forEach(templateObjet => {
            if('tags' in templateObjet.data) {
                const tagsProperty = templateObjet.data.tags;
                if(Array.isArray(tagsProperty)) {
                    tagsProperty.forEach(tag => tagSet.add(tag));
                } else if(typeof tagsProperty === 'string') {
                    tagSet.add(tagsProperty);
                }
            }
        });
        const pagedTags = [];
        let pagedCollectionMaxIndex;
        [...tagSet].forEach(tag => {
            const tagCollection = collection.getFilteredByTag(tag).reverse();
            const pagedCollection = lodashChunk(tagCollection, postsPerPaginatedPage);
            pagedCollection.forEach((templateObjectsArray, index) => {
                pagedCollectionMaxIndex = index;
                pagedTags.push({
                    tagName: tag,
                    path: `/tags/${tag}/${index ? (index + 1) + '/' : ''}`,
                    pageNumber: index,
                    templateObjets: templateObjectsArray
                });
            });
        });
        const pagedCollectionLength = ++pagedCollectionMaxIndex;
        const groupedByTagName = lodashChunk(pagedTags, pagedCollectionLength);
        groupedByTagName.forEach(group => {
            group.forEach((pageObject, index, source) => {
                pageObject.first = source[0].path;
                pageObject.last = source[source.length - 1].path;
                pageObject.lastIndex = source.length - 1;
                if(source[index - 1]) pageObject.previous = source[index - 1].path;
                if(source[index + 1]) pageObject.next = source[index + 1].path;
            });
        });
        return pagedTags;
    });

    config.addCollection("authorPosts", function (collection) {
        let allCategories = getAllKeyValues(
          collection.getFilteredByGlob("_src/posts/*.md"),
          "author"
        );
    
        let blogCategories = allCategories.map((category) => ({
          title: category,
          slug: category,
        }));
    
        return blogCategories;
    });

    // create flattened paginated blogposts per categories collection
    // based on Zach Leatherman's solution - https://github.com/11ty/eleventy/issues/332
    config.addCollection("pagedAuthorPosts", function (collection) {
        const itemsPerPage = postsPerPaginatedPage;
        let blogpostsByCategories = [];
        let allBlogposts = collection
        .getFilteredByGlob("_src/posts/*.md")
        .reverse();
        let blogpostsCategories = getAllKeyValues(allBlogposts, "author");
    
        // walk over each unique category
        blogpostsCategories.forEach((category) => {
        let sanitizedCategory = lodash.deburr(category).toLowerCase();
        // create array of posts in that category
        let postsInCategory = allBlogposts.filter((post) => {
            let postCategories = post.data.author ? post.data.author : [];
            // let sanitizedPostCategories = postCategories.map((item) => lodash.deburr(item).toLowerCase() );
            return postCategories.includes(sanitizedCategory);
        });
    
        // chunck the array of posts
        let chunkedPostsInCategory = lodash.chunk(postsInCategory, itemsPerPage);
    
        // create array of page slugs
        let pagesSlugs = [];
        for (let i = 0; i < chunkedPostsInCategory.length; i++) {
            let categorySlug = category;
            let pageSlug = i > 0 ? `${categorySlug}/${i + 1}` : `${categorySlug}`;
            pagesSlugs.push(pageSlug);
        }

        // let author = category.filter(a => a.key === category)[0].name;
    
        // create array of objects
        chunkedPostsInCategory.forEach((posts, index) => {
            blogpostsByCategories.push({
            title: category,
            name: "a", // a
            slug: pagesSlugs[index],
            pageNumber: index,
            totalPages: pagesSlugs.length,
            pageSlugs: {
                all: pagesSlugs,
                next: pagesSlugs[index + 1] || null,
                previous: pagesSlugs[index - 1] || null,
                first: pagesSlugs[0] || null,
                last: pagesSlugs[pagesSlugs.length - 1] || null,
            },
            items: posts,
            });
        });
        });
    
        return blogpostsByCategories;
    });

    config.addCollection("tagList", function(collection) {
        let tagSet = new Set();
        collection.getAll().forEach(item => {
          (item.data.tags || []).forEach(tag => tagSet.add(tag));
        });
    
        return tagSet;
    });

    // Get the first `n` elements of a collection.
    config.addFilter("head", (array, n) => {
        if(!Array.isArray(array) || array.length === 0) {
        return [];
        }
        if( n < 0 ) {
        return array.slice(n);
        }

        return array.slice(0, n);
    });

    // Shortcodes
    config.addPairedShortcode("video", function(content) {
    return `
<div class="video-iframe">
    ${content}
</div>
    `;
    });

    config.addPairedShortcode("details", function(content, title) {
    return `
<details>
    <summary><span class="details-summary"><span class="details-title">${title}</span><span class="ri-add-line details-icon"></span></span></summary>
    ${content}
</details>
    `;
    });

    config.addPairedShortcode("percent", function(title, percent) {
    return `
<div class="percent">
    <span class="percent-title">${title}</span>
    <div class="percent-bar">
        <div class="percent-value" style="width: ${percent}%;"></div>
    </div>
</div>
    `;
    });

    config.addPairedShortcode("alert", function(content) {
    return `
<div class="alert">
<div class="alert-icon">
<i class="ri-information-line"></i>
</div>
<div class="alert-content">
${content}
</div>
</div>
    `;
    });

    return {
        dir: {
            input: '_src',
            output: '_dist'
        },
        // pathPrefix: "/subfolder/",
        templateFormats: ['md', 'njk', 'html'],
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    };

};
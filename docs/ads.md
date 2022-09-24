# Ads

Dashword has three kinds of ads.

1. Horizontal Display Ads
2. Vertical Display Ads
3. Feed Ads
4. Article Ads

Horizontal Ad, Vertical Ad, and Feed Ad code are found at `_src/_includes/formats/`

Article Ad code is found in `.eleventy.js`.

# Where Ads Are Shown

Unless the specific page has ads disabled, ads will be shown on the following pages.

- Horizontal Display Ads are shown on every page below the navbar and above the footer.
- Vertical Display Ads are shown on every page on the sidebar.
- Feed ads are shown on any page where you can browse posts, such as category and author pages.
- Article Ads are shown in any page using the `_src/_includes/templates/post.njk` template.

# Article Ads Algorithm

Excluding pages with ads disabled, article ads are shown between `<article>` tages on ANY page with them. But by default, the only pages with them use the `_src/_includes/templates/post.njk` template.

# Disabling Ads On A Certain Page

Simply set `hideAds: true` in the frontmatter of that page.

Ads should be disabled on pages that:

- Do not offer valuable content (e.g. the 404 page)
- "Legal" pages (e.g. the privacy policy)
- Pages discussing sensitive topics

# Disabling Ads On The Entire Site

Simply set `metadata.isAds: false` in `_src/_data/metadata.json`. Ideally this should never be done on the live site, only when required for testing in a local development environment.
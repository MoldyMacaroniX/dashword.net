# Ads

Dashword has six kinds of ads.

1. `display-horizontal`
2. `display-vertical`
3. `display-wide`
4. `feed`
5. `related`
6. Article Ads

All ad formats **except** for article ads are found at `_src/_includes/formats/`.

Article Ad code is found in `.eleventy.js`.

## Where Ads Are Shown

Unless the specific page has ads disabled, ads will be shown on the following pages.

1. `display-horizontal` Ads are shown on every page below the navbar and above the footer.
2. `display-vertical` Ads are shown on every page on the sidebar.
3. `display-wide` Ads are fixed to the bottom of the screen on every page.
4. `feed` Ads are shown on any page where you can browse posts, such as category and author pages.
5. `related` Ads are shown on all article pages.
6. Article Ads are shown in any page using the `_src/_includes/templates/post.njk` template.

Google may also insert automatic ads at times.

## Article Ads Algorithm

Excluding pages with ads disabled, article ads are shown between `<article>` tages on ANY page with them. But by default, the only pages with them use the `_src/_includes/templates/post.njk` template.

## Disabling Ads On A Certain Page

Simply set `hideAds: true` in the frontmatter of that page.

Ads should be disabled on pages that:

- Do not offer valuable content (e.g. the 404 page)
- "Legal" pages (e.g. the privacy policy)
- Pages discussing sensitive topics

## Disabling Ads On The Entire Site

Simply set `"isAds": false` in `_src/_data/metadata.json`. Ideally this should never be done on the live site, only when required for testing in a local development environment.
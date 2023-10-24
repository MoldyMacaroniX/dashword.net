# Dashword Articles

All Dashword content (including articles) are located in the `_src/` folder. Articles are located in the `_src/posts/`.

To upload a new article, simply drag and drop its markdown file to that folder.

## Article Syntax

Articles are written in **markdown** and use **YAML** frontmatter.

```yaml
---
pageSlug: "fancy-file-url"
title: "Geometry Dash Vaults & Secets: How To Unlock Every Secret Area (2022)"
desc: If you're looking for free icons, colors, and rewards, every Geometry Dash secret area has something to offer.
image: https://example.com/image.png
imageSource: https://example.com
date: 2022-08-28
tags:
    - featured
    - guide
author: moldymacaronix
videoID: xAHrT0qf2rI
---

This is the first paragraph of the article...
```

### `pageSlug` (String)

The URL path of the article in the form `dashword.net/posts/{VALUE}`. This is optional, and if not included, the `{VALUE}` will resort to the filename. Do not use capital letters.

### `title` and `desc` (Strings)

Don't have to be wrapped in quotation marks unless there are restricted symbols in them, such as a colon (`:`). As usual, put a backslash (`\`) before quoation marks if you're wrapping the string in quotation marks, like so:

```yaml
title: "RobTop Previews New \"Keyframe System\""
```

This applies to all string values, not just the `title` and `desc`.

### `image` and `imageSource` (Strings)

Must valid links!

The `image` link must end in the file extension (e.g. `.png` or `.jpg`) **and must lead to the image itself, not the webpage the image is on.**

The `imageSource` is optional. Only include it to credit the source of the image, which you'll want to do in most cases. **Make sure this leads to the webpage the image was found on and not the image itself.**

### `date` (date)

Must be in the format ``yyyy-mm-dd``. If the month or day is only a single digit, include a zero, like so:

```yaml
date: 2022-01-07
```

### `tags` (String or Array of Strings)

Can be written like...

```yaml
tags: one
```

...or...

```yaml
tags:
    - one
    - two
```

...but **not like this:**

```yaml
tags: one,two # wrong
```

The above is wrong and will result in the tag `one,two` rather than tags `one` and `two`.

### `author` (String or Array of Strings)

Must be a valid author key.

```yaml
author: moldymacaronix
```

For multiple authors, use an Array of Strings, like...

```yaml
author:
    - moldymacaronix
    - dashword
```

As with tags, **this will not work:**

```yaml
tags: moldymacaronix,dashword #wrong
```

Multiple authors per article is not yet supported in the backend CMS and must be done via a pull request.

### `videoID` (String)

An optional parameter to specify a YouTube video ID. If included, the featured image will be replaced with the video embedded. Only include for posts featuring a single video.

**Tip:** The image of a video's thumbnail is:

- https://img.youtube.com/vi/**VALUE**/maxresdefault.jpg

This is useful for the post's image.
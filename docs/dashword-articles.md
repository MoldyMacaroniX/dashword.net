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
---

This is the first paragraph of the article...
```

### `pageSlug`

The URL path of the article in the form `dashword.net/posts/{VALUE}`. This is optional, and if not included, the `{VALUE}` will resort to the filename.

### `title` and `desc`

String values.

Don't have to be wrapped in quotation marks unless there are restricted symbols in them, such as a colon (`:`). As usual, put a backslash (`\`) before quoation marks if you're wrapping the string in quotation marks, like so:

```yaml
title: "RobTop Previews New \"Keyframe System\""
```

This applies to all string values, not just the `title` and `desc`.

### `image` and `imageSource`

String values, but must be in the format of a valid link.

The `image` link must end in the file extension (e.g. `.png` or `.jpg`) **and must lead to the image itself, not the webpage the image is on.**

The `imageSource` is optional. Only include it to credit the source of the image, which you'll want to do in most cases. **Make sure this leads to the webpage the image was found on and not the image itself.**

### date

Date value.

Must be in the format ``yyyy-mm-dd``. If the month or day is only a single digit, include a zero, like so:

```yaml
date: 2022-01-07
```

### `tags`

Array of strings.

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

### `author`

String value.

Must be a valid author key.
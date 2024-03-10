# Dashword Courses

All courses are found in `_src/courses/`. You can see examples of courses there.

## Creating a course

Create a new directory in `_src/courses/`. For consistency, name it the same as the course's slug (see `courseslug` below).

Create a json file in your course's directory with the same name as the directory.

Fill the json with the following information, as per this example:

``` json
{
    "coursename":"Learn Geometry Dash YouTube",
    "courseslug":"learn-geometry-dash-youtube",
    "image":"https://example.com/file.png",
    "courselessons":10,
    "courseinfo": [
        {
            "name":"Welcome",
            "url":null
        },
        {
            "name":"How Videos Go Viral",
            "url":"how-videos-go-viral"
        },
        {
            "name":"Starting From Zero",
            "url":"starting-from-zero"
        },
        {
            "name":"5 Steps To Success",
            "url":"5-steps-to-success"
        },
        {
            "name":"Idea",
            "url":"idea"
        },
        {
            "name":"Title & Thumbnail",
            "url":"title-and-thumbnail"
        },
        {
            "name":"Story",
            "url":"story"
        },
        {
            "name":"Editing",
            "url":"editing"
        },
        {
            "name":"Uploading",
            "url":"uploading"
        },
        {
            "name":"Next Steps",
            "url":"next-steps"
        }
    ]
}
```

- `coursename` is the name of the course.
- `courseslug` is used in the URL structure of the course.
- `image` is a link to an image to be used as the course cover. **See below.**
- `courselessons` is the amount of lessons in the course. Start counting from 1 and not 0.
- `courseinfo` contains the names and url slugs for the course navigation. Put this in the order you want to it to appear on the sidebar. The first/home page of the course must have a url of `null` and be the first entry.

## Creating lessons

Create markdown files in your course's directory with the following frontmatter, as per this example:

``` yaml
---
title: How Videos Go Viral
desc: "In the most basic terms, YouTube has one goal for your video: to show it to people who want to see it."
pageSlug: how-videos-go-viral
num: 2
---
```

- `title` is the title of the lesson. It doesn't have to be the same as its course navigation label.
- `desc` is the description for the lesson. This can be whatever you want and is displayed when other sites link to the lesson. It's the same as for articles.
- `pageSlug` is the url slug for the lesson. This must match its course navigation entry.
- `num` is the lesson number. This must be the same order as its course navigation. Start counting from 1 and not 0.

For consistency, keep the lesson file names the same as its `pageSlug`.

## Display the course on the courses page

Go to `_src/_data/courses.json` and add an entry for your course, as per this example:

``` json
{
    "slug": "learn-geometry-dash-youtube",
    "name": "Learn Geometry Dash YouTube",
    "image": "https://www.example.com/image.png"
}
```

- `slug` must be the same as `courseslug`
- `name` doesn't have to be the same as `coursename` but we recommend that it is
- `image` is a link to an image to be used as the course cover. **This link must lead to the image itself, not the webpage the image is on.**
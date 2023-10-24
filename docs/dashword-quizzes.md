# Dashword Quizzes

```yaml
---
title: "Quiz Title"
date: 2023-02-07
desc: "Quiz Description"
pageSlug: quiz-url-slug
author: moldy
image: https://www.example.com/file.png
imageSource: https://www.example.com/
questions:
    -
        question: Question 1
        options:
            - Option (1 point)
            - Option (2 point)
            - Option (3 point)
            - Option (4 point)
    -
        question: Question 2
        options:
            - Option (1 point)
            - Option (2 point)
            - Option (3 point)
            - Option (4 point)
outcomes:
    - Title (Min points)
    - Title (first half)
    - Title (second half)
    - Title (Max points)
subcomes:
    - Description (Min points)
    - Description (first half)
    - Description (second half)
    - Description (Max points)
---
```

- Whenever you select an option, you get either 1, 2, 3, or 4 points depending on the option you choose. First option rewards 1 point, second option rewards 2 points, etc.
- You will get one of four outcomes depending on your total score. The higher the score, the later the outcome (first outcome requires least amount of points, etc).
- `subcomes` is just the descriptions for `outcomes`.
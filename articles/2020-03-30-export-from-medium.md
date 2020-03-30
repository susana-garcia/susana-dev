---
title: 'Export Your Medium Articles'
description: 'How to export your articles from medium.com into Markdown files.'
tags: ['medium', 'export', 'markdown']
type: 'tip'
publishedAt: '2020-03-30T19:49:12.215Z'
updatedAt: '2020-03-30T20:54:12.215Z'
---

# Export to HTML

Go to [medium.com settings](https://medium.com/me/export) and request your export.

After a while, you'll get an email with a download link.
Download the `medium-export.zip` file and unpack it.

# Transform to MD

Inside the `medium-export` folder you'll find another folder `posts` with `.html` files in it.
To transform your `.html` files to `.md`, you can execute the `medium-2-md` NPM package with NPX.

```shell
npx medium-2-md convertLocal Downloads/medium-export/posts -f
```

Your posts in `.md` format can be found in the `medium-export/posts/md_*` folder

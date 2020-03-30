---
slug: 'how-to-export-your-medium-articles-into-markdown-files'
title: 'How to Export Your Medium Articles into Markdown Files'
date: '2020-03-29T19:49:12.215Z'
tags: ['medium', 'export', 'markdown']
type: 'tip'
published: true
---

How to export your articles from medium.com into Markdown files.

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

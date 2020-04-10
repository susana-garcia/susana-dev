---
title: 'This Blog Is Open Source'
description: 'Use this blog to start your own. Be online within minutes by add your data, choose your favorite color and write your first article.'
tags: ['open-source', 'web', 'react', 'nextjs', 'tailwindcss']
publishedAt: '2020-03-29T19:14:12.215Z'
updatedAt: '2020-03-30T20:52:12.215Z'
---

This blog is built with [Next.js](https://nextjs.org) using [Tailwind CSS](https://tailwindcss.com) for styling.
The source code is on [GitHub](https://github.com/lailo/lailo.ch) and it's deployed on [Zeit's Now](https://zeit.co).

# Get Started

To get started, you only need to pull or fork the repository, update some config variables and choose your favorite color.
You can find a step-by-step instruction in the [README.md ](https://github.com/lailo/lailo.ch/blob/master/README.md) of the project.

# Add Article

Adding new posts is as simple as creating a new Markdown file inside the `/articles` folder and pushing it to GitHub's `master` branch.

## Meta Data

It's important that you keep the meta data at the top of the file.

```yml
---
title: 'This Blog Is Open Source'
description: 'Use this blog to ....'
tags: ['open-source', 'web', 'react', 'nextjs', 'tailwind-css']
publishedAt: '2020-03-29T19:14:12.215Z'
updatedAt: '2020-03-29T19:14:12.215Z'
---

```

Keep in mind that the variable `publishedAt: '2020-03-29T19:14:12.215Z'` must have a value to publish your article.

If it's set to `published: ''`, your article will only be visible in development.

# Hosting

I personally like the simplicity of [Zeit's Now](https://zeit.co) and that's exactly what I use to host this blog.
Connect your GitHub repository to a Now project and as soon as you push to master, a new build is executed.
Within minutes you'll see your new article online.

If you want to share your new article with someone to review without having it released, just create a pull request on master and you'll get a preview URL from Now.

# Feedback

If you have any questions or feedback, please feel free to contact my via [Twitter](https://twitter.com/lailo-ch) of directly add an issue or create a PR on [GitHub](https://github.com/lailo/lailo.ch).

---
title: 'Dark Mode in TailwindCSS'
description: 'There are two ways to introduce dark mode into your TailwindCSS projects.'
tags: ['design', 'tailwindcss', 'design']
publishedAt: '2020-04-12T20:48:09.100Z'
updatedAt:
---

There are two ways to quickly add dark mode to your Tailwind CSS projects.
The first one is the quickest and easiest way. The second one is your choice if you want to have a controlled theme switch.

# 1. Screen Config

This is a little hack and you can't manually switch the theme as it detects the theme from the user's operating system.

## Set Config

Extend your `tailwind.config.js` theme by adding a new screen type.

```js
module.exports = {
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
}
```

## Use Styles

You can now use it like you would use different screen sizes.

```html
<div class="text-gray-800 dark:bg-gray-200"></div>
```

It's also possible to add states like _hover_ into the dark mode.

```html
<div class="border-b hover:border-gray-800 dark:hover:border-gray-800"></div>
```

# 2. Plugin

Another, more clean way and with the possibility to switch the theme manually is the plugin [tailwindcss-dark-mode](https://github.com/ChanceArthur/tailwindcss-dark-mode)

Add the class `<html class="dark-mode">` to see the dark mode or remove it to see the regular theme.

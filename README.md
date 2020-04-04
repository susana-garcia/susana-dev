# Susana's Blog

This is my personal blog based on Next.js and Markdown, styled with TailwindCSS and exported to a Static-Site-Generation (SSG) website.

## Technologies

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [Zeit's Now](https://zeit.co)

## How To Use

### 1. Update User Info

Update all values inside the `env` key in the `next.config.js` file to match your profile.

#### Newsletter

If you don't want to have a [Tinyletter](https://tinyletter.com/) newsletter, just leave the key `TINY_LETTER_ID` empty and the component will be excluded automatically.

### 2. Choose Your Color

Change the primary color by update the `primary` key inside the `tailwind.config.js` file. You can choose any color hash (e.g. `#FF7A00`) or use one out of [Tailwind CSS colors](https://tailwindcss.com/docs/customizing-colors/#default-color-palette) default color palette.

### 3. Start Blogging

Add your blog new posts Markdown files inside the `/articles` folder.
That's it - Enjoy.

## Development

### Setup

You need NodeJS with NPM installed to execute `npm install`.

### Run

To run the dev server, use `npm run dev` and open [localhost:3000](https://localhost:3000) in your Browser.

### Tests

To execute all tests, run `npm run test`.

### Build

To build the project, run `npm run build` followed by `npm run export`. NextJS command line tool will first build the project and then export it as static files into the `/out` folder.

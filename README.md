# ✨ [tailwindcss-motion](https://rombo.co/tailwind/) ✨

[![NPM Version](https://img.shields.io/npm/v/tailwindcss-motion?color=F3FC6F)](https://www.npmjs.com/package/tailwindcss-motion)
[![NPM Downloads](https://img.shields.io/npm/dw/tailwindcss-motion?color=F3FC6F)](https://www.npmjs.com/package/tailwindcss-motion)

tailwindcss-motion is a Tailwind CSS Plugin made at [RomboHQ](https://rombo.co/).
It’s a simple, yet powerful, animation library with a simple syntax.

_Motion, without commotion._

## ⚒️ Installation

**1. Install npm package**

```bash
npm i -D tailwindcss-motion
```

**2. Add into your tailwind.config.js**

```js
// tailwind.config.js

export default {
     content: [...],
     theme: {
        extend: {...},
     },
     plugins: [require('tailwindcss-motion')],
};
```

**or,** to use ESM:

```js
import tailwindcssMotion from "tailwindcss-motion";

/** @type {import('tailwindcss').Config} */
export default {
     content: [...],
     theme: {
          extend: {},
     },
     plugins: [tailwindcssMotion],
};
```

## How does it work?

We provide a simple syntax to animate any element in your Tailwind project. Instead of defining custom keyframes, we provide utility classes to animate every dimension, inline.

For example, for a slide and fade effect — you simply need `motion-translate-x-in-25 motion-opacity-in-0` or, you can use one of our presets with `motion-preset-fade`
## Documentation

For full documentation, visit [docs.rombo.co/tailwind](https://docs.rombo.co/tailwind)


## 🧩 Introducing the Chrome Extension
Take your animations to the next level with the [Rombo Chrome Extension](https://rombo.co/extension/)!

Create animations visually: 
- Use our intuitive animator directly in your browser.
- Loop animations
- Save presets: Keep your animations organized and reusable.
- Export options: Output animations as Tailwind classes, pure CSS, or Framer Motion code.

![extension](https://github.com/user-attachments/assets/68a751f7-00a5-449e-a92d-f5499d3b9152)


## Examples

Landing page - https://play.tailwindcss.com/uAuVF8F1vC

![example-1](https://github.com/user-attachments/assets/c847e7ee-f5b6-4620-afdc-2f8b037c36fd)

Chat dialog - https://play.tailwindcss.com/gjGqEKswjQ

![example-2](https://github.com/user-attachments/assets/f11fbe59-7902-4d73-ab13-0e20ca7cc21b)

Low Battery Dynamic Island - https://play.tailwindcss.com/tvYFbHtNNQ

![example-3](https://github.com/user-attachments/assets/5f1e67d7-5f93-46d5-badb-ab1d3d526efc)

Apple Color Swatches - https://play.tailwindcss.com/cvQ3Nk3v8j

![example-4](https://github.com/user-attachments/assets/887fba04-9642-4a4f-8ace-7375a4aa65b6)

Rombo Loop - https://play.tailwindcss.com/MLdegkb9Wq

![example-5](https://github.com/user-attachments/assets/7138fb7a-d622-4590-92b5-6682806797e0)

Emoji Animations - https://play.tailwindcss.com/86s55I4wmC

![example-6](https://github.com/user-attachments/assets/3143dc8c-99c1-4df7-8709-a52b67d2824a)


## What's Rombo?

Rombo is an early-stage company, building tools to help companies build beautiful interactive interfaces. We're starting out with a toolkit for engineers, designers and creative marketers to animate natively inside common Workflows — like Tailwind, Figma, Webflow, Shopify & more to come!

## More Resources

- [Bringing Motion to Tailwind CSS: Building an animation plugin at Rombo](https://www.kvin.me/posts/tailwind-motion) - Blog post about the creation of this library
- [Animator Builder](https://rombo.co/tailwind/#animator) - Create animations intuitively and export them to Tailwind classes
- [UnoCSS port](https://github.com/whatnickcodes/unocss-preset-tailwindcss-motion) - Port created by [@whatnickcodes](https://github.com/whatnickcodes)

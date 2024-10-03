# ✨ [Tailwind Motion β](https://rombo.co/tailwind/) ✨ 

![NPM Version](https://img.shields.io/npm/v/tailwindcss-motion)

Tailwind Motion is a Tailwind CSS Plugin made at [RomboHQ](https://rombo.co/).
It’s a simple, yet powerful, animation library with a simple syntax.

_Motion, without commotion._

## ⚒️ Installation

**1. Install npm package**

```bash
npm i -d tailwindcss-motion
```

**2. Add into your tailwind.config.js**

```js
// tailwind.config.js

export default {
     theme: {
        extend: {...},
    },
   plugins: [require('tailwindcss-motion')],
};
```

## How does it work?

We provide a simple syntax to animate any element in your Tailwind project. Instead of defining custom keyframes, we provide utility classes to animate every dimension, inline.

For example, for a slide and fade effect — you simply need `motion-translate-x-in-25 motion-opacity-in-0` or, you can use one of our presets with `motion-preset-fade`

## Motion Presets

We provide a collection of presets to animate your components easily:

- **Fade**: `motion-preset-fade`
- **Slide**:
  - Right: `motion-preset-slide-right`
  - Left: `motion-preset-slide-left`
  - Up: `motion-preset-slide-up`
  - Down: `motion-preset-slide-down`
- **Focus**: `motion-preset-focus`
- **Blur**:
  - Right: `motion-preset-blur-right`
  - Left: `motion-preset-blur-left`
  - Up: `motion-preset-blur-up`
  - Down: `motion-preset-blur-down`
- **Bounce**: `motion-preset-bounce`
- **Expand**: `motion-preset-expand`
- **Shrink**: `motion-preset-shrink`
- **Pop**: `motion-preset-pop`
- **Compress**: `motion-preset-compress`
- **Shake**: `motion-preset-shake`
- **Wiggle**: `motion-preset-wiggle`
- **Confetti**: `motion-preset-confetti`
- **Typewriter**: `motion-preset-typewriter-[number of characters]`
- **Flomoji**: `motion-preset-flomoji`

### Customizing Presets

You can further customize presets using [base animations](#Base-Animations) and [modifiers](#Modifiers) classes.

For example:

- Add a delay to `motion-preset-fade`:

```html
<div class="motion-preset-fade motion-delay-500"></div>
```

- Adjust the duration of `motion-preset-slide-right`:

```html
<div class="motion-preset-slide-right motion-duration-2000"></div>
```

- Increase the height of `motion-preset-bounce`:

```html
<div class="motion-preset-bounce -motion-translate-y-in-150"></div>
```

## Base Animations

Appart from presets, you can create your own custom animations by combining these base classes:

- **Fade In**: `motion-opacity-in-0`
- **Slide In**:
  - From below: `motion-translate-y-in-100`
  - From above: `-motion-translate-y-in-100`
- **Scale In**: `motion-scale-in-75`
- **Rotate In**:
  - From 180 degrees: `motion-rotate-in-180`
  - From -90 degrees: `-motion-rotate-in-90`
- **Blur In**: `motion-blur-in-sm`
- **Grayscale In**: `motion-grayscale-in`
- **Background Color Change**: `motion-bg-in-red-500`
- **Text Color Change**: `motion-text-in-blue-500`

### Combining Animations

You can combine multiple animations on a single element:

```html
<div
  class="motion-scale-in-75 motion-translate-y-in-100 motion-rotate-in-90"
></div>
```

### Exit animations

For exit animations, simply replace `in` with `out` in the class name.

## Modifiers

You can customize the duration, delay, and timing function of any animation.

- **Duration**: `motion-duration-500`
- **Delay**: `motion-delay-500`
- **Timing Function**: `motion-timing-spring-bouncy`

For example:

```html
<div
  class="motion-duration-2000 motion-rotate-in-180 motion-opacity-in-0"
></div>
```

This applies a duration of 2000ms to both the rotation and opacity animations.

### Modifiers for each property

You can apply modifiers to specific properties using a slash `/`.

For example:

```html
<div
  class="motion-delay-500/rotate motion-rotate-in-180 motion-opacity-in-0"
></div>
```

Here, the delay of 500ms is applied **only** to the rotation, not the opacity.

## Ease Functions

The plugin includes custom timing functions:

a few examples are:

- `motion-ease-spring-smooth`
- `motion-ease-spring-snappy`
- `motion-ease-spring-bouncy`
- `motion-ease-spring-bounciest`
- `motion-ease-bounce`
- `motion-ease-bounce`
- `motion-ease-in-quart`

## Examples

Landing page - https://play.tailwindcss.com/uAuVF8F1vC

![example-1](https://github.com/user-attachments/assets/c847e7ee-f5b6-4620-afdc-2f8b037c36fd)



Chat dialog - https://play.tailwindcss.com/gjGqEKswjQ


![example-2](https://github.com/user-attachments/assets/f11fbe59-7902-4d73-ab13-0e20ca7cc21b)


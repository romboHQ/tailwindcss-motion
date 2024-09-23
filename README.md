# Animation Utility Classes

## Basic Animations

Use the following utility classes to animate your components:

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

## Combining Animations

You can combine multiple animations in a single element:

```html
<div
  class="motion-scale-in-75 motion-translate-y-in-100 motion-rotate-in-90 motion-blur-in-sm motion-opacity-in-0 motion-bg-in-blue-500"
></div>
```

## Customizing Animations

Use modifiers to customize your animations:

- **Duration**: `motion-duration-500`
- **Delay**: `motion-delay-500`
- **Timing Function**: `motion-timing-spring-bouncy`

Apply modifiers to specific animations:

```html
<div
  class="motion-delay-500/rotate motion-timing-spring-bouncier/translate motion-duration-500/opacity ..."
></div>
```

## Spring Timing Functions

The plugin includes custom spring timing functions:

- `motion-timing-spring-smooth`
- `motion-timing-spring-snappy`
- `motion-timing-spring-bouncy`
- `motion-timing-spring-bouncier`

## Motion Presets

The following presets are available for animations:

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

## Customizing Presets

You can further customize presets with the base animation classes. For example, you can combine a preset with a duration modifier:

```html
<div class="motion-preset-fade motion-duration-500"></div>
```

## Accessibility

The plugin respects user preferences for reduced motion. When the `prefers-reduced-motion` media query is set to `reduce`, all transform-based animations (scale, translate, and rotate) are disabled. Other animations like opacity, blur, grayscale, and color changes will still work.

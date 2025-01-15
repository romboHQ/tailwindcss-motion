// Define spring types and their corresponding perceptual duration multipliers
export const springPerceptualMultipliers = {
  "var(--motion-spring-smooth)": "1.66",
  "var(--motion-spring-snappy)": "1.66",
  "var(--motion-spring-bouncy)": "1.66",
  "var(--motion-spring-bouncier)": "2.035",
  "var(--motion-spring-bounciest)": "5.285",
  "var(--motion-bounce)": "2",
};

/**
 * @param {import('tailwindcss/types/config').PluginAPI['matchUtilities']} matchUtilities
 * @param {import('tailwindcss/types/config').PluginAPI['addUtilities']} addUtilities
 * @param {import('tailwindcss/types/config').PluginAPI['theme']} theme
 * */
export function addModifiers(matchUtilities, addUtilities, theme) {
  // duration
  matchUtilities(
    {
      "motion-duration": (value, { modifier }) => {
        switch (modifier) {
          case "scale":
            return { "--motion-scale-duration": value };
          case "translate":
            return { "--motion-translate-duration": value };
          case "rotate":
            return { "--motion-rotate-duration": value };
          case "blur":
          case "grayscale":
            return { "--motion-filter-duration": value };
          case "opacity":
            return { "--motion-opacity-duration": value };
          case "background":
            return { "--motion-background-color-duration": value };
          case "text":
            return { "--motion-text-color-duration": value };
          default:
            return {
              "--motion-duration": value,
            };
        }
      },
    },
    {
      values: theme("motionDuration"),
      modifiers: {
        scale: "scale",
        translate: "translate",
        rotate: "rotate",
        blur: "blur",
        grayscale: "grayscale",
        opacity: "opacity",
        background: "background",
        text: "text",
      },
    }
  );

  // delay
  matchUtilities(
    {
      "motion-delay": (value, { modifier }) => {
        switch (modifier) {
          case "scale":
            return { "--motion-scale-delay": value };
          case "translate":
            return { "--motion-translate-delay": value };
          case "rotate":
            return { "--motion-rotate-delay": value };
          case "blur":
          case "grayscale":
            return { "--motion-filter-delay": value };
          case "opacity":
            return { "--motion-opacity-delay": value };
          case "background":
            return { "--motion-background-color-delay": value };
          case "text":
            return { "--motion-text-color-delay": value };
          default:
            return {
              "--motion-delay": value,
            };
        }
      },
    },
    {
      values: theme("motionDelay"),
      modifiers: {
        scale: "scale",
        translate: "translate",
        rotate: "rotate",
        blur: "blur",
        grayscale: "grayscale",
        opacity: "opacity",
        background: "background",
        text: "text",
      },
    }
  );

  // ease
  matchUtilities(
    {
      "motion-ease": (value, { modifier }) => {
        // if the ease isn't a spring, the multiplier doesn't change anything
        const perceptualDurationMultiplier =
          springPerceptualMultipliers[value] || 1;

        const isSpringWithBounce = [
          "var(--motion-spring-bouncy)",
          "var(--motion-spring-bouncier)",
          "var(--motion-spring-bounciest)",
          "var(--motion-bounce)",
        ].includes(value);

        switch (modifier) {
          case "scale":
            return {
              "--motion-scale-timing": value,
              "--motion-scale-perceptual-duration-multiplier": `${perceptualDurationMultiplier}`,
            };
          case "translate":
            return {
              "--motion-translate-timing": value,
              "--motion-translate-perceptual-duration-multiplier": `${perceptualDurationMultiplier}`,
            };
          case "rotate":
            return {
              "--motion-rotate-timing": value,
              "--motion-rotate-perceptual-duration-multiplier": `${perceptualDurationMultiplier}`,
            };
          case "blur":
          case "grayscale":
            return {
              "--motion-filter-timing": value,
              "--motion-filter-perceptual-duration-multiplier": `${perceptualDurationMultiplier}`,
            };
          case "opacity":
            return {
              "--motion-opacity-timing": value,
              "--motion-opacity-perceptual-duration-multiplier": `${perceptualDurationMultiplier}`,
            };
          case "background":
            return {
              "--motion-background-color-timing": value,
              "--motion-background-color-perceptual-duration-multiplier": `${perceptualDurationMultiplier}`,
            };
          case "text":
            return {
              "--motion-text-color-timing": value,
              "--motion-text-color-perceptual-duration-multiplier": `${perceptualDurationMultiplier}`,
            };
          default:
            if (isSpringWithBounce) {
              return {
                "--motion-timing": value,
                "--motion-perceptual-duration-multiplier": `${perceptualDurationMultiplier}`,

                // filter, opacity, and color animations don't look good with bouncy springs
                // so we use a smooth spring for them
                "--motion-filter-timing": "var(--motion-spring-smooth)",
                "--motion-opacity-timing": "var(--motion-spring-smooth)",
                "--motion-background-color-timing":
                  "var(--motion-spring-smooth)",
                "--motion-text-color-timing": "var(--motion-spring-smooth)",

                "--motion-filter-perceptual-duration-multiplier": "1.66",
                "--motion-opacity-perceptual-duration-multiplier": "1.66",
                "--motion-background-color-perceptual-duration-multiplier":
                  "1.66",
                "--motion-text-color-perceptual-duration-multiplier": "1.66",
              };
            } else {
              return {
                "--motion-timing": value,
                "--motion-perceptual-duration-multiplier": `${perceptualDurationMultiplier}`,
              };
            }
        }
      },
    },
    {
      values: theme("motionTimingFunction"),
      modifiers: {
        scale: "scale",
        translate: "translate",
        rotate: "rotate",
        blur: "blur",
        grayscale: "grayscale",
        opacity: "opacity",
        background: "background",
        text: "text",
      },
    }
  );

  // animation play state
  addUtilities({
    ".motion-paused": {
      animationPlayState: "paused",
      "&::before": {
        animationPlayState: "paused",
      },
      "&::after": {
        animationPlayState: "paused",
      },
    },
    ".motion-running": {
      animationPlayState: "running",
      "&::before": {
        animationPlayState: "running",
      },
      "&::after": {
        animationPlayState: "running",
      },
    },
  });

  // loop
  matchUtilities(
    {
      "motion-loop": (value, { modifier }) => {
        switch (modifier) {
          case "scale":
            return { "--motion-scale-loop-count": value };
          case "translate":
            return { "--motion-translate-loop-count": value };
          case "rotate":
            return { "--motion-rotate-loop-count": value };
          case "blur":
          case "grayscale":
            return { "--motion-filter-loop-count": value };
          case "opacity":
            return { "--motion-opacity-loop-count": value };
          case "background":
            return { "--motion-background-color-loop-count": value };
          case "text":
            return { "--motion-text-color-loop-count": value };
          default:
            return {
              "--motion-loop-count": value,
            };
        }
      },
    },
    {
      values: theme("motionLoopCount"),
      modifiers: {
        scale: "scale",
        translate: "translate",
        rotate: "rotate",
        blur: "blur",
        grayscale: "grayscale",
        opacity: "opacity",
        background: "background",
        text: "text",
      },
    }
  );
}

export const modifiersTheme = {
  motionTimingFunction: (theme) => ({
    ...theme("transitionTimingFunction"),
    "spring-smooth": "var(--motion-spring-smooth)",
    "spring-snappy": "var(--motion-spring-snappy)",
    "spring-bouncy": "var(--motion-spring-bouncy)",
    "spring-bouncier": "var(--motion-spring-bouncier)",
    "spring-bounciest": "var(--motion-spring-bounciest)",

    bounce: "var(--motion-bounce)",

    "in-quad": "cubic-bezier(.55, .085, .68, .53)",
    "in-cubic": "cubic-bezier(.550, .055, .675, .19)",
    "in-quart": "cubic-bezier(.895, .03, .685, .22)",
    "in-back": "cubic-bezier(0.6,-0.28,0.74,0.05)",

    "out-quad": "cubic-bezier(.25, .46, .45, .94)",
    "out-cubic": "cubic-bezier(.215, .61, .355, 1)",
    "out-quart": "cubic-bezier(.165, .84, .44, 1)",
    "out-back": "cubic-bezier(0.18,0.89,0.32,1.27)",

    "in-out-quad": "cubic-bezier(.455, .03, .515, .955)",
    "in-out-cubic": "cubic-bezier(.645, .045, .355, 1)",
    "in-out-quart": "cubic-bezier(.77, 0, .175, 1)",
    "in-out-back": "cubic-bezier(0.68,-0.55,0.27,1.55)",
  }),
  motionDuration: (theme) => ({
    ...theme("transitionDuration"),
    1500: "1500ms",
    2000: "2000ms",
    DEFAULT: "750ms",
  }),
  motionDelay: (theme) => ({
    ...theme("motionDuration"),
    DEFAULT: "0ms",
  }),
  motionLoopCount: {
    infinite: "infinite",
    once: "1",
    twice: "2",
  },
};

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

// animation strings
export const scaleInAnimation =
  "motion-scale-in calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both";
export const scaleOutAnimation =
  "motion-scale-out calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both";
export const scaleLoopAnimation = (type) =>
  `motion-scale-loop-${type} calc(var(--motion-scale-duration) * var(--motion-scale-perceptual-duration-multiplier)) var(--motion-scale-timing) var(--motion-scale-delay) both var(--motion-scale-loop-count)`;

export const translateInAnimation =
  "motion-translate-in calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both";
export const translateOutAnimation =
  "motion-translate-out calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both";
export const translateLoopAnimation = (type) =>
  `motion-translate-loop-${type} calc(var(--motion-translate-duration) * var(--motion-translate-perceptual-duration-multiplier)) var(--motion-translate-timing) var(--motion-translate-delay) both var(--motion-translate-loop-count)`;

export const rotateInAnimation =
  "motion-rotate-in calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both";
export const rotateOutAnimation =
  "motion-rotate-out calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both";
export const rotateLoopAnimation = (type) =>
  `motion-rotate-loop-${type} calc(var(--motion-rotate-duration) * var(--motion-rotate-perceptual-duration-multiplier)) var(--motion-rotate-timing) var(--motion-rotate-delay) both var(--motion-rotate-loop-count)`;

export const filterInAnimation =
  "motion-filter-in calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both";
export const filterOutAnimation =
  "motion-filter-out calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both";
export const filterLoopAnimation = (type) =>
  `motion-filter-loop-${type} calc(var(--motion-filter-duration) * var(--motion-filter-perceptual-duration-multiplier)) var(--motion-filter-timing) var(--motion-filter-delay) both var(--motion-filter-loop-count)`;

export const opacityInAnimation =
  "motion-opacity-in calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both";
export const opacityOutAnimation =
  "motion-opacity-out calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both";
export const opacityLoopAnimation = (type) =>
  `motion-opacity-loop-${type} calc(var(--motion-opacity-duration) * var(--motion-opacity-perceptual-duration-multiplier)) var(--motion-opacity-timing) var(--motion-opacity-delay) both var(--motion-opacity-loop-count)`;

export const backgroundColorInAnimation =
  "motion-background-color-in calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both";
export const backgroundColorOutAnimation =
  "motion-background-color-out calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both";
export const backgroundColorLoopAnimation = (type) =>
  `motion-background-color-loop-${type} calc(var(--motion-background-color-duration) * var(--motion-background-color-perceptual-duration-multiplier)) var(--motion-background-color-timing) var(--motion-background-color-delay) both var(--motion-background-color-loop-count)`;

export const textColorInAnimation =
  "motion-text-color-in calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both";
export const textColorOutAnimation =
  "motion-text-color-out calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both";
export const textColorLoopAnimation = (type) =>
  `motion-text-color-loop-${type} calc(var(--motion-text-color-duration) * var(--motion-text-color-perceptual-duration-multiplier)) var(--motion-text-color-timing) var(--motion-text-color-delay) both var(--motion-text-color-loop-count)`;

/**
 * @param {import('tailwindcss/types/config').PluginAPI['matchUtilities']} matchUtilities
 * @param {import('tailwindcss/types/config').PluginAPI['theme']} theme
 * */
export function addBaseAnimations(matchUtilities, theme) {
  // scale
  matchUtilities(
    {
      "motion-scale-in": (value) => ({
        "--motion-origin-scale-x": value,
        "--motion-origin-scale-y": value,
        "--motion-scale-in-animation": scaleInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
      "motion-scale-x-in": (value) => ({
        "--motion-origin-scale-x": value,
        "--motion-scale-in-animation": scaleInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
      "motion-scale-y-in": (value) => ({
        "--motion-origin-scale-y": value,
        "--motion-scale-in-animation": scaleInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),

      "motion-scale-out": (value) => ({
        "--motion-end-scale-x": value,
        "--motion-end-scale-y": value,
        "--motion-scale-out-animation": scaleOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
      "motion-scale-x-out": (value) => ({
        "--motion-end-scale-x": value,
        "--motion-scale-out-animation": scaleOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
      "motion-scale-y-out": (value) => ({
        "--motion-end-scale-y": value,
        "--motion-scale-out-animation": scaleOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionScale"),
    }
  );

  // scale loop
  matchUtilities(
    {
      "motion-scale-x-loop": (value, { modifier }) => ({
        "--motion-loop-scale-x": value,
        "--motion-scale-loop-animation": scaleLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
      "motion-scale-y-loop": (value, { modifier }) => ({
        "--motion-loop-scale-y": value,
        "--motion-scale-loop-animation": scaleLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
      "motion-scale-loop": (value, { modifier }) => ({
        "--motion-loop-scale-x": value,
        "--motion-loop-scale-y": value,
        "--motion-scale-loop-animation": scaleLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
    },
    {
      values: theme("motionScale"),
      modifiers: {
        mirror: "mirror",
        reset: "reset",
      },
    }
  );

  // translate
  matchUtilities(
    {
      "motion-translate-x-in": (value) => ({
        "--motion-origin-translate-x": value,
        "--motion-translate-in-animation": translateInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
      "motion-translate-y-in": (value) => ({
        "--motion-origin-translate-y": value,
        "--motion-translate-in-animation": translateInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),

      "motion-translate-x-out": (value) => ({
        "--motion-end-translate-x": value,
        "--motion-translate-out-animation": translateOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
      "motion-translate-y-out": (value) => ({
        "--motion-end-translate-y": value,
        "--motion-translate-out-animation": translateOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionTranslate"),
      supportsNegativeValues: true,
    }
  );

  // translate loop
  matchUtilities(
    {
      "motion-translate-x-loop": (value, { modifier }) => {
        return {
          "--motion-loop-translate-x": value,
          "--motion-translate-loop-animation": translateLoopAnimation(
            modifier || "mirror"
          ),
          animationComposition: "accumulate",
          animation: "var(--motion-all-loop-and-enter-animations)",
        };
      },
      "motion-translate-y-loop": (value, { modifier }) => {
        return {
          "--motion-loop-translate-y": value,
          "--motion-translate-loop-animation": translateLoopAnimation(
            modifier || "mirror"
          ),
          animationComposition: "accumulate",
          animation: "var(--motion-all-loop-and-enter-animations)",
        };
      },
    },
    {
      values: theme("motionTranslate"),
      supportsNegativeValues: true,
      modifiers: {
        mirror: "mirror",
        reset: "reset",
      },
    }
  );

  // rotate
  matchUtilities(
    {
      "motion-rotate-in": (value) => ({
        "--motion-origin-rotate": value,
        "--motion-rotate-in-animation": rotateInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),

      "motion-rotate-out": (value) => ({
        "--motion-end-rotate": value,
        "--motion-rotate-out-animation": rotateOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionRotate"),
      supportsNegativeValues: true,
    }
  );

  // rotate loop
  matchUtilities(
    {
      "motion-rotate-loop": (value, { modifier }) => ({
        "--motion-loop-rotate": value,
        "--motion-rotate-loop-animation": rotateLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
    },
    {
      values: theme("motionRotate"),
      supportsNegativeValues: true,
      modifiers: {
        mirror: "mirror",
        reset: "reset",
      },
    }
  );

  // blur
  matchUtilities(
    {
      "motion-blur-in": (value) => ({
        "--motion-origin-blur": value,
        "--motion-filter-in-animation": filterInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),

      "motion-blur-out": (value) => ({
        "--motion-end-blur": value,
        "--motion-filter-out-animation": filterOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionBlur"),
    }
  );

  // blur loop
  matchUtilities(
    {
      "motion-blur-loop": (value, { modifier }) => ({
        "--motion-loop-blur": value,
        "--motion-filter-loop-animation": filterLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
    },
    {
      values: theme("motionBlur"),
      modifiers: {
        mirror: "mirror",
        reset: "reset",
      },
    }
  );

  // grayscale
  matchUtilities(
    {
      "motion-grayscale-in": (value) => ({
        "--motion-origin-grayscale": value,
        "--motion-filter-in-animation": filterInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),

      "motion-grayscale-out": (value) => ({
        "--motion-end-grayscale": value,
        "--motion-filter-out-animation": filterOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionGrayscale"),
    }
  );

  // grayscale loop
  matchUtilities(
    {
      "motion-grayscale-loop": (value, { modifier }) => ({
        "--motion-loop-grayscale": value,
        "--motion-filter-loop-animation": filterLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
    },
    {
      values: theme("motionGrayscale"),
      modifiers: {
        mirror: "mirror",
        reset: "reset",
      },
    }
  );

  // opacity
  matchUtilities(
    {
      "motion-opacity-in": (value) => ({
        "--motion-origin-opacity": value,
        "--motion-opacity-in-animation": opacityInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),

      "motion-opacity-out": (value) => ({
        "--motion-end-opacity": value,
        "--motion-opacity-out-animation": opacityOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionOpacity"),
    }
  );

  // opacity loop
  matchUtilities(
    {
      "motion-opacity-loop": (value, { modifier }) => ({
        // we need to subtract 1 because of animation composition
        "--motion-loop-opacity": `calc(${value} - 1)`,
        "--motion-opacity-loop-animation": opacityLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
    },
    {
      values: theme("motionOpacity"),
      modifiers: {
        mirror: "mirror",
        reset: "reset",
      },
    }
  );

  // background-color
  matchUtilities(
    {
      "motion-bg-in": (value) => ({
        "--motion-origin-background-color": value,
        "--motion-background-color-in-animation": backgroundColorInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),

      "motion-bg-out": (value) => ({
        "--motion-end-background-color": value,
        "--motion-background-color-out-animation": backgroundColorOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionBackgroundColor"),
      type: "color",
    }
  );

  // background-color loop
  matchUtilities(
    {
      "motion-bg-loop": (value, { modifier }) => ({
        "--motion-loop-background-color": value,
        "--motion-background-color-loop-animation":
          backgroundColorLoopAnimation(modifier || "mirror"),
        // no animation composition because it makes colors add
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
    },
    {
      values: theme("motionBackgroundColor"),
      type: "color",
      modifiers: {
        mirror: "mirror",
        reset: "reset",
      },
    }
  );

  // text-color
  matchUtilities(
    {
      "motion-text-in": (value) => ({
        "--motion-origin-text-color": value,
        "--motion-text-color-in-animation": textColorInAnimation,
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),

      "motion-text-out": (value) => ({
        "--motion-end-text-color": value,
        "--motion-text-color-out-animation": textColorOutAnimation,
        animation: "var(--motion-all-exit-animations)",
      }),
    },
    {
      values: theme("motionTextColor"),
      type: "color",
    }
  );

  // text-color loop
  matchUtilities(
    {
      "motion-text-loop": (value, { modifier }) => ({
        "--motion-loop-text-color": value,
        "--motion-text-color-loop-animation": textColorLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: "var(--motion-all-loop-and-enter-animations)",
      }),
    },
    {
      values: theme("motionTextColor"),
      type: "color",
      modifiers: {
        mirror: "mirror",
        reset: "reset",
      },
    }
  );
}

/** @type {import('tailwindcss/types/config').CustomThemeConfig} */
export const baseAnimationsTheme = {
  motionScale: (theme) => ({ ...theme("scale"), DEFAULT: "50%" }),
  motionTranslate: {
    0: "0%",
    25: "25%",
    50: "50%",
    75: "75%",
    100: "100%",
    150: "150%",
    DEFAULT: "25%",
  },
  motionRotate: (theme) => ({ ...theme("rotate"), DEFAULT: "12deg" }),
  motionBlur: (theme) => theme("blur"),
  motionGrayscale: (theme) => theme("grayscale"),
  motionOpacity: (theme) => ({ ...theme("opacity"), DEFAULT: "0", 0: "0.001" }),
  motionBackgroundColor: (theme) => flattenColorPalette(theme("colors")),
  motionTextColor: (theme) => flattenColorPalette(theme("colors")),
};

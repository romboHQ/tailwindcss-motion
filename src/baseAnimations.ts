import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js";
import type { Config, PluginAPI } from "tailwindcss/types/config.js";

type ThemeConfig = {
  blur: Record<string, string>;
  colors: Record<string, string>;
  grayscale: Record<string, string>;
  motionBackgroundColor: Record<string, string>;
  motionBlur: Record<string, string>;
  motionGrayscale: Record<string, string>;
  motionOpacity: Record<string, string>;
  motionRotate: Record<string, string>;
  motionScale: Record<string, string>;
  motionTextColor: Record<string, string>;
  motionTranslate: Record<string, string>;
  opacity: Record<string, string>;
  rotate: Record<string, string>;
  scale: Record<string, string>;
};

export const allEnterAnimations =
  "var(--motion-scale-in-animation), var(--motion-translate-in-animation), var(--motion-rotate-in-animation), var(--motion-filter-in-animation), var(--motion-opacity-in-animation), var(--motion-background-color-in-animation), var(--motion-text-color-in-animation)";

export const allExitAnimations =
  "var(--motion-scale-out-animation), var(--motion-translate-out-animation), var(--motion-rotate-out-animation), var(--motion-filter-out-animation), var(--motion-opacity-out-animation), var(--motion-background-color-out-animation), var(--motion-text-color-out-animation)";

export const allLoopAnimations =
  "var(--motion-scale-loop-animation), var(--motion-translate-loop-animation), var(--motion-rotate-loop-animation), var(--motion-filter-loop-animation), var(--motion-opacity-loop-animation), var(--motion-background-color-loop-animation), var(--motion-text-color-loop-animation)";

export const allLoopAndEnterAnimations = `${allEnterAnimations}, ${allLoopAnimations}`;

// animation strings
export const scaleInAnimation =
  "motion-scale-in calc(var(--motion-scale-duration, var(--motion-duration)) * var(--motion-scale-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-scale-timing, var(--motion-timing)) var(--motion-scale-delay, var(--motion-delay)) both";

export const scaleOutAnimation =
  "motion-scale-out calc(var(--motion-scale-duration, var(--motion-duration)) * var(--motion-scale-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-scale-timing, var(--motion-timing)) var(--motion-scale-delay, var(--motion-delay)) both";

export const scaleLoopAnimation = (type: string) =>
  `motion-scale-loop-${type} calc(var(--motion-scale-duration, var(--motion-duration)) * var(--motion-scale-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-scale-timing, var(--motion-timing)) var(--motion-scale-delay, var(--motion-delay)) both var(--motion-scale-loop-count, var(--motion-loop-count))`;

export const translateInAnimation =
  "motion-translate-in calc(var(--motion-translate-duration, var(--motion-duration)) * var(--motion-translate-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-translate-timing, var(--motion-timing)) var(--motion-translate-delay, var(--motion-delay)) both";

export const translateOutAnimation =
  "motion-translate-out calc(var(--motion-translate-duration, var(--motion-duration)) * var(--motion-translate-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-translate-timing, var(--motion-timing)) var(--motion-translate-delay, var(--motion-delay)) both";

export const translateLoopAnimation = (type: string) =>
  `motion-translate-loop-${type} calc(var(--motion-translate-duration, var(--motion-duration)) * var(--motion-translate-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-translate-timing, var(--motion-timing)) var(--motion-translate-delay, var(--motion-delay)) both var(--motion-translate-loop-count, var(--motion-loop-count))`;

export const rotateInAnimation =
  "motion-rotate-in calc(var(--motion-rotate-duration, var(--motion-duration)) * var(--motion-rotate-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-rotate-timing, var(--motion-timing)) var(--motion-rotate-delay, var(--motion-delay)) both";

export const rotateOutAnimation =
  "motion-rotate-out calc(var(--motion-rotate-duration, var(--motion-duration)) * var(--motion-rotate-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-rotate-timing, var(--motion-timing)) var(--motion-rotate-delay, var(--motion-delay)) both";

export const rotateLoopAnimation = (type: string) =>
  `motion-rotate-loop-${type} calc(var(--motion-rotate-duration, var(--motion-duration)) * var(--motion-rotate-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-rotate-timing, var(--motion-timing)) var(--motion-rotate-delay, var(--motion-delay)) both var(--motion-rotate-loop-count, var(--motion-loop-count))`;

export const filterInAnimation =
  "motion-filter-in calc(var(--motion-filter-duration, var(--motion-duration)) * var(--motion-filter-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-filter-timing, var(--motion-timing)) var(--motion-filter-delay, var(--motion-delay)) both";
export const filterOutAnimation =
  "motion-filter-out calc(var(--motion-filter-duration, var(--motion-duration)) * var(--motion-filter-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-filter-timing, var(--motion-timing)) var(--motion-filter-delay, var(--motion-delay)) both";

export const filterLoopAnimation = (type: string) =>
  `motion-filter-loop-${type} calc(var(--motion-filter-duration, var(--motion-duration)) * var(--motion-filter-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-filter-timing, var(--motion-timing)) var(--motion-filter-delay, var(--motion-delay)) both var(--motion-filter-loop-count, var(--motion-loop-count))`;

export const opacityInAnimation =
  "motion-opacity-in calc(var(--motion-opacity-duration, var(--motion-duration)) * var(--motion-opacity-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-opacity-timing, var(--motion-timing)) var(--motion-opacity-delay, var(--motion-delay)) both";

export const opacityOutAnimation =
  "motion-opacity-out calc(var(--motion-opacity-duration, var(--motion-duration)) * var(--motion-opacity-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-opacity-timing, var(--motion-timing)) var(--motion-opacity-delay, var(--motion-delay)) both";

export const opacityLoopAnimation = (type: string) =>
  `motion-opacity-loop-${type} calc(var(--motion-opacity-duration, var(--motion-duration)) * var(--motion-opacity-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-opacity-timing, var(--motion-timing)) var(--motion-opacity-delay, var(--motion-delay)) both var(--motion-opacity-loop-count, var(--motion-loop-count))`;

export const backgroundColorInAnimation =
  "motion-background-color-in calc(var(--motion-background-color-duration, var(--motion-duration)) * var(--motion-background-color-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-background-color-timing, var(--motion-timing)) var(--motion-background-color-delay, var(--motion-delay)) both";

export const backgroundColorOutAnimation =
  "motion-background-color-out calc(var(--motion-background-color-duration, var(--motion-duration)) * var(--motion-background-color-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-background-color-timing, var(--motion-timing)) var(--motion-background-color-delay, var(--motion-delay)) both";

export const backgroundColorLoopAnimation = (type: string) =>
  `motion-background-color-loop-${type} calc(var(--motion-background-color-duration, var(--motion-duration)) * var(--motion-background-color-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-background-color-timing, var(--motion-timing)) var(--motion-background-color-delay, var(--motion-delay)) both var(--motion-background-color-loop-count, var(--motion-loop-count))`;

export const textColorInAnimation =
  "motion-text-color-in calc(var(--motion-text-color-duration, var(--motion-duration)) * var(--motion-text-color-perceptual-duration-multiplier, var(--motion-perceptual-duration-multiplier))) var(--motion-text-color-timing, var(--motion-timing)) var(--motion-text-color-delay, var(--motion-delay)) both";

export const textColorOutAnimation =
  "motion-text-color-out calc(var(--motion-text-color-duration, --motion-duration) * var(--motion-text-color-perceptual-duration-multiplier, --motion-perceptual-duration-multiplier)) var(--motion-text-color-timing, --motion-timing) var(--motion-text-color-delay, --motion-delay) both";

export const textColorLoopAnimation = (type: string) =>
  `motion-text-color-loop-${type} calc(var(--motion-text-color-duration, --motion-duration) * var(--motion-text-color-perceptual-duration-multiplier, --motion-perceptual-duration-multiplier)) var(--motion-text-color-timing, --motion-timing) var(--motion-text-color-delay, --motion-delay) both var(--motion-text-color-loop-count, --motion-loop-count)`;

export function addBaseAnimations(
  matchUtilities: PluginAPI["matchUtilities"],
  theme: (path: keyof ThemeConfig) => Record<string, string>
) {
  // scale
  matchUtilities(
    {
      "motion-scale-in": (value) => ({
        "--motion-origin-scale-x": value,
        "--motion-origin-scale-y": value,
        "--motion-scale-in-animation": scaleInAnimation,
        animation: allLoopAndEnterAnimations,
      }),
      "motion-scale-x-in": (value) => ({
        "--motion-origin-scale-x": value,
        "--motion-scale-in-animation": scaleInAnimation,
        animation: allLoopAndEnterAnimations,
      }),
      "motion-scale-y-in": (value) => ({
        "--motion-origin-scale-y": value,
        "--motion-scale-in-animation": scaleInAnimation,
        animation: allLoopAndEnterAnimations,
      }),

      "motion-scale-out": (value) => ({
        "--motion-end-scale-x": value,
        "--motion-end-scale-y": value,
        "--motion-scale-out-animation": scaleOutAnimation,
        animation: allExitAnimations,
      }),
      "motion-scale-x-out": (value) => ({
        "--motion-end-scale-x": value,
        "--motion-scale-out-animation": scaleOutAnimation,
        animation: allExitAnimations,
      }),
      "motion-scale-y-out": (value) => ({
        "--motion-end-scale-y": value,
        "--motion-scale-out-animation": scaleOutAnimation,
        animation: allExitAnimations,
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
        animation: allLoopAndEnterAnimations,
      }),
      "motion-scale-y-loop": (value, { modifier }) => ({
        "--motion-loop-scale-y": value,
        "--motion-scale-loop-animation": scaleLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: allLoopAndEnterAnimations,
      }),
      "motion-scale-loop": (value, { modifier }) => ({
        "--motion-loop-scale-x": value,
        "--motion-loop-scale-y": value,
        "--motion-scale-loop-animation": scaleLoopAnimation(
          modifier || "mirror"
        ),
        animationComposition: "accumulate",
        animation: allLoopAndEnterAnimations,
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
        animation: allLoopAndEnterAnimations,
      }),
      "motion-translate-y-in": (value) => ({
        "--motion-origin-translate-y": value,
        "--motion-translate-in-animation": translateInAnimation,
        animation: allLoopAndEnterAnimations,
      }),

      "motion-translate-x-out": (value) => ({
        "--motion-end-translate-x": value,
        "--motion-translate-out-animation": translateOutAnimation,
        animation: allExitAnimations,
      }),
      "motion-translate-y-out": (value) => ({
        "--motion-end-translate-y": value,
        "--motion-translate-out-animation": translateOutAnimation,
        animation: allExitAnimations,
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
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-translate-y-loop": (value, { modifier }) => {
        return {
          "--motion-loop-translate-y": value,
          "--motion-translate-loop-animation": translateLoopAnimation(
            modifier || "mirror"
          ),
          animationComposition: "accumulate",
          animation: allLoopAndEnterAnimations,
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
        animation: allLoopAndEnterAnimations,
      }),

      "motion-rotate-out": (value) => ({
        "--motion-end-rotate": value,
        "--motion-rotate-out-animation": rotateOutAnimation,
        animation: allExitAnimations,
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
        animation: allLoopAndEnterAnimations,
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
        animation: allLoopAndEnterAnimations,
      }),

      "motion-blur-out": (value) => ({
        "--motion-end-blur": value,
        "--motion-filter-out-animation": filterOutAnimation,
        animation: allExitAnimations,
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
        animation: allLoopAndEnterAnimations,
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
        animation: allLoopAndEnterAnimations,
      }),

      "motion-grayscale-out": (value) => ({
        "--motion-end-grayscale": value,
        "--motion-filter-out-animation": filterOutAnimation,
        animation: allExitAnimations,
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
        animation: allLoopAndEnterAnimations,
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
        animation: allLoopAndEnterAnimations,
      }),

      "motion-opacity-out": (value) => ({
        "--motion-end-opacity": value,
        "--motion-opacity-out-animation": opacityOutAnimation,
        animation: allExitAnimations,
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
        animation: allLoopAndEnterAnimations,
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
        animation: allLoopAndEnterAnimations,
      }),

      "motion-bg-out": (value) => ({
        "--motion-end-background-color": value,
        "--motion-background-color-out-animation": backgroundColorOutAnimation,
        animation: allExitAnimations,
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
        animation: allLoopAndEnterAnimations,
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
        animation: allLoopAndEnterAnimations,
      }),

      "motion-text-out": (value) => ({
        "--motion-end-text-color": value,
        "--motion-text-color-out-animation": textColorOutAnimation,
        animation: allExitAnimations,
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
        animation: allLoopAndEnterAnimations,
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

export const baseAnimationsTheme: Config["theme"] = {
  motionScale: (
    theme: (path: keyof ThemeConfig) => Record<string, string>
  ) => ({
    ...theme("scale"),
    DEFAULT: "50%",
  }),
  motionTranslate: {
    "0": "0%",
    "25": "25%",
    "50": "50%",
    "75": "75%",
    "100": "100%",
    "150": "150%",
    DEFAULT: "25%",
  },
  motionRotate: (
    theme: (path: keyof ThemeConfig) => Record<string, string>
  ) => ({
    ...theme("rotate"),
    DEFAULT: "12deg",
  }),
  motionBlur: (theme: (path: keyof ThemeConfig) => Record<string, string>) =>
    theme("blur"),
  motionGrayscale: (
    theme: (path: keyof ThemeConfig) => Record<string, string>
  ) => theme("grayscale"),
  motionOpacity: (
    theme: (path: keyof ThemeConfig) => Record<string, string>
  ) => ({
    ...theme("opacity"),
    DEFAULT: "0",
    "0": "0.001",
  }),
  motionBackgroundColor: (
    theme: (path: keyof ThemeConfig) => Record<string, string>
  ) => flattenColorPalette(theme("colors")),
  motionTextColor: (
    theme: (path: keyof ThemeConfig) => Record<string, string>
  ) => flattenColorPalette(theme("colors")),
} as const;

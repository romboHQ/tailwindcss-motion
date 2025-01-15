/** @param {import('tailwindcss/types/config').PluginAPI['addBase']} addBase */
export default function addKeyframes(addBase) {
  // keyframes for the animations
  addBase({
    // if the user prefers reduced motion, don't apply the transform animations
    "@media screen and (prefers-reduced-motion: no-preference)": {
      "@keyframes motion-scale-in": {
        "0%": {
          scale: "var(--motion-origin-scale-x) var(--motion-origin-scale-y)",
        },
        "100%": {
          scale: "1 1",
        },
      },
      "@keyframes motion-scale-out": {
        "0%": {
          scale: "1 1",
        },
        "100%": {
          scale: "var(--motion-end-scale-x) var(--motion-end-scale-y)",
        },
      },
      "@keyframes motion-scale-loop-mirror": {
        "0%, 100%": {
          scale: "1 1",
        },
        "50%": {
          scale: "var(--motion-loop-scale-x) var(--motion-loop-scale-y)",
        },
      },
      "@keyframes motion-scale-loop-reset": {
        "0%": {
          scale: "1 1",
        },
        "100%": {
          scale: "var(--motion-loop-scale-x) var(--motion-loop-scale-y)",
        },
      },
      "@keyframes motion-translate-in": {
        "0%": {
          translate:
            "var(--motion-origin-translate-x) var(--motion-origin-translate-y)",
        },
        "100%": {
          translate: "0 0",
        },
      },
      "@keyframes motion-translate-out": {
        "0%": {
          translate: "0 0",
        },
        "100%": {
          translate:
            "var(--motion-end-translate-x) var(--motion-end-translate-y)",
        },
      },
      "@keyframes motion-translate-loop-mirror": {
        "0%, 100%": {
          translate: "0 0",
        },
        "50%": {
          translate:
            "var(--motion-loop-translate-x) var(--motion-loop-translate-y)",
        },
      },
      "@keyframes motion-translate-loop-reset": {
        "0%": {
          translate: "0 0",
        },
        "100%": {
          translate:
            "var(--motion-loop-translate-x) var(--motion-loop-translate-y)",
        },
      },
      "@keyframes motion-rotate-in": {
        "0%": {
          rotate: "var(--motion-origin-rotate)",
        },
        "100%": {
          rotate: "0",
        },
      },
      "@keyframes motion-rotate-out": {
        "0%": {
          rotate: "0",
        },
        "100%": {
          rotate: "var(--motion-end-rotate)",
        },
      },
      "@keyframes motion-rotate-loop-mirror": {
        "0%, 100%": {
          rotate: "0deg",
        },
        "50%": {
          rotate: "var(--motion-loop-rotate)",
        },
      },
      "@keyframes motion-rotate-loop-reset": {
        "0%": {},
        "100%": {
          rotate: "var(--motion-loop-rotate)",
        },
      },
    },
    "@keyframes motion-filter-in": {
      "0%": {
        filter:
          "blur(var(--motion-origin-blur)) grayscale(var(--motion-origin-grayscale))",
      },
      "100%": {
        filter: "blur(0) grayscale(0)",
      },
    },
    "@keyframes motion-filter-out": {
      "0%": {
        filter: "blur(0) grayscale(0)",
      },
      "100%": {
        filter:
          "blur(var(--motion-end-blur)) grayscale(var(--motion-end-grayscale))",
      },
    },
    "@keyframes motion-filter-loop-mirror": {
      "0%, 100%": {
        filter: "blur(0) grayscale(0)",
      },
      "50%": {
        filter:
          "blur(var(--motion-loop-blur)) grayscale(var(--motion-loop-grayscale))",
      },
    },
    "@keyframes motion-filter-loop-reset": {
      "0%": {
        filter: "blur(0) grayscale(0)",
      },
      "100%": {
        filter:
          "blur(var(--motion-loop-blur)) grayscale(var(--motion-loop-grayscale))",
      },
    },
    "@keyframes motion-opacity-in": {
      "0%": {
        opacity: "var(--motion-origin-opacity)",
      },
    },
    "@keyframes motion-opacity-out": {
      "100%": {
        opacity: "var(--motion-end-opacity)",
      },
    },
    "@keyframes motion-opacity-loop-mirror": {
      "0%, 100%": {},
      "50%": {
        opacity: "var(--motion-loop-opacity)",
      },
    },
    "@keyframes motion-opacity-loop-reset": {
      "0%": {},
      "100%": {
        opacity: "var(--motion-loop-opacity)",
      },
    },
    "@keyframes motion-background-color-in": {
      "0%": {
        backgroundColor: "var(--motion-origin-background-color)",
      },
    },
    "@keyframes motion-background-color-out": {
      "100%": {
        backgroundColor: "var(--motion-end-background-color)",
      },
    },
    "@keyframes motion-background-color-loop-mirror": {
      "0%, 100%": {},
      "50%": {
        backgroundColor: "var(--motion-loop-background-color)",
      },
    },
    "@keyframes motion-background-color-loop-reset": {
      "0%": {},
      "100%": {
        backgroundColor: "var(--motion-loop-background-color)",
      },
    },
    "@keyframes motion-text-color-in": {
      "0%": {
        color: "var(--motion-origin-text-color)",
      },
    },
    "@keyframes motion-text-color-out": {
      "100%": {
        color: "var(--motion-end-text-color)",
      },
    },
    "@keyframes motion-text-color-loop-mirror": {
      "0%, 100%": {},
      "50%": {
        color: "var(--motion-loop-text-color)",
      },
    },
    "@keyframes motion-text-color-loop-reset": {
      "0%": {},
      "100%": {
        color: "var(--motion-loop-text-color)",
      },
    },
  });
}

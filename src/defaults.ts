import type { PluginAPI } from "tailwindcss/types/config.js";

export default function addDefaults(addBase: PluginAPI["addBase"]) {
  /**
   * Default values for the motion variables
   */
  addBase({
    /**
     * Easing functions
     */
    "@property --motion-bounce": {
      syntax: '"*"',
      inherits: "false",
      "initial-value":
        "linear(0, 0.004, 0.016, 0.035, 0.063, 0.098, 0.141 13.6%, 0.25, 0.391, 0.563, 0.765,1, 0.891 40.9%, 0.848, 0.813, 0.785, 0.766, 0.754, 0.75, 0.754, 0.766, 0.785,0.813, 0.848, 0.891 68.2%, 1 72.7%, 0.973, 0.953, 0.941, 0.938, 0.941, 0.953,0.973, 1, 0.988, 0.984, 0.988, 1)",
    },

    // from https://www.kvin.me/css-springs
    "@property --motion-spring-smooth": {
      syntax: '"*"',
      inherits: "false",
      "initial-value":
        "linear(0, 0.001 0.44%, 0.0045 0.94%, 0.0195 2.03%, 0.0446 3.19%, 0.0811 4.5%, 0.1598 6.82%, 0.3685 12.34%, 0.4693 15.17%, 0.5663, 0.6498 21.27%, 0.7215 24.39%, 0.7532 25.98%, 0.7829 27.65%, 0.8105, 0.8349 31.14%, 0.8573 32.95%, 0.8776 34.84%, 0.8964 36.87%, 0.9136 39.05%, 0.929 41.37%, 0.9421 43.77%, 0.9537 46.38%, 0.9636 49.14%, 0.9789 55.31%, 0.9888 62.35%, 0.9949 71.06%, 0.9982 82.52%, 0.9997 99.94%)",
    },

    "@property --motion-spring-snappy": {
      syntax: '"*"',
      inherits: "false",
      "initial-value":
        "linear(0, 0.0014, 0.0053 1.02%, 0.0126, 0.0227 2.18%, 0.0517 3.41%, 0.094 4.79%, 0.1865 7.26%, 0.4182 12.77%, 0.5246 15.46%, 0.6249, 0.7112, 0.7831 23.95%, 0.8146 25.4%, 0.844, 0.8699 28.45%, 0.8935, 0.9139 31.64%, 0.932, 0.9473, 0.9601 36.65%, 0.9714 38.47%, 0.9808 40.35%, 0.9948 44.49%, 1.0031 49.43%, 1.0057 53.35%, 1.0063 58.14%, 1.0014 80.78%, 1.0001 99.94%)",
    },

    "@property --motion-spring-bouncy": {
      syntax: '"*"',
      inherits: "false",
      "initial-value":
        "linear(0, 0.0018, 0.0069, 0.0151 1.74%, 0.0277 2.4%, 0.062 3.7%, 0.1115 5.15%, 0.2211 7.77%, 0.4778 13.21%, 0.5912 15.75%, 0.6987 18.44%, 0.7862 20.98%, 0.861 23.59%, 0.8926, 0.9205, 0.945 27.51%, 0.9671 28.89%, 0.9868, 1.003 31.79%, 1.0224 34.11%, 1.0358 36.58%, 1.0436 39.27%, 1.046 42.31%, 1.0446 44.71%, 1.0406 47.47%, 1.0118 61.84%, 1.0027 69.53%, 0.9981 80.49%, 0.9991 99.94%)",
    },

    "@property --motion-spring-bouncier": {
      syntax: '"*"',
      inherits: "false",
      "initial-value":
        "linear(0, 0.0023, 0.0088, 0.0194 1.59%, 0.035 2.17%, 0.078 3.33%, 0.1415 4.64%, 0.2054 5.75%, 0.2821 6.95%, 0.5912 11.45%, 0.7205 13.43%, 0.8393 15.45%, 0.936 17.39%, 0.9778, 1.015, 1.0477, 1.0759, 1.0998 22.22%, 1.1203, 1.1364, 1.1484 25.26%, 1.1586 26.61%, 1.1629 28.06%, 1.1613 29.56%, 1.1537 31.2%, 1.1434 32.6%, 1.1288 34.19%, 1.0508 41.29%, 1.0174 44.87%, 1.0025 46.89%, 0.9911 48.87%, 0.9826 50.9%, 0.9769 53.03%, 0.9735 56.02%, 0.9748 59.45%, 0.9964 72.64%, 1.0031 79.69%, 1.0042 86.83%, 1.0008 99.97%)",
    },

    "@property --motion-spring-bounciest": {
      syntax: '"*"',
      inherits: "false",
      "initial-value":
        "linear(0, 0.0032, 0.0131, 0.0294, 0.0524, 0.0824, 0.1192 1.54%, 0.2134 2.11%, 0.3102 2.59%, 0.4297 3.13%, 0.8732 4.95%, 1.0373, 1.1827 6.36%, 1.2972 7.01%, 1.3444, 1.3859, 1.4215, 1.4504, 1.4735, 1.4908, 1.5024, 1.5084 9.5%, 1.5091, 1.5061, 1.4993, 1.4886, 1.4745, 1.4565 11.11%, 1.4082 11.7%, 1.3585 12.2%, 1.295 12.77%, 1.0623 14.64%, 0.9773, 0.9031 16.08%, 0.8449 16.73%, 0.8014, 0.7701 17.95%, 0.7587, 0.7501, 0.7443, 0.7412 19.16%, 0.7421 19.68%, 0.7508 20.21%, 0.7672 20.77%, 0.7917 21.37%, 0.8169 21.87%, 0.8492 22.43%, 0.9681 24.32%, 1.0114, 1.0492 25.75%, 1.0789 26.41%, 1.1008, 1.1167, 1.1271, 1.1317 28.81%, 1.1314, 1.1271 29.87%, 1.1189 30.43%, 1.1063 31.03%, 1.0769 32.11%, 0.9941 34.72%, 0.9748 35.43%, 0.9597 36.09%, 0.9487, 0.9407, 0.9355, 0.933 38.46%, 0.9344 39.38%, 0.9421 40.38%, 0.9566 41.5%, 0.9989 44.12%, 1.0161 45.37%, 1.029 46.75%, 1.0341 48.1%, 1.0335 49.04%, 1.0295 50.05%, 1.0221 51.18%, 0.992 55.02%, 0.9854 56.38%, 0.9827 57.72%, 0.985 59.73%, 1.004 64.67%, 1.0088 67.34%, 1.0076 69.42%, 0.9981 74.28%, 0.9956 76.85%, 0.9961 79.06%, 1.0023 86.46%, 0.999 95.22%, 0.9994 100%)",
    },

    /**
     * Enter animations origin values
     */
    "@property --motion-origin-scale-x": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "100%",
    },

    "@property --motion-origin-scale-y": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "100%",
    },

    "@property --motion-origin-translate-x": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0%",
    },

    "@property --motion-origin-translate-y": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0%",
    },

    "@property --motion-origin-rotate": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0deg",
    },

    "@property --motion-origin-blur": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0px",
    },

    "@property --motion-origin-grayscale": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0%",
    },

    "@property --motion-origin-opacity": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "100%",
    },

    "@property --motion-origin-background-color": {
      syntax: '"*"',
      inherits: "false",
    },

    "@property --motion-origin-text-color": {
      syntax: '"*"',
      inherits: "false",
    },

    /**
     * Exit animations end values
     */
    "@property --motion-end-scale-x": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "100%",
    },

    "@property --motion-end-scale-y": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "100%",
    },

    "@property --motion-end-translate-x": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0%",
    },

    "@property --motion-end-translate-y": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0%",
    },

    "@property --motion-end-rotate": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0deg",
    },

    "@property --motion-end-blur": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0px",
    },

    "@property --motion-end-grayscale": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0%",
    },

    "@property --motion-end-opacity": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "100%",
    },

    "@property --motion-end-background-color": {
      syntax: '"*"',
      inherits: "false",
    },

    "@property --motion-end-text-color": {
      syntax: '"*"',
      inherits: "false",
    },

    /**
     * Loop animations values
     */
    "@property --motion-loop-scale-x": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "100%",
    },

    "@property --motion-loop-scale-y": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "100%",
    },

    "@property --motion-loop-translate-x": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0%",
    },

    "@property --motion-loop-translate-y": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0%",
    },

    "@property --motion-loop-rotate": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0deg",
    },

    "@property --motion-loop-blur": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0px",
    },

    "@property --motion-loop-grayscale": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0%",
    },

    "@property --motion-loop-opacity": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "100%",
    },

    "@property --motion-loop-background-color": {
      syntax: '"*"',
      inherits: "false",
    },

    "@property --motion-loop-text-color": {
      syntax: '"*"',
      inherits: "false",
    },

    /**
     * Animation modifiers
     */
    "@property --motion-duration": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "700ms",
    },

    "@property --motion-timing": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "cubic-bezier(.165, .84, .44, 1)",
    },

    "@property --motion-perceptual-duration-multiplier": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "1",
    },

    "@property --motion-delay": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "0ms",
    },

    "@property --motion-loop-count": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "infinite",
    },

    /**
     * Default animations to none
     */
    "@property --motion-scale-in-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-translate-in-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-rotate-in-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-filter-in-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-opacity-in-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-background-color-in-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-text-color-in-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-scale-out-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-translate-out-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-rotate-out-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-filter-out-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-opacity-out-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-background-color-out-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-text-color-out-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-scale-loop-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-translate-loop-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-rotate-loop-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-filter-loop-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-opacity-loop-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-background-color-loop-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },

    "@property --motion-text-color-loop-animation": {
      syntax: '"*"',
      inherits: "false",
      "initial-value": "none",
    },
  });
}

import type { PluginAPI } from "tailwindcss/types/config.js";
import {
  filterInAnimation,
  opacityInAnimation,
  opacityLoopAnimation,
  rotateInAnimation,
  rotateLoopAnimation,
  scaleInAnimation,
  scaleLoopAnimation,
  translateInAnimation,
  translateLoopAnimation,
  allLoopAndEnterAnimations,
} from "./baseAnimations.js";
import { springPerceptualMultipliers } from "./modifiers.js";

type Direction = "right" | "left" | "up" | "down";

type PresetThemeConfig = {
  addComponents: PluginAPI["addComponents"];
  matchComponents: PluginAPI["matchComponents"];
};

type Size = "sm" | "md" | "lg";

const DEFAULT_MULTIPLIER = "1";

export function addPresets(
  addComponents: PresetThemeConfig["addComponents"],
  matchComponents: PresetThemeConfig["matchComponents"]
) {
  matchComponents(
    {
      "motion-preset-fade": (size: string) => {
        const durations = {
          sm: "300ms",
          md: "500ms",
          lg: "800ms",
        };
        return {
          "--motion-origin-opacity": "0",
          "--motion-duration": durations[size as Size],
          "--motion-opacity-in-animation": opacityInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-slide-right": (size: string) => {
        const distance = {
          sm: "5%",
          md: "25%",
          lg: "100%",
        };
        return {
          "--motion-origin-translate-x": `-${distance[size as Size]}`,
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-slide-left": (size: string) => {
        const distance = {
          sm: "5%",
          md: "25%",
          lg: "100%",
        };
        return {
          "--motion-origin-translate-x": distance[size as Size],
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-slide-up": (size: string) => {
        const distance = {
          sm: "5%",
          md: "25%",
          lg: "100%",
        };
        return {
          "--motion-origin-translate-y": distance[size as Size],
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-slide-down": (size: string) => {
        const distance = {
          sm: "5%",
          md: "25%",
          lg: "100%",
        };
        return {
          "--motion-origin-translate-y": `-${distance[size as Size]}`,
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-slide-up-right": (size: string) => {
        const distance = {
          sm: "5%",
          md: "25%",
          lg: "100%",
        };
        return {
          "--motion-origin-translate-x": `-${distance[size as Size]}`,
          "--motion-origin-translate-y": distance[size as Size],
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-slide-up-left": (size: string) => {
        const distance = {
          sm: "5%",
          md: "25%",
          lg: "100%",
        };
        return {
          "--motion-origin-translate-x": distance[size as Size],
          "--motion-origin-translate-y": distance[size as Size],
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-slide-down-left": (size: string) => {
        const distance = {
          sm: "5%",
          md: "25%",
          lg: "100%",
        };
        return {
          "--motion-origin-translate-x": distance[size as Size],
          "--motion-origin-translate-y": `-${distance[size as Size]}`,
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-slide-down-right": (size: string) => {
        const distance = {
          sm: "5%",
          md: "25%",
          lg: "100%",
        };
        return {
          "--motion-origin-translate-x": `-${distance[size as Size]}`,
          "--motion-origin-translate-y": `-${distance[size as Size]}`,
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },

      "motion-preset-focus": (size: string) => {
        const blurSizes = {
          sm: "1.25px",
          md: "5px",
          lg: "10px",
        };
        return {
          "--motion-origin-blur": blurSizes[size as Size],
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-filter-in-animation": filterInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },

      "motion-preset-blur-right": (size: string) => {
        const blurSizes = {
          sm: "1.25px",
          md: "5px",
          lg: "10px",
        };
        const distance = {
          sm: "1%",
          md: "5%",
          lg: "25%",
        };
        return {
          "--motion-origin-blur": blurSizes[size as Size],
          "--motion-origin-translate-x": `-${distance[size as Size]}`,
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-filter-in-animation": filterInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-blur-left": (size: string) => {
        const blurSizes = {
          sm: "1.25px",
          md: "5px",
          lg: "10px",
        };
        const distance = {
          sm: "1%",
          md: "5%",
          lg: "25%",
        };
        return {
          "--motion-origin-blur": blurSizes[size as Size],
          "--motion-origin-translate-x": distance[size as Size],
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-filter-in-animation": filterInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-blur-up": (size: string) => {
        const blurSizes = {
          sm: "1.25px",
          md: "5px",
          lg: "10px",
        };
        const distance = {
          sm: "1%",
          md: "5%",
          lg: "25%",
        };
        return {
          "--motion-origin-blur": blurSizes[size as Size],
          "--motion-origin-translate-y": distance[size as Size],
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-filter-in-animation": filterInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-blur-down": (size: string) => {
        const blurSizes = {
          sm: "1.25px",
          md: "5px",
          lg: "10px",
        };
        const distance = {
          sm: "1%",
          md: "5%",
          lg: "25%",
        };
        return {
          "--motion-origin-blur": blurSizes[size as Size],
          "--motion-origin-translate-y": `-${distance[size as Size]}`,
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-filter-in-animation": filterInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
    },
    {
      values: {
        sm: "sm",
        md: "md",
        lg: "lg",
        DEFAULT: "md",
      },
    }
  );

  matchComponents(
    {
      "motion-preset-rebound": (direction: string) => {
        const directions = {
          right: {
            "--motion-origin-translate-x": "-25%",
          },
          left: {
            "--motion-origin-translate-x": "25%",
          },
          up: {
            "--motion-origin-translate-y": "25%",
          },
          down: {
            "--motion-origin-translate-y": "-25%",
          },
        };
        return {
          ...directions[direction as Direction],
          "--motion-translate-timing": "var(--motion-spring-bouncier)",
          "--motion-translate-perceptual-duration-multiplier":
            springPerceptualMultipliers["var(--motion-spring-bouncier)"] ??
            DEFAULT_MULTIPLIER,
          "--motion-origin-opacity": "0",
          "--motion-opacity-in-animation": opacityInAnimation,
          "--motion-translate-in-animation": translateInAnimation,
          animation: allLoopAndEnterAnimations,
        };
      },
    },
    {
      values: {
        right: "right",
        left: "left",
        up: "up",
        down: "down",
        DEFAULT: "left",
      },
    }
  );

  addComponents({
    ".motion-preset-bounce": {
      "--motion-duration": "300ms",
      "--motion-translate-timing": "var(--motion-bounce)",
      "--motion-translate-perceptual-duration-multiplier":
        springPerceptualMultipliers["var(--motion-bounce)"] ??
        DEFAULT_MULTIPLIER,
      "--motion-origin-opacity": "0",
      "--motion-origin-translate-y": "-25%",
      "--motion-opacity-in-animation": opacityInAnimation,
      "--motion-translate-in-animation": translateInAnimation,
      animation: allLoopAndEnterAnimations,
    },
  });

  addComponents({
    ".motion-preset-expand": {
      "--motion-origin-scale-x": "50%",
      "--motion-origin-scale-y": "50%",
      "--motion-origin-opacity": "0",
      "--motion-opacity-in-animation": opacityInAnimation,
      "--motion-scale-in-animation": scaleInAnimation,
      animation: allLoopAndEnterAnimations,
    },
  });

  addComponents({
    ".motion-preset-shrink": {
      "--motion-origin-scale-x": "150%",
      "--motion-origin-scale-y": "150%",
      "--motion-origin-opacity": "0",
      "--motion-opacity-in-animation": opacityInAnimation,
      "--motion-scale-in-animation": scaleInAnimation,
      animation: allLoopAndEnterAnimations,
    },
  });

  addComponents({
    ".motion-preset-pop": {
      "--motion-origin-scale-x": "50%",
      "--motion-origin-scale-y": "50%",
      "--motion-origin-opacity": "0",
      "--motion-scale-timing": "var(--motion-spring-bouncier)",
      "--motion-scale-perceptual-duration-multiplier":
        springPerceptualMultipliers["var(--motion-spring-bouncier)"] ??
        DEFAULT_MULTIPLIER,
      "--motion-opacity-in-animation": opacityInAnimation,
      "--motion-scale-in-animation": scaleInAnimation,
      animation: allLoopAndEnterAnimations,
    },
  });

  addComponents({
    ".motion-preset-compress": {
      "--motion-origin-scale-x": "150%",
      "--motion-origin-scale-y": "150%",
      "--motion-origin-opacity": "0",
      "--motion-scale-timing": "var(--motion-spring-bouncier)",
      "--motion-scale-perceptual-duration-multiplier":
        springPerceptualMultipliers["var(--motion-spring-bouncier)"] ??
        DEFAULT_MULTIPLIER,
      "--motion-opacity-in-animation": opacityInAnimation,
      "--motion-scale-in-animation": scaleInAnimation,
      animation: allLoopAndEnterAnimations,
    },
  });

  addComponents({
    ".motion-preset-shake": {
      "--motion-duration": "300ms",
      "--motion-origin-rotate": "15deg",
      "--motion-origin-opacity": "0",
      "--motion-rotate-timing": "var(--motion-spring-bounciest)",
      "--motion-rotate-perceptual-duration-multiplier":
        springPerceptualMultipliers["var(--motion-spring-bouncier)"] ??
        DEFAULT_MULTIPLIER,
      "--motion-opacity-in-animation": opacityInAnimation,
      "--motion-rotate-in-animation": rotateInAnimation,
      animation: allLoopAndEnterAnimations,
    },
  });

  addComponents({
    ".motion-preset-wiggle": {
      "--motion-duration": "300ms",
      "--motion-origin-rotate": "15deg",
      "--motion-origin-translate-x": "-25%",
      "--motion-origin-translate-y": "-10%",
      "--motion-origin-opacity": "0",
      "--motion-timing": "var(--motion-spring-bounciest)",
      "--motion-perceptual-duration-multiplier": "5.285",
      "--motion-opacity-timing": "var(--motion-spring-smooth)",
      "--motion-opacity-perceptual-duration-multiplier":
        springPerceptualMultipliers["var(--motion-spring-bouncier)"] ??
        DEFAULT_MULTIPLIER,
      "--motion-opacity-in-animation": opacityInAnimation,
      "--motion-rotate-in-animation": rotateInAnimation,
      "--motion-translate-in-animation": translateInAnimation,
      animation: allLoopAndEnterAnimations,
    },
  });

  addComponents({
    ".motion-preset-confetti": {
      display: "block",
      "-webkit-appearance": "none",
      appearance: "none",
      position: "relative",
      outline: "0",
      zIndex: "1",
      margin: "0",
      animation:
        "RomboConfettiPop var(--motion-duration) var(--motion-timing)  both",

      "@keyframes RomboConfettiPop": {
        "0%": {
          opacity: "0",
          transform: "scale(1)",
        },
        "33%": {
          opacity: "1",
          transform: "scale(1.15)",
        },
        "50%": {
          transform: "scale(0.975)",
        },
        "65%": {
          transform: "scale(1.025)",
        },
        "80%": {
          transform: "scale(0.99)",
        },
        "87%": {
          transform: "scale(1.01)",
        },
        "100%": {
          opacity: "1",
          transform: "scale(1)",
        },
      },
      "&:after": {
        display: "block",
        animationDuration: "var(--motion-duration)",
        animationTimingFunction: "var(--motion-timing)",
        animationIterationCount: "1",
        animationDirection: "normal",
        animationFillMode: "forwards",
        animationName: "bottomfetti",
        position: "absolute",
        content: '" "',
        zIndex: "-1",
        width: "100%",
        height: "100%",
        left: "-20%",
        top: "100%",
        transition: "all var(--motion-timing) var(--motion-duration)",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(circle, #a2dd60 20%, transparent 20%),radial-gradient(circle, transparent 20%, #ee65a9 20%, transparent 30%),radial-gradient(circle, #6092dd 20%, transparent 20%),radial-gradient(circle, #f3c548 20%, transparent 20%),radial-gradient(circle, transparent 10%, #46ec99 15%, transparent 20%),radial-gradient(circle, #f03e47 20%, transparent 20%),radial-gradient(circle, #7b4df7 20%, transparent 20%),radial-gradient(circle, #3ff1bc 20%, transparent 20%)",
        backgroundSize:
          "15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%",
      },
      "&:before": {
        display: "block",
        animationDuration: "var(--motion-duration)",
        animationTimingFunction: "var(--motion-timing)",
        animationIterationCount: "1",
        animationDirection: "normal",
        animationFillMode: "forwards",
        animationName: "topfetti",
        position: "absolute",
        content: '" "',
        width: "100%",
        height: "100%",
        left: "-5%",
        backgroundRepeat: "no-repeat",
        transition: "all var(--motion-timing) var(--motion-duration)",
        zIndex: "-1",
        top: "-90%",
        backgroundImage:
          "radial-gradient(circle, #a2dd60 30%, transparent 20%),radial-gradient(circle, transparent 20%, #ee65a9 40%, transparent 20%),radial-gradient(circle, #6092dd 30%, transparent 20%),radial-gradient(circle, #f3c548 30%, transparent 20%),radial-gradient(circle, transparent 10%, #46ec99 15%, transparent 20%),radial-gradient(circle, #f03e47 30%, transparent 20%),radial-gradient(circle, #7b4df7 30%, transparent 30%),radial-gradient(circle, #3ff1bc 30%, transparent 20%),radial-gradient(circle, #48f088 30%, transparent 30%)",
        backgroundSize:
          "10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 25% 25%",
      },
      "@keyframes topfetti": {
        "0%": {
          backgroundPosition:
            "5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%",
        },
        "50%": {
          backgroundPosition:
            "0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%",
        },
        "100%": {
          backgroundPosition:
            "0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%",
          backgroundSize: "0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%",
        },
      },
      "@keyframes bottomfetti": {
        "0%": {
          backgroundPosition:
            "10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,70% -10%, 70% 0%",
        },
        "50%": {
          backgroundPosition:
            "0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%",
        },
        "100%": {
          backgroundPosition:
            "0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%",
          backgroundSize: "0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%",
        },
      },
    },
  });

  matchComponents(
    {
      "motion-preset-pulse": (size: string) => {
        const sizes = {
          sm: "1.1",
          md: "1.25",
          lg: "1.5",
        };
        return {
          "--motion-loop-scale-x": sizes[size as Size],
          "--motion-loop-scale-y": sizes[size as Size],
          "--motion-timing": "cubic-bezier(0.4, 0, 0.2, 1)",
          "--motion-scale-loop-animation": scaleLoopAnimation("mirror"),
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-wobble": (size: string) => {
        const sizes = {
          sm: "5%",
          md: "15%",
          lg: "25%",
        };
        return {
          "--motion-loop-translate-x": sizes[size as Size],
          "--motion-timing": "cubic-bezier(0.4, 0, 0.2, 1)",
          "--motion-translate-loop-animation": translateLoopAnimation("mirror"),
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-seesaw": (size: string) => {
        const sizes = {
          sm: "3deg",
          md: "6deg",
          lg: "12deg",
        };
        return {
          "--motion-loop-rotate": sizes[size as Size],
          "--motion-rotate-loop-animation": rotateLoopAnimation("mirror"),
          "--motion-rotate-timing": "var(--motion-spring-bounciest)",
          "--motion-rotate-perceptual-duration-multiplier":
            springPerceptualMultipliers["var(--motion-spring-bounciest)"] ??
            DEFAULT_MULTIPLIER,
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-oscillate": (size: string) => {
        const sizes = {
          sm: "5%",
          md: "15%",
          lg: "25%",
        };
        return {
          "--motion-loop-translate-y": sizes[size as Size],
          "--motion-timing": "cubic-bezier(0.4, 0, 0.2, 1)",
          "--motion-translate-loop-animation": translateLoopAnimation("mirror"),
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-stretch": (size: string) => {
        const xSizes = {
          sm: "95%",
          md: "85%",
          lg: "75%",
        };
        const ySizes = {
          sm: "105%",
          md: "115%",
          lg: "125%",
        };
        return {
          "--motion-loop-scale-x": xSizes[size as Size],
          "--motion-loop-scale-y": ySizes[size as Size],
          "--motion-scale-timing": "var(--motion-spring-bouncier)",
          "--motion-scale-perceptual-duration-multiplier":
            springPerceptualMultipliers["var(--motion-spring-bouncier)"] ??
            DEFAULT_MULTIPLIER,
          "--motion-scale-loop-animation": scaleLoopAnimation("mirror"),
          animation: allLoopAndEnterAnimations,
        };
      },
      "motion-preset-float": (size: string) => {
        const sizes = {
          sm: "50%",
          md: "100%",
          lg: "150%",
        };
        return {
          "--motion-loop-translate-y": sizes[size as Size],
          "--motion-translate-timing": "var(--motion-spring-bouncier)",
          "--motion-translate-perceptual-duration-multiplier":
            springPerceptualMultipliers["var(--motion-spring-bouncier)"] ??
            DEFAULT_MULTIPLIER,
          "--motion-duration": "2000ms",
          "--motion-translate-loop-animation": translateLoopAnimation("mirror"),
          animation: allLoopAndEnterAnimations,
        };
      },
    },
    {
      values: {
        sm: "sm",
        md: "md",
        lg: "lg",
        DEFAULT: "md",
      },
    }
  );

  addComponents({
    ".motion-preset-spin": {
      "--motion-loop-rotate": "360deg",
      "--motion-timing": "linear",
      "--motion-rotate-loop-animation": rotateLoopAnimation("reset"),
      animation: allLoopAndEnterAnimations,
    },
  });

  addComponents({
    ".motion-preset-blink": {
      "--motion-loop-opacity": "0",
      "--motion-opacity-loop-animation": opacityLoopAnimation("mirror"),
      animation: allLoopAndEnterAnimations,
    },
  });

  matchComponents({
    "motion-preset-typewriter": (value) => ({
      "--motion-duration": "2000ms",
      "--motion-typewriter-value": `${value}ch`,
      animation: `typing var(--motion-duration) steps(${value}) var(--motion-loop-count), blink 0.4s step-end infinite alternate`,
      whiteSpace: "nowrap",
      borderRight: "2px solid",
      fontFamily: "monospace",
      overflow: "hidden",

      "@media screen and (prefers-reduced-motion: no-preference)": {
        "@keyframes typing": {
          "10%, 90%": {
            width: "0",
          },
          "40%, 60%": {
            width: `calc(var(--motion-typewriter-value) + 1px)`,
          },
        },
      },

      "@keyframes blink": {
        "50%": {
          borderColor: "transparent",
        },
      },
    }),
  });

  matchComponents(
    {
      "motion-preset-flomoji": (value: string) => ({
        position: "relative",
        "&:before": {
          content: `"${value}"`,
          animation:
            "emojiAnim 3000ms infinite cubic-bezier(0, 0.2, 0.2, 1) both",
          top: "0px",
          left: "0px",
          position: "absolute",
          zIndex: "1000",
          background: "rgba(255,255,255,0.3)",
          width: "2rem",
          height: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          padding: "2px",
          paddingBottom: "6px",
        },

        "@media screen and (prefers-reduced-motion: no-preference)": {
          "@keyframes emojiAnim": {
            "0%": {
              transform: "translateY(-200%) rotate(60deg)",
            },
            "30%": {
              transform: "rotate(50deg)",
            },
            "40%": {
              transform: "rotate(55deg)",
            },
            "50%": {
              transform: "rotate(45deg)",
            },
            "60%": {
              transform: "rotate(40deg)",
            },
            "100%": {
              transform: "translateY(-200%) rotate(25deg)",
            },
          },
        },
      }),
    },
    {
      values: {
        "👉": "👉",
        "🚀": "🚀",
        "👀": "👀",
        "👍": "👍",
      },
    }
  );
}

import createPlugin from "tailwindcss/plugin";
import addKeyframes from "./keyframes";
import addDefaults from "./defaults";
import { addBaseAnimations, baseAnimationsTheme } from "./baseAnimations";
import { addModifiers, modifiersTheme } from "./modifiers";
import { addPresets } from "./presets";

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = ({
  matchUtilities,
  theme,
  addBase,
  addUtilities,
  addComponents,
  matchComponents,
}) => {
  addDefaults(addBase);
  addKeyframes(addBase);
  addPresets(addComponents, matchComponents, theme);
  addBaseAnimations(matchUtilities, theme);
  addModifiers(matchUtilities, addUtilities, theme);
};

/** @type {import('tailwindcss/types/config').Config}*/
const pluginConfig = {
  theme: {
    ...modifiersTheme,
    ...baseAnimationsTheme,
  },
};

export default createPlugin(pluginCreator, pluginConfig);

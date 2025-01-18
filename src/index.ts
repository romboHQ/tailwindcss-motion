import createPlugin from "tailwindcss/plugin.js";
import type {
  Config,
  PluginAPI,
  PluginCreator,
} from "tailwindcss/types/config.js";
import { addBaseAnimations, baseAnimationsTheme } from "./baseAnimations.js";
import addDefaults from "./defaults.js";
import addKeyframes from "./keyframes.js";
import { addModifiers, modifiersTheme } from "./modifiers.js";
import { addPresets } from "./presets.js";

const pluginCreator: PluginCreator = ({
  matchUtilities,
  theme,
  addBase,
  addUtilities,
  addComponents,
  matchComponents,
}: PluginAPI) => {
  addDefaults(addBase);
  addKeyframes(addBase);
  addPresets(addComponents, matchComponents);
  addBaseAnimations(matchUtilities, theme);
  addModifiers(matchUtilities, addUtilities, theme);
};

const pluginConfig: Partial<Config> = {
  theme: {
    ...modifiersTheme,
    ...baseAnimationsTheme,
  },
};

export default createPlugin(pluginCreator, pluginConfig);

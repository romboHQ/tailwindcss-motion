import type { PluginCreator } from "tailwindcss/types/config";

declare const plugin: {
  handler: PluginCreator;
  config?: { theme?: { extend?: Record<string, unknown> } };
};

export = plugin;

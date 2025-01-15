// src/types/tailwind-internals.d.ts
declare module "tailwindcss/lib/util/flattenColorPalette.js" {
  type ColorValue = string | { [key: string]: string };
  type NestedColors = {
    [key: string]: ColorValue | NestedColors;
  };

  function flattenColorPalette(colors: NestedColors): Record<string, string>;
  export default flattenColorPalette;
}

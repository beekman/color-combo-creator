import {
  hslToRgb, hslToObject, rgbToHsl
} from './colorConverters';
export const getPostcssValuesVariables = (colorSet) => {
  let postCSSVariables = '';
  if(colorSet.length > 0) {
    colorSet.map((color, i) => {
      const key = (color.matchType);
      const line = `@value ${key}: hsl(${(color.h).toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%);\n`;
      postCSSVariables += line;
    });
  }
  return postCSSVariables;
};

export const getCssClasses = (colorSet) => {
  let styles = '';
  if(colorSet.length > 0) {
    colorSet.map((color, i) => {
      const key = color.matchType;
      const rgb = hslToRgb((color.h / 360.00), color.s, color.l);
      const r = rgb[0];
      const g = rgb[1];
      const b = rgb[2];
      const hslColor = 'hsl(' + (color.h).toFixed(0) + ', ' + (color.s * 100).toFixed(2) + '%, ' + ((color.l * 100).toFixed(2)) + '%;';
      const rgbColor = ''
      let line = `.${key}-color {\ncolor:` + hslColor + ';\n}\n';
      line = line + `.${key}-bg {\nbackground-color: hsl(${(color.h).toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%);\n}\n`;
      line = line + `.${key}-border {\nborder-color: hsl(${(color.h).toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%);\n}\n`;
      styles += line;
    });
  }
  return styles;
};

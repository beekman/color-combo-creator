import {
  hslToRgb, hslToHex, hslToString, rgbToString
} from './colorConverters';
export const getPostcssValuesVariables = (colorSet, exportHexToggled, exportHslToggled, exportRgbToggled) => {
  let postCSSVariables = '';
  if(colorSet.length > 0) {
    colorSet.map((color) => {
      const key = (color.matchRelationship);
      const hslString = hslToString(color);
      const rgb = hslToRgb(color.h, color.s, color.l);
      const rgbString = rgbToString(rgb);
      const hexString = hslToHex(color.h, color.s, color.l);
      let colorString = hexString;
      if(exportHslToggled) colorString = hslString;
      if(exportRgbToggled) colorString = rgbString;
      if(exportHexToggled) colorString = hexString;

      const line = `@value ${key}: ${colorString}\n`;
      postCSSVariables += line;
    });
  }
  return postCSSVariables;
};

export const getCssClasses = (colorSet, exportHexToggled, exportHslToggled, exportRgbToggled) => {
  let cssStyles = '';
  if(colorSet.length > 0) {
    colorSet.map((color, i) => {
      const key = (color.matchRelationship);
      const hslString = hslToString(color);
      const rgb = hslToRgb(color.h, color.s, color.l);
      const rgbString = rgbToString(rgb);
      const hexString = hslToHex(color.h, color.s, color.l);
      let colorString = hexString;
      if(exportHslToggled) colorString = hslString;
      if(exportRgbToggled) colorString = rgbString;
      if(exportHexToggled) colorString = hexString;

      let line = `.${key} {\n\tcolor: ${colorString}; \n}\n`;
      line = line + `.${key}-bg {\n\tbackground-color: ${colorString}; \n}\n`;
      line = line + `.${key}-border {\n\tborder-color: ${colorString}; \n}\n\n`;
      cssStyles += line;
    });
  }
  return cssStyles;
};

import {
  hslToRgb, hslToObject, rgbToHsl, hslToHex
} from './colorConverters';
export const getPostcssValuesVariables = (colorSet, exportHexToggled, exportRgbToggled, exportHslToggled) => {
  let postCSSVariables = '';
  if(colorSet.length > 0) {
    colorSet.map((color) => {
      const key = (color.matchType);
      let colorString;
      if(exportHslToggled) {
        colorString = `hsl(${color.h.toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%;);`;
      }
      if(exportRgbToggled) {
        colorString = `rgb(${r.toFixed(0)}, ${g}, ${b})`;
      }
      if(exportHexToggled) {
        colorString = hslToHex(color.h, color.s, color.l);

      }
      console.log(colorString);

      const line = `@value ${key}: ${colorString}\n`;
      postCSSVariables += line;
    });
  }
  return postCSSVariables;
};

export const getCssClasses = (colorSet, exportHexToggled, exportRgbToggled, exportHslToggled) => {
  let styles = '';
  if(colorSet.length > 0) {
    colorSet.map((color) => {
      const key = color.matchType;
      let colorString;
      if(exportRgbToggled) {
        const rgb = hslToRgb((color.h / 360.00), color.s, color.l);
        const r = rgb[0];
        const g = rgb[1];
        const b = rgb[2];
        colorString = 'rgb(' + rgb[0].toFixed(0) + ', ' + rgb[1] + ', ' + rgb[2] + ')';
      }
      else if(exportHslToggled) {
        colorString = ('hsl(' + (color.h).toFixed(0) + ', ' + (color.s * 100).toFixed(2) + '%, ' + ((color.l * 100).toFixed(2)) + '%;');
      }
      else if(exportHexToggled) {
        colorString = hslToHex(color.h, color.s, color.l);
      }


      let line = `.${key}-color {\ncolor:` + colorString + ';\n}\n';
      line = line + `.${key}-bg {\nbackground-color: hsl(${(color.h).toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%);\n}\n`;
      line = line + `.${key}-border {\nborder-color: hsl(${(color.h).toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%);\n}\n`;
      styles += line;
    });
  }
  return styles;
};

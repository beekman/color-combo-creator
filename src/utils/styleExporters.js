export const getPostcssValuesVariables = (colorSet) => {
  let postCSSVariables = '';
  if(colorSet.length > 0) {
    colorSet.map((color, i) => {
      let key = (color.matchType + (Number(i) + 1));
      let line = `${key}: hsl(${(color.h).toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%);\n`;
      postCSSVariables += line;
    });
  }
  return postCSSVariables;
};

export const getCssClasses = (colorSet) => {
  let styles = '';
  if(colorSet.length > 0) {
    colorSet.map((color, i) => {
      let key = (color.matchType + (Number(i) + 1));
      let line = `${key}{ color: hsl(${(color.h).toFixed(0)}, ${(color.s * 100).toFixed(2)}%, ${(color.l * 100).toFixed(2)}%);}\n`;
      styles += line;
    });
  }
  return styles;
};

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes s and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
export const hslToRgb = (h, s, l) => {
  h /= 360;
  let r, g, b;

  if(s == 0) (r = g = b = l); // achromatic
  else {
    let hue2rgb = function hue2rgb(p, q, t) {
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1 / 6) return p + (q - p) * 6 * t;
      if(t < 1 / 2) return q;
      if(t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};



/**
 * Converts an HSL color value to 6-charactee hex.
 * Assumes h, s, and l are contained in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {String}           The hex representation
 */
export const hslToHex = (h, s, l) => {
  h /= 360;
  let r, g, b;
  if(s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1 / 6) return p + (q - p) * 6 * t;
      if(t < 1 / 2) return q;
      if(t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The hue
 * @param   {number}  g       The saturation
 * @param   {number}  b       The lightness
 * @return  {Array}           The HSL representation */
export const rgbToHsl = (r, g, b) => {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if(max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
};

/**
 * Accepts HSL values and returns an object containing values for r, g, b, h, s, l, and hex, all the values needed for the RGB, HSL, and hex color modes.
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The object containing values for r, g, b, h, s, l, and hex
 * */
export const hslToObject = (h, s, l) => {
  const [r, g, b] = hslToRgb(h, s, l);
  const hex = hslToHex(h, s, l);
  return { r, g, b, h, s, l, hex };
};

/**
 * Converts an HSLA color value to RGBA.
 * Assumes h, s, l, and a are contained in the set [0, 1].
 * Returns an 8-character hexadecimal string.
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @param   {number}  a       The alpha
 * @return  {String}           The hex representation
 */
export const hslaToRgba = (hsla, isPct) => {
  let ex = /^hsla\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)(((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2},\s?)|((\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}\s\/\s))((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
  if(ex.test(hsla)) {
    let sep = hsla.indexOf(',') > -1 ? ',' : ' ';
    hsla = hsla.substr(5).split(')')[0].split(sep);

    // strip the slash if using space-separated syntax
    if(hsla.indexOf('/') > -1)
      hsla.splice(3, 1);

    isPct = isPct === true;

    // must be fractions of 1
    let h = hsla[0],
      s = hsla[1].substr(0, hsla[1].length - 1) / 100,
      l = hsla[2].substr(0, hsla[2].length - 1) / 100,
      a = hsla[3];

    // strip label and convert to degrees (if necessary)
    if(h.indexOf('deg') > -1)
      h = h.substr(0, h.length - 3);
    else if(h.indexOf('rad') > -1)
      h = Math.round(h.substr(0, h.length - 3) / (2 * Math.PI) * 360);
    else if(h.indexOf('turn') > -1)
      h = Math.round(h.substr(0, h.length - 4) * 360);
    if(h >= 360)
      h %= 360;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if(0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if(60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if(120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if(180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if(240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if(300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    let pctFound = a.indexOf('%') > -1;

    if(isPct) {
      r = +(r / 255 * 100).toFixed(1);
      g = +(g / 255 * 100).toFixed(1);
      b = +(b / 255 * 100).toFixed(1);
      if(!pctFound) {
        a *= 100;
      } else {
        a = a.substr(0, a.length - 1);
      }

    } else if(pctFound) {
      a = a.substr(0, a.length - 1) / 100;
    }

    return 'rgba(' + (isPct ? r + '%,' + g + '%,' + b + '%,' + a + '%' : +r + ',' + +g + ',' + +b + ',' + +a) + ')';

  } else {
    return 'Invalid input color';
  }
};

export const hslToString = (hslColor) => {
  return (`hsl(${hslColor.h.toFixed(0)}, ${(hslColor.s * 100).toFixed(2)}%, ${(hslColor.l * 100).toFixed(2)}%)`);
};

export const rgbToString = (rgbColor) => {
  return (`rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`);
};

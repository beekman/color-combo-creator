export const hslToRgb = (h, s, l) => {
  const C = (1 - Math.abs(2 * l - 1)) * s;
  const hPrime = h / 60;
  const X = C * (1 - Math.abs(hPrime % 2 - 1));
  const m = l - C / 2;
  const withLight = (r, g, b) => [r + m, g + m, b + m];
  if(hPrime <= 1) return withLight(C, X, 0);
  else if(hPrime <= 2) return withLight(X, C, 0);
  else if(hPrime <= 3) return withLight(0, C, X);
  else if(hPrime <= 4) return withLight(0, X, C);
  else if(hPrime <= 5) return withLight(X, 0, C);
  else if(hPrime <= 6) return withLight(C, 0, X);
};

export const hslToObject = (hue, saturation, lightness) => {
  const [red, green, blue] = hslToRgb(hue, saturation, lightness);
  return { red, green, blue, hue, saturation, lightness };
};

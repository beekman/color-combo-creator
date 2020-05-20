export const getHarmonies = (color, harmonyQuantity) => {
  harmonyQuantity = parseFloat(harmonyQuantity) + 1;
  const degreeShift = 360 / harmonyQuantity;
  let h = Number(color.h);
  let current = color.h;
  const s = color.s;
  const l = color.l;
  const a = color.a;
  const matchType = 'harmony';

  let hslHarmonies = [];

  hslHarmonies.push({ h, s, l, a, matchType });
  while((current - degreeShift) >= 0) {
    current = current - degreeShift;
    h = current;
    hslHarmonies.push({ h, s, l, a, matchType });
  }
  current = color.h;
  while((current + degreeShift) < 360) {
    current = current + degreeShift;
    h = current;
    hslHarmonies.push({ h, s, l, a, matchType });
  }
  return hslHarmonies;
};

export const getOppositeDegree = (h) => {
  if(h < 180) return (h + 180);
  else return (h - 180);
};
export const getInverses = (hsl, hslHarmonies, inverseQuantity) => {
  const s = hsl.s;
  const l = hsl.l;
  const a = hsl.a;
  const hslInverses = [];

  if(inverseQuantity > 0) {
    let count = 0;
    while(inverseQuantity > count) {
      let currentColor = hslHarmonies[count];
      const h = getOppositeDegree(currentColor.h);
      const matchType = 'inverse';
      hslInverses.push({ h, s, l, a, matchType });
      count++;
    }
  }
  return hslInverses;
};

export const getBaseHarmoniesAndInversesColorList = (hsl, hslHarmonies, hslInverses) => {
  let baseHarmoniesAndInversesColorList = [];
  let h = hsl.h;
  const s = hsl.s;
  let l = hsl.l;
  const a = hsl.a;
  hslHarmonies.map(hslHarmony => {
    h = hslHarmony.h;
    l = hslHarmony.l;
    const matchType = hslHarmony.matchType;
    baseHarmoniesAndInversesColorList.push({ h, s, l, a, matchType });
  });
  hslInverses.map(hslInverse => {
    h = hslInverse.h;
    l = hslInverse.l;
    const matchType = hslInverse.matchType;
    baseHarmoniesAndInversesColorList.push({ h, s, l, a, matchType });
  });
  return baseHarmoniesAndInversesColorList;
};

export const getLighters = (baseHarmoniesAndInversesColorList, lighterQuantity) => {

  const hslLighters = [];
  let stepLength = Number(lighterQuantity);
  for(let step = 1; (step <= stepLength); step++) {
    baseHarmoniesAndInversesColorList.map(hslColor => {
      const h = hslColor.h;
      const s = hslColor.s;
      const stepDistance = ((1 - hslColor.l) / (Number(lighterQuantity) + 1));
      let l = (hslColor.l + (stepDistance * step));
      const a = hslColor.a;
      const matchType = 'lighter';
      hslLighters.push({ h, s, l, a, matchType, step });
    });
  }
  return hslLighters;
};
export const getDarkers = (baseHarmoniesAndInversesColorList, darkerQuantity) => {
  const hslDarkers = [];
  let stepLength = Number(darkerQuantity);
  for(let step = 1; (step <= stepLength); step++) {
    baseHarmoniesAndInversesColorList.map(hslColor => {
      const h = hslColor.h;
      const s = hslColor.s;
      const stepDistance = (hslColor.l / (Number(darkerQuantity) + 1));
      let l = (hslColor.l - (stepDistance * step));
      const a = hslColor.a;
      const matchType = 'darker';
      hslDarkers.push({ h, s, l, a, matchType, step });
    });
  }
  return hslDarkers;
};

export const getDesaturateds = (baseHarmoniesAndInversesColorList, desaturatedQuantity) => {
  const hslDarkers = [];
  let stepLength = Number(desaturatedQuantity);
  for(let step = 1; (step <= stepLength); step++) {
    baseHarmoniesAndInversesColorList.map(hslColor => {
      const h = hslColor.h;
      const stepDistance = (hslColor.s / (Number(desaturatedQuantity) + 1));
      let s = hslColor.s - (stepDistance * step);
      const l = (hslColor.l);
      const a = hslColor.a;
      const matchType = 'desaturated';
      hslDarkers.push({ h, s, l, a, matchType, step });
    });
  }
  return hslDarkers;
};
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

export const isGrayscale = ({ saturation }) => saturation === 0;
export const isDark = ({ l }) => l < .5;
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

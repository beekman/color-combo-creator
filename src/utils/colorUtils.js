export const getHarmonies = (color, harmonyQuantity) => {
  harmonyQuantity = parseFloat(harmonyQuantity) + 1;
  const degreeShift = 360 / harmonyQuantity;
  let h = Number(color.h);
  let currentHueValue = color.h;
  const s = color.s;
  const l = color.l;
  const a = color.a;
  let matchType = 'base';
  const step = '';
  let hslHarmonies = [];
  hslHarmonies.push({ h, s, l, a, matchType, step });
  let count = 1;
  while((currentHueValue - degreeShift) >= 0) {
    currentHueValue = currentHueValue - degreeShift;
    h = currentHueValue;
    const matchType = 'harmony' + count;
    hslHarmonies.push({ h, s, l, a, matchType, step });
    count++;
  }
  currentHueValue = color.h;
  while((currentHueValue + degreeShift) < 360) {
    currentHueValue = currentHueValue + degreeShift;
    h = currentHueValue;
    const matchType = 'harmony' + count;
    hslHarmonies.push({ h, s, l, a, matchType, step });
    count++;
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
  const step = '';
  if(inverseQuantity > 0) {
    let count = 0;
    while(inverseQuantity > count) {
      let currentColor = hslHarmonies[count];
      const h = getOppositeDegree(currentColor.h);
      let type = (currentColor.matchType);
      if(!type) { type = 'base'; }
      const matchType = 'inverse-of-' + type;
      hslInverses.push({ h, s, l, a, matchType, step });
      count++;
    }
  }
  return hslInverses;
};

export const isOdd = (num) => {
  return num % 2;
};
export const getAnalogousColors = (color, analogousQuantity) => {
  let stepLength = Number(analogousQuantity);
  let hslAnalogousColors = [];
  for(let step = 1; (step <= stepLength); step++) {
    let h = color.h;
    const s = color.s;
    const l = color.l;
    const a = color.a;
    const stepDistance = 30;
    let distanceMultiplier = (Math.floor((step + 1) / 2));
    console.log(distanceMultiplier);
    if(isOdd(step)) {
      h = h - (stepDistance * distanceMultiplier);
      if(h < 0) { h = 360 + h; }
    }
    else if(!(isOdd(step))) {
      h = h + (stepDistance * distanceMultiplier);
      if(h < 0) { h = h + 360; }
    }
    let matchType = 'analogous-' + step;
    hslAnalogousColors.push({ h, s, l, a, matchType, step });
  }
  console.log(hslAnalogousColors);
  return hslAnalogousColors;
};


export const getBaseHarmoniesAndInversesColorList = (hsl, hslHarmonies, hslInverses, hslAnalogousColors) => {
  let baseHarmoniesAndInversesColorList = [];
  let h = hsl.h;
  const s = hsl.s;
  let l = hsl.l;
  const a = hsl.a;
  const step = '';
  hslHarmonies.map(hslHarmony => {
    h = hslHarmony.h;
    l = hslHarmony.l;
    let matchType = (hsl.matchType);
    if(!matchType) { matchType = 'base'; }
    baseHarmoniesAndInversesColorList.push({ h, s, l, a, matchType, step });
  });
  hslInverses.map(hslInverse => {
    h = hslInverse.h;
    l = hslInverse.l;
    let matchType = hslInverse.matchType;
    baseHarmoniesAndInversesColorList.push({ h, s, l, a, matchType, step });
  });
  hslAnalogousColors.map(hslAnalogousColor => {
    h = hslAnalogousColor.h;
    l = hslAnalogousColor.l;
    let matchType = hslAnalogousColor.matchType;
    baseHarmoniesAndInversesColorList.push({ h, s, l, a, matchType, step });
  });

  return baseHarmoniesAndInversesColorList;
};

export const getLighters = (baseHarmoniesAndInversesColorList, lighterQuantity) => {

  const hslLighters = [];
  let stepLength = Number(lighterQuantity);
  for(let step = 1; (step <= stepLength); step++) {
    baseHarmoniesAndInversesColorList.map((hslColor, i) => {
      const h = hslColor.h;
      const s = hslColor.s;
      const stepDistance = ((1 - hslColor.l) / (Number(lighterQuantity) + 1));
      let l = (hslColor.l + (stepDistance * step));
      const a = hslColor.a;
      let key = (hslColor.matchType);
      if((!key) || (key === 'base0')) { key = 'base'; }
      const matchType = 'lighter-' + key + '-step' + step;
      hslLighters.push({ h, s, l, a, matchType, step });
    });
  }
  return hslLighters;
};
export const getDarkers = (baseHarmoniesAndInversesColorList, darkerQuantity) => {
  const hslDarkers = [];
  let stepLength = Number(darkerQuantity);
  for(let step = 1; (step <= stepLength); step++) {
    baseHarmoniesAndInversesColorList.map((hslColor, i) => {
      const h = hslColor.h;
      const s = hslColor.s;
      const stepDistance = (hslColor.l / (Number(darkerQuantity) + 1));
      let l = (hslColor.l - (stepDistance * step));
      const a = hslColor.a;
      let key = (hslColor.matchType);
      if((!key) || (key === 'base0')) { key = 'base'; }
      const matchType = 'darker-' + key + '-step' + step;
      hslDarkers.push({ h, s, l, a, matchType, step });
    });
  }
  return hslDarkers;
};

export const getDesaturateds = (baseHarmoniesAndInversesColorList, desaturatedQuantity) => {
  const hslDesaturateds = [];
  let stepLength = Number(desaturatedQuantity);
  for(let step = 1; (step <= stepLength); step++) {
    baseHarmoniesAndInversesColorList.map((hslColor) => {
      const h = hslColor.h;
      const stepDistance = (hslColor.s / (Number(desaturatedQuantity) + 1));
      let s = hslColor.s - (stepDistance * step);
      const l = (hslColor.l);
      const a = hslColor.a;
      let key = (hslColor.matchType);
      if((!key) || (key === 'base0')) { key = 'base'; }
      const matchType = 'desaturated-' + key + '-step' + step;
      hslDesaturateds.push({ h, s, l, a, matchType, step });
    });
  }
  return hslDesaturateds;
};

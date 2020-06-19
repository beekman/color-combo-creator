export const getBaseAndHarmonies = (color, harmonyQuantity) => {
  harmonyQuantity = parseFloat(harmonyQuantity) + 1;
  const degreeShift = 360 / harmonyQuantity;
  let h = Number(color.h);
  let currentHueValue = color.h;
  const s = color.s;
  const l = color.l;
  const a = color.a;
  let matchRelationship = 'base';
  const step = '';
  let hslHarmonies = [];
  hslHarmonies.push({ h, s, l, a, matchRelationship, step });
  let count = 1;
  while((currentHueValue - degreeShift) >= 0) {
    currentHueValue = currentHueValue - degreeShift;
    h = currentHueValue;
    const matchRelationship = 'harmony' + count;
    hslHarmonies.push({ h, s, l, a, matchRelationship, step });
    count++;
  }
  currentHueValue = color.h;
  while((currentHueValue + degreeShift) < 360) {
    currentHueValue = currentHueValue + degreeShift;
    h = currentHueValue;
    const matchRelationship = 'harmony' + count;
    hslHarmonies.push({ h, s, l, a, matchRelationship, step });
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
      let type = (currentColor.matchRelationship);
      if(!type) { type = 'base'; }
      const matchRelationship = 'inverse-of-' + type;
      hslInverses.push({ h, s, l, a, matchRelationship, step });
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
    if(isOdd(step)) {
      h = h - (stepDistance * distanceMultiplier);
      if(h < 0) { h = 360 + h; }
    }
    else if(!(isOdd(step))) {
      h = h + (stepDistance * distanceMultiplier);
      if(h < 0) { h = h + 360; }
    }
    let matchRelationship = 'analogous' + step;
    hslAnalogousColors.push({ h, s, l, a, matchRelationship, step });
  }
  return hslAnalogousColors;
};


export const getBaseHarmoniesInverseAndAnalogousColorList = (hsl, hslHarmonies, hslInverses, hslAnalogousColors) => {
  let baseHarmoniesInverseAndAnalogousColorList = [];
  let h = hsl.h;
  const s = hsl.s;
  let l = hsl.l;
  const a = hsl.a;
  const step = '';
  hslHarmonies.map(hslHarmony => {
    h = hslHarmony.h;
    l = hslHarmony.l;
    let matchRelationship = (hsl.matchRelationship);
    if(!matchRelationship) { matchRelationship = 'base'; }
    baseHarmoniesInverseAndAnalogousColorList.push({ h, s, l, a, matchRelationship, step });
  });
  hslInverses.map(hslInverse => {
    h = hslInverse.h;
    l = hslInverse.l;
    let matchRelationship = hslInverse.matchRelationship;
    baseHarmoniesInverseAndAnalogousColorList.push({ h, s, l, a, matchRelationship, step });
  });
  hslAnalogousColors.map(hslAnalogousColor => {
    h = hslAnalogousColor.h;
    l = hslAnalogousColor.l;
    let matchRelationship = hslAnalogousColor.matchRelationship;
    baseHarmoniesInverseAndAnalogousColorList.push({ h, s, l, a, matchRelationship, step });
  });

  return baseHarmoniesInverseAndAnalogousColorList;
};

export const getLighters = (baseHarmoniesInverseAndAnalogousColorList, lighterQuantity) => {

  const hslLighterColorList = [];
  let stepLength = Number(lighterQuantity);
  for(let step = 1; (step <= stepLength); step++) {
    baseHarmoniesInverseAndAnalogousColorList.map((hslColor, i) => {
      const h = hslColor.h;
      const s = hslColor.s;
      const stepDistance = ((1 - hslColor.l) / (Number(lighterQuantity) + 1));
      let l = (hslColor.l + (stepDistance * step));
      const a = hslColor.a;
      let key = (hslColor.matchRelationship);
      if((!key) || (key === 'base0')) { key = 'base'; }
      const matchRelationship = 'lighter-' + key + '-step' + step;
      hslLighterColorList.push({ h, s, l, a, matchRelationship, step });
    });
  }
  return hslLighterColorList;
};
export const getDarkers = (baseHarmoniesInverseAndAnalogousColorList, darkerQuantity) => {
  const hslDarkerColorList = [];
  let stepLength = Number(darkerQuantity);
  for(let step = 1; (step <= stepLength); step++) {
    baseHarmoniesInverseAndAnalogousColorList.map((hslColor, i) => {
      const h = hslColor.h;
      const s = hslColor.s;
      const stepDistance = (hslColor.l / (Number(darkerQuantity) + 1));
      let l = (hslColor.l - (stepDistance * step));
      const a = hslColor.a;
      let key = (hslColor.matchRelationship);
      if((!key) || (key === 'base0')) { key = 'base'; }
      const matchRelationship = 'darker-' + key + '-step' + step;
      hslDarkerColorList.push({ h, s, l, a, matchRelationship, step });
    });
  }
  return hslDarkerColorList;
};

export const getDesaturateds = (baseHarmoniesInverseAndAnalogousColorList, desaturatedQuantity) => {
  const hslDesaturateds = [];
  let stepLength = Number(desaturatedQuantity);
  for(let step = 1; (step <= stepLength); step++) {
    baseHarmoniesInverseAndAnalogousColorList.map((hslColor) => {
      const h = hslColor.h;
      const stepDistance = (hslColor.s / (Number(desaturatedQuantity) + 1));
      let s = hslColor.s - (stepDistance * step);
      const l = (hslColor.l);
      const a = hslColor.a;
      let key = (hslColor.matchRelationship);
      if((!key) || (key === 'base0')) { key = 'base'; }
      const matchRelationship = 'desaturated-' + key + '-step' + step;
      hslDesaturateds.push({ h, s, l, a, matchRelationship, step });
    });
  }
  return hslDesaturateds;
};

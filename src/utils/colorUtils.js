export const getHarmonies = (color, harmonyQuantity) => {
  harmonyQuantity = parseFloat(harmonyQuantity) + 1;
  const degreeShift = 360 / harmonyQuantity;
  let h = Number(color.h);
  let s = color.s;
  let l = color.l;
  let a = color.a;
  let current = color.h;
  let hslHarmonies = [];
  hslHarmonies.push({ h, s, l, a });
  while((current - degreeShift) >= 0) {
    current = current - degreeShift;
    h = current;
    hslHarmonies.push({ h, s, l, a });
  }
  current = color.h;
  while((current + degreeShift) < 360) {
    current = current + degreeShift;
    h = current;
    hslHarmonies.push({ h, s, l, a });
  }
  return hslHarmonies;
};

export const getOppositeDegree = (h) => {
  if(h < 180) return (h + 180);
  else return (h - 180);
};
export const getInverses = (hsl, hslHarmonies, inverseQuantity) => {
  let h = hsl.h;
  const s = hsl.s;
  const l = hsl.l;
  const a = hsl.a;


  const hslInverses = [];

  if(inverseQuantity > 0) {
    let inversesRemaining = inverseQuantity;
    while(inversesRemaining > 0) {
      hslHarmonies.map(hslHarmony => {
        h = getOppositeDegree(hslHarmony.h);
        hslInverses.push({ h, s, l, a });
        inversesRemaining--;
      });
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

  baseHarmoniesAndInversesColorList.push({ h, s, l, a });

  hslHarmonies.map(hslHarmony => {
    h = hslHarmony.h;
    l = hslHarmony.l;
    baseHarmoniesAndInversesColorList.push({ h, s, l, a });
  });
  hslInverses.map(hslInverse => {
    h = hslInverse.h;
    l = hslInverse.l;
    baseHarmoniesAndInversesColorList.push({ h, s, l, a });
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
      hslLighters.push({ h, s, l, a });
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
      hslDarkers.push({ h, s, l, a });
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
      hslDarkers.push({ h, s, l, a });
    });
  }
  return hslDarkers;
};

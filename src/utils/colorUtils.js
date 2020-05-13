export const getHarmonies = (hsl, harmonyQuantity) => {
  harmonyQuantity = parseFloat(harmonyQuantity) + 1;
  const degreeShift = 360 / harmonyQuantity;
  let h = hsl.h;
  let s = hsl.s;
  let l = hsl.l;
  let a = hsl.a;
  let current = hsl.h;
  let hslHarmonies = [];
  while((current - degreeShift) >= 0) {
    current = current - degreeShift;
    h = current;
    hslHarmonies.push({ h, s, l, a });
  }
  current = hsl.h;
  while((current + degreeShift) < 360) {
    current = current + degreeShift;
    h = current;
    hslHarmonies.push({ h, s, l, a });
  }
  return hslHarmonies;
};

export const getInverses = (hsl, hslHarmonies, inverseQuantity) => {
  let h = hsl.h;
  const s = hsl.s;
  const l = hsl.l;
  const a = hsl.a;
  const getOppositeDegree = (h) => {
    if(h < 180) return (h + 180);
    else return (h - 180);
  };

  const hslInverses = [];

  if((inverseQuantity) > (hslHarmonies.length + 1)) {
    inverseQuantity = (hslHarmonies.length + 1);
  }

  if(inverseQuantity > 0) {
    h = getOppositeDegree(h);
    hslInverses.push({ h, s, l, a });
    inverseQuantity--;
  }

  while(inverseQuantity > 0) {
    hslHarmonies.map(hslHarmony => {
      h = getOppositeDegree(hslHarmony.h);
      hslInverses.push({ h, s, l, a });
      inverseQuantity--;
    });
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

  const getLighterColor = (l = 0.5, multiplier = 0.5) => {
    l = (Number(l) + 1.00) * multiplier;
    return l;
  };

  if(lighterQuantity > (baseHarmoniesAndInversesColorList.length)) {
    lighterQuantity = (baseHarmoniesAndInversesColorList.length);
  }

  baseHarmoniesAndInversesColorList.map(hslColor => {
    const h = hslColor.h;
    const s = hslColor.s;
    const l = getLighterColor(hslColor.l);
    const a = hslColor.a;
    hslLighters.push({ h, s, l, a });
    lighterQuantity--;
  });
  return hslLighters;
};

export const getDarkers = (baseHarmoniesAndInversesColorList, darkerQuantity) => {
  const hslDarkers = [];

  let stepLength = (baseHarmoniesAndInversesColorList.length);
  console.log('stepLength: ' + stepLength);
  for(let step = 1; (step < stepLength); step++) {
    baseHarmoniesAndInversesColorList.map(hslColor => {
      const h = hslColor.h;
      const s = hslColor.s;
      const distanceToBlack = (hslColor.l);
      console.log('distanceToBlack: ' + distanceToBlack);
      console.log('darkerQuantity: ' + darkerQuantity);
      const stepDistance = (hslColor.l / (Number(darkerQuantity) + 1));
      console.log('stepDistance:' + stepDistance);
      const l = hslColor.l - (stepDistance * step);
      const a = hslColor.a;
      hslDarkers.push({ h, s, l, a });
    });
  }
  console.log(hslDarkers);
  return hslDarkers;
};

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
    hslHarmonies.forEach(hslHarmony => {
      h = getOppositeDegree(hslHarmony.h);
      hslInverses.push({ h, s, l, a });
      inverseQuantity--;
    });
  }
  return hslInverses;
};

export const getBaseHarmoniesAndInversesColorList = (hsl, hslHarmonies, hslInverses) => {
  let hslColorList = [];
  let h = hsl.h;
  const s = hsl.s;
  let l = hsl.l;
  const a = hsl.a;

  hslColorList.push({ h, s, l, a });

  hslHarmonies.forEach(hslHarmony => {
    h = hslHarmony.h;
    l = hslHarmony.l;
    hslColorList.push({ h, s, l, a });
  });
  hslInverses.forEach(hslInverse => {
    h = hslInverse.h;
    l = hslInverse.l;
    hslColorList.push({ h, s, l, a });
  });
};

export const getLighters = (baseHarmoniesAndInversesColorList, lighterQuantity) => {
  let h = hsl.h;
  const s = hsl.s;
  let l = hsl.l;
  const a = hsl.a;
  const hslLighters = [];

  const getLighterColor = (l) => {
    l = (Number(l) + 1.00) / 2;
    return l;
  };

  if(lighterQuantity > baseHarmoniesAndInversesColorList.length) {
    lighterQuantity = baseHarmoniesAndInversesColorList.length;
  }

  while(lighterQuantity > 0) {
    baseHarmoniesAndInversesColorList.forEach(hslColor => {
      h = hslColor.h;
      l = getLighterColor(hslColor.l);
      hslLighters.push({ h, s, l, a });
      lighterQuantity--;
    });
  }
  return hslLighters;
};

export const getDarkers = (baseHarmoniesAndInversesColorList, darkerQuantity) => {
  let h = hsl.h;
  const s = hsl.s;
  let l = hsl.l;
  const a = hsl.a;
  const hslDarkers = [];

  const getDarkerColor = (l) => {
    l = (l / 2);
    return l;
  };

  if(darkerQuantity > baseHarmoniesAndInversesColorList.length) {
    darkerQuantity = baseHarmoniesAndInversesColorList.length;
  }

  while(darkerQuantity > 0) {
    baseHarmoniesAndInversesColorList.forEach(hslColor => {
      h = hslColor.h;
      l = getDarkerColor(hslColor.l);
      hslDarkers.push({ h, s, l, a });
      darkerQuantity--;
    });
  }
  return hslDarkers;
};

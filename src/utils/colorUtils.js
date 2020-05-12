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
  console.log('Harmonic colors:');
  console.log(hslHarmonies);
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
  console.log('Inverse colors:');
  console.log(hslInverses);
  return hslInverses;
};

export const getLighters = (hsl, hslHarmonies, hslInverses, lighterQuantity) => {
  let h = hsl.h;
  const s = hsl.s;
  let l = hsl.l;
  const a = hsl.a;
  const hslLighters = [];
  let hslColorList = [];

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

  console.log('Color List:');
  console.log(hslColorList);

  const getLighterColor = (l) => {
    l = (l + 100) / 2;
    return l;
  };

  if(lighterQuantity > 0) {
    l = getLighterColor(l);
    hslLighters.push({ h, s, l, a });
    lighterQuantity--;
  }



  if(lighterQuantity > hslColorList.length) {
    lighterQuantity = hslColorList.length;
  }


  while(lighterQuantity > 0) {
    hslColorList.forEach(hslColorList => {
      h = hslColorList.h;
      l = getLighterColor(hslColorList.l);
      hslLighters.push({ h, s, l, a });
      lighterQuantity--;
    });
  }
  console.log('Lighter colors:');
  console.log(hslLighters);
  return hslLighters;
};

export const getDarkers = (hsl, hslHarmonies, hslInverses, darkerQuantity) => {
  let h = hsl.h;
  const s = hsl.s;
  let l = hsl.l;
  const a = hsl.a;
  const hslDarkers = [];
  let hslColorList = [];

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

  const getDarkerColor = (l) => {
    l = (l / 2);
    return l;
  };

  if(darkerQuantity > 0) {
    l = getDarkerColor(l);
    hslDarkers.push({ h, s, l, a });
    darkerQuantity--;
  }

  if(darkerQuantity > hslColorList.length) {
    darkerQuantity = hslColorList.length;
  }

  while(darkerQuantity > 0) {
    hslColorList.forEach(hslColor => {
      h = hslColor.h;
      l = getDarkerColor(hslColor.l);
      hslDarkers.push({ h, s, l, a });
      darkerQuantity--;
    });
  }
  console.log('Darker colors:');
  console.log(hslDarkers);
  return hslDarkers;
};

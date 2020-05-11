export const getHarmonies = (hsl, harmonies) => {
  harmonies = parseFloat(harmonies) + 1;
  console.log(harmonies);
  const degreeShift = 360 / harmonies;
  console.log(degreeShift);
  console.log(hsl);
  let s = hsl.s;
  let l = hsl.l;
  let a = hsl.a;
  let current = hsl.h;
  let h = hsl.h;
  let harmonicHSL = [];
  console.log(hsl.h);
  console.log(current);
  console.log(degreeShift);
  while((current - degreeShift) >= 0) {
    current = current - degreeShift;
    h = current;
    harmonicHSL.push({ h, s, l, a });
  }
  current = hsl.h;
  while((current + degreeShift) < 360) {
    current = current + degreeShift;
    h = current;
    harmonicHSL.push({ h, s, l, a });
  }
  console.log(harmonicHSL);
  return harmonicHSL;

};

export default getHarmonies;

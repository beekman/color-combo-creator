export const getHarmonies = (hsl, harmonies) => {
  harmonies = parseFloat(harmonies) + 1;
  const degreeShift = 360 / harmonies;
  let s = hsl.s;
  let l = hsl.l;
  let a = hsl.a;
  let current = hsl.h;
  let h = hsl.h;
  let harmonicHSL = [];
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

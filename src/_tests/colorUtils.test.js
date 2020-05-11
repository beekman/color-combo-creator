const { getHarmonies } = require('../utils/colorUtils');

describe('should return colors with evenly spaced hues between 0 and 360 equidistant from each other and base hue', () => {

  it('should return 1 color with hue of 0 for a color with h:180 and 1 harmony', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonies = 1;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1 }]);
  });

  it('should return 2 equidistant hues above and below color with h:180 and 2 harmonies', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonies = 2;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ h: 60, s: 1, l: 0.5, a: 1 }, { h: 300, s: 1, l: 0.5, a: 1 }]);
  });

  it('should return 3 equidistant hues for color with h:180 and 3 harmonies', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonies = 3;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ h: 90, s: 1, l: 0.5, a: 1 }, { h: 0, s: 1, l: 0.5, a: 1 }, { h: 270, s: 1, l: 0.5, a: 1 }]);
  });
});

describe('should return colors with evenly spaced hues above a color with a hue of 0', () => {
  it('should return 180 with base hue of 0 and 1 harmony', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonies = 1;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ 'a': 1, 'h': 180, 'l': 0.5, 's': 1 }]);
  });
  it('should return two colors with hues above 0 for base hue of 0 and 2 harmonies', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonies = 2;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ h: 120, s: 1, l: 0.5, a: 1 },
    { h: 240, s: 1, l: 0.5, a: 1 }]);
  });
  it('should return three colors with hues above 0 for base hue of 0 and 3 harmonies', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonies = 3;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ h: 90, s: 1, l: 0.5, a: 1 },
    { h: 180, s: 1, l: 0.5, a: 1 },
    { h: 270, s: 1, l: 0.5, a: 1 }]);
  });
});

describe('should return colors with evenly spaced hues below a color with a hue of 359', () => {
  it('should return 179 with base hue of 359 and 1 harmony', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonies = 1;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ 'a': 1, 'h': 179, 'l': 0.5, 's': 1 }]);
  });
  it('should return 119 and 239 with base hue of 359 and 2 harmonies', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonies = 2;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ h: 239, s: 1, l: 0.5, a: 1 },
    { h: 119, s: 1, l: 0.5, a: 1 }]);
  });
  it('should return three colors with hues below 359 for base hue of 359 and 3 harmonies', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonies = 3;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ h: 269, s: 1, l: 0.5, a: 1 },
    { h: 179, s: 1, l: 0.5, a: 1 },
    { h: 89, s: 1, l: 0.5, a: 1 }]);
  });
});

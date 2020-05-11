const { getHarmonies } = require('../utils/colorUtils');

describe('should return colors with evenly spaced hues above a color with a hue of 0', () => {
  it('should return 180 with base hue of 0 and 1 harmony', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonies = 1;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ 'a': 1, 'h': 180, 'l': 0.5, 's': 1 }]);
  });
});

describe('should return colors with evenly spaced hues below a color with a hue of 359', () => {
  it('should return 179 with base hue of 359 and 1 harmony', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonies = 1;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ 'a': 1, 'h': 179, 'l': 0.5, 's': 1 }]);
  });
  it('should return 119 and 239 with base hue of 359 and 1 harmony', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonies = 2;
    expect(getHarmonies(hsl, harmonies)).toEqual([{ h: 239, s: 1, l: 0.5, a: 1 },
    { h: 119, s: 1, l: 0.5, a: 1 }]);
  });
});

const {
  getHarmonies,
  getInverses,
  getLighters,
  getDarkers } = require('../utils/colorUtils');

describe('tests for getHarmonies function', () => {
  it('should return an empty array for complements of 0', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 0;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([]);
  });

  it('should return 1 color with hue of 0 for 1 harmonyQuantity and base color with h:180', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 1;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1 }]);
  });

  it('should return 2 colors with equidistant hues above and below for 2 harmonies and color with h:180', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 2;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 60, s: 1, l: 0.5, a: 1 }, { h: 300, s: 1, l: 0.5, a: 1 }]);
  });
  it('should return 3 colors with equidistant hues for color with h:180 and 3 harmonies', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 3;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 90, s: 1, l: 0.5, a: 1 }, { h: 0, s: 1, l: 0.5, a: 1 }, { h: 270, s: 1, l: 0.5, a: 1 }]);
  });


  it('should return color of hue 180 for 1 harmonyQuantity and a base color with h:0', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 1;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([{ 'a': 1, 'h': 180, 'l': 0.5, 's': 1 }]);
  });
  it('should return 2 colors with hues above 0 for 2 harmonies and base color with h:0', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 2;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 120, s: 1, l: 0.5, a: 1 },
    { h: 240, s: 1, l: 0.5, a: 1 }]);
  });
  it('should return 3 colors with hues above 0 for 3 harmonies and base color with h:0', () => {
    const hsl = { h: 0, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 3;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 90, s: 1, l: 0.5, a: 1 },
    { h: 180, s: 1, l: 0.5, a: 1 },
    { h: 270, s: 1, l: 0.5, a: 1 }]);
  });

  it('should return color with hue 179 for 1 harmonyQuantity and base color with h:359', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 1;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([{ 'a': 1, 'h': 179, 'l': 0.5, 's': 1 }]);
  });
  it('should return colors of hues 119 and 239 for 2 harmonies and base color with h:359', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 2;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 239, s: 1, l: 0.5, a: 1 },
    { h: 119, s: 1, l: 0.5, a: 1 }]);
  });
  it('should return three colors with hues below 359 for 3 harmonies and base color with h:359', () => {
    const hsl = { h: 359, s: 1, l: 0.5, a: 1 };
    const harmonyQuantity = 3;
    expect(getHarmonies(hsl, harmonyQuantity)).toEqual([{ h: 269, s: 1, l: 0.5, a: 1 },
    { h: 179, s: 1, l: 0.5, a: 1 },
    { h: 89, s: 1, l: 0.5, a: 1 }]);
  });
});

describe('tests for getInverses function', () => {
  it('should return an empty array for getInverses with inverseQuantity: 0', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const hslHarmonies = [{ h: 0, s: 1, l: 0.5, a: 1 }];
    const inverseQuantity = 0;
    expect(getInverses(hsl, hslHarmonies, inverseQuantity)).toEqual([]);
  });

  it('should return a single color with h:0 for a base color with h:180, harmonies:1, and inverseQuantity: 1', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const hslHarmonies = [{ h: 0, s: 1, l: 0.5, a: 1 }];
    const inverseQuantity = 1;
    expect(getInverses(hsl, hslHarmonies, inverseQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1 }]);
  });
  it('should return a single color with h:0 for a base color with h:180, harmonies:0, and inverseQuantity: 1', () => {
    const hsl = { h: 180, s: 1, l: 0.5, a: 1 };
    const hslHarmonies = [];
    const inverseQuantity = 1;
    expect(getInverses(hsl, hslHarmonies, inverseQuantity)).toEqual([{ h: 0, s: 1, l: 0.5, a: 1 }]);
  });
});

describe('tests for getDarkers function', () => {
  it('should return an empty array for getDarkers with darkerQuantity: 0', () => {
    const baseHarmoniesAndInversesColorList = [];
    const darkerQuantity = 0;
    expect(getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity)).toEqual([]);
  });
  it('should return a single color for getDarkers with darkerQuantity: 1 and a list of length 1', () => {
    const baseHarmoniesAndInversesColorList = [{ h: 0, s: 1, l: 0.5, a: 1 }];
    const darkerQuantity = 1;
    expect(getDarkers(baseHarmoniesAndInversesColorList, darkerQuantity)).toEqual([{"a":1,"h":0,"l":0.25,"s":1,}]);
  });
});

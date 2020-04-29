let ColorScheme = require('color-scheme');
let scheme = new ColorScheme;

describe('App component', () => {
  it('generates a scheme from a hue', () => {
    scheme.from_hue(21)
      .scheme('triade')
      .distance(0.2)
      .add_complement(false)
      .variation('pastel')
      .web_safe(false);

    let colors = scheme.colors();
    expect(colors).toEqual(['e69373', '805240', 'e6d5cf', 'bf5830', '55aa70', '408054', 'cfe6d6', '30bf5e', '47888e', '407980', 'cfe3e6', '30b2bf']);
  });
});

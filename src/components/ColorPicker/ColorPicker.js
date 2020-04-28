var ColorScheme = require('color-scheme');

var scheme = new ColorScheme;

scheme.from_hue(21)
  .scheme('triade')
  .distance(0.1)
  .add_complement(false)
  .variation('pastel')
  .web_safe(true);

var colors = scheme.colors();

console.log(colors);

let scm = new ColorScheme;
scm.from_hue(21)
  .scheme('triade')
  .distance(0.1)
  .add_complement(false)
  .variation('pastel')
  .web_safe(true);

var colors = scm.colors();

console.log(colors);

# Color Combo Calculator

A React app to aid in efficient but highly customizable color palette generation with a live palette that provides feedback on every change.

## Options:
 - Base Color: Pick a target color using the hue slider, or use the pop-over Photoshop-style picker to adjust the base saturation and lightness, then adjust the numeric variation inputs to set your palette's color scheme.
 - Harmonies: Input number controls the number of evenly spaced points on the color wheel relative to the base hue.
 - Inverses:  Controls how many base + harmony colors to use, picking the OPPOSITE colors on the color wheel for the first colors up to the specified number (with a max value of the number of harmonies + 1).
  - Both Darker and Lighter use _all of the above colors_ to generate the input number of _COMPLETE SETS_ of darker/lighter variations. That means that if you have 2 harmonies and 1 inverse, you'll add 4 colors (base + harmonies + inverse) to the palette for every 1 Darker/Lighter value. When Darker and Value are set to 2 or more, the darker or lighter variations will be evenly spaced between the original colors and white or black. Thus, you can use them to rapidly generate lighter and darker "steps" for each of your base, harmony, and inverse colors, very useful when you don't know exactly how much darker or lighter a color you need until you see examples.

  ### Coming Soon (Future Features)
  - See a generated color's details on hover/tap.
  - Color scheme export to CSS or HTML.
  - User login: save presets, schemes and colors for later

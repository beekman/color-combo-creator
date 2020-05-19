# Live Palette Populator

A React color palette generator with a unique interface designed for efficient but highly customizable color palette creation with instant feedback.
<img width="800" alt="Interface" src="https://user-images.githubusercontent.com/563233/82376818-8bc23380-99d7-11ea-9d31-26beefede592.png">

## Options:
 - Base Color: Pick a target color using the hue slider, or click anywhere else on the banner to open a Photoshop-style picker that allows adjustment of base saturation and lightness, then adjust the four numeric inputs to set the rules that generate your palette's color scheme.
 
<img width="800" alt="Color Picker" src="https://user-images.githubusercontent.com/563233/82376855-9bda1300-99d7-11ea-8107-b48b86857bdb.png">
 
 - Harmonies: Input number controls the number of evenly spaced points on the color wheel relative to the base hue.
 - Inverses:  Controls how many base + harmony colors to use, picking the OPPOSITE colors on the color wheel for the first colors up to the specified number, with a max value of the number of harmonies + 1.
  - Both Darker and Lighter use _all of the above colors_ to generate the input number of _COMPLETE SETS_ of darker/lighter variations. That means that if you have 2 harmonies and 1 inverse, you'll add 4 colors (base + harmonies + inverse) to the palette for every 1 Darker/Lighter value. When Darker and Value are set to 2 or more, the darker or lighter variations will be evenly spaced between the original colors and white or black. Thus, you can use them to rapidly generate lighter and darker "steps" for each of your base, harmony, and inverse colors, very useful when you don't know exactly how much darker or lighter a color you need until you see examples.

### Newest features
 - Show an overlay detailing all color values by clicking/tapping any of the colors in your palette.
 <img width="800" alt="color-values-hsl-overlay" src="https://user-images.githubusercontent.com/563233/82376810-882eac80-99d7-11ea-9a72-0bce2b927b45.png">
 - New numeric input, Desaturate, which generates less colorful variant colorsets and adds them to the palette.
 
  ### Coming Soon (Future Features)
  - Color scheme export to CSS or HTML.
  - User login: save presets, schemes and colors for later

# Live Palette Populator

A React color palette generator with a unique interface designed for efficient but highly customizable color palette creation with instant feedback.
<img width="1151" alt="Screen Shot 2020-07-10 at 6 10 36 PM" src="https://user-images.githubusercontent.com/563233/87213344-2e60a980-c2d9-11ea-81c9-e3e2ef5b78e4.png">

## Options

 - Base Color: Pick a target color using the hue slider, or click anywhere else on the banner to open a Photoshop-style picker that allows adjustment of base saturation and lightness, then adjust the numeric inputs to set the rules that generate your palette's color scheme.

<img width="800" alt="Color Picker" src="https://user-images.githubusercontent.com/563233/82376855-9bda1300-99d7-11ea-8107-b48b86857bdb.png">

- Harmonies: Input number controls the number of evenly spaced points on the color wheel relative to the base hue.
- Inverses:  Controls how many base + harmony colors to use, picking the OPPOSITE colors on the color wheel for the first colors up to the specified number, with a max value of the number of harmonies + 1.
- Darker, Lighter and Desaturated: These use _all of the above colors_ to generate the input number of _COMPLETE SETS_ of darker/lighter/less colorful variations. That means that if you have 2 harmonies and 1 inverse, you'll add 4 colors (based on the base color, harmonies, and inverse color) to the palette for every 1 Darker/Lighter/Desaturated value. When these inputs are 2 or greater, the variations will be evenly spaced between the original colors and white, black, or gray. Thus, you can use them to rapidly generate a range of "steps" towards those colors for each of your base, harmony, and inverse colors, giving you more variations to choose from.

### Newest features

 - Show an overlay detailing all color values by clicking/tapping any of the colors in your palette.
 - <img width="800" alt="color-values-hsl-overlay" src="https://user-images.githubusercontent.com/563233/82376810-882eac80-99d7-11ea-9a72-0bce2b927b45.png">
 - New numeric input, Desaturate, which generates less colorful variant colorsets and adds them to the palette.

  ### Coming Soon (Future Features)
  - User login: save presets, schemes and colors for later
  - redesigned color picker

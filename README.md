# Color Combo Creator

A React color palette generator with a unique interface designed for efficient but highly customizable color palette creation with instant feedback.

<img width="700" alt="Screen Shot 2020-05-15 at 4 36 22 AM" src="https://user-images.githubusercontent.com/563233/82049100-a52b4e80-966a-11ea-9dd2-dd64c6fea709.png">

## Options:
 - Base Color: Pick a target color using the hue slider, or click anywhere in the header to open a Photoshop-style picker that allows adjustment of base saturation and lightness, then adjust the four numeric inputs to set your palette's color scheme.
 
 <img width="695" alt="Screen Shot 2020-05-15 at 4 37 36 AM" src="https://user-images.githubusercontent.com/563233/82049091-a2305e00-966a-11ea-98ea-54432668d636.png">
 
 - Harmonies: Input number controls the number of evenly spaced points on the color wheel relative to the base hue.
 - Inverses:  Controls how many base + harmony colors to use, picking the OPPOSITE colors on the color wheel for the first colors up to the specified number, with a max value of the number of harmonies + 1.
  - Both Darker and Lighter use _all of the above colors_ to generate the input number of _COMPLETE SETS_ of darker/lighter variations. That means that if you have 2 harmonies and 1 inverse, you'll add 4 colors (base + harmonies + inverse) to the palette for every 1 Darker/Lighter value. When Darker and Value are set to 2 or more, the darker or lighter variations will be evenly spaced between the original colors and white or black. Thus, you can use them to rapidly generate lighter and darker "steps" for each of your base, harmony, and inverse colors, very useful when you don't know exactly how much darker or lighter a color you need until you see examples.

  ### Coming Soon (Future Features)
  - See a generated color's details on hover/tap.
  - Color scheme export to CSS or HTML.
  - User login: save presets, schemes and colors for later

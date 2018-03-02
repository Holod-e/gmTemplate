# Gmtemplate
template for geniusmMarketing
#how to use
  1. npm i
  2. gulp gulp-jade - to use jade syntax
  3. gulp - to use html syntax
  4. gulp build - to build project to dist directory (minify css, js, optimisation img and onther)

#some info
  1. all styles in scss
  2. all libs styles imported in sass/libs.scss 
  3. all new styles imported in sass/mainGM.scss

#examples for some features
  1. For timer add use this blocks:
  ```
    <div class='simpleCountdown' data-cookies='yep' data-extra='4,0,0' id="countdown1"></div>
    <div class='simpleCountdown' data-cookies='nope' data-date='2017,1,18,0' id="countdown2"></div>
  ```

  2. For popup with wideo use this links
  ```
   <a href="#modal-contact" data-video='' data-srcvideo=''>Open text</a>
	 <a href="#modal-contact" data-video='vimeo' data-srcvideo='193236599'>Open vimeo</a>
	 <a href="#modal-contact" data-video='youtube' data-srcvideo='NL1tbgaiwlM'>Open youtube</a>
  ```


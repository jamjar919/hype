# hype
Simple image slideshow fader for jQuery. Like, really simple. It just fades an array of imagers into one another, with some basic options. This was made to replace a hyperesources animation, hence the name.

Here's a demo - http://thejamespaterson.com/scripts/hype/.

## Install instructions
It's a jQuery plugin - include jQuery on the page, then include the script `jquery.hype.min.js` or `jquery.hype.js`. Then, call `$(selector).hype(options)` on the element you want to turn into a slideshow

## Options
Options are JSON, with the defaults: 

    var options = {
      id: "hype-"+Math.floor(Math.random()*(100000-1)),
      images: [],
      fadeDuration: 1500,
      imageDuration: 3000,
      align: "none",
      height: 200,
      width: 375,
    }
    
Here's what each option does:

##### ID
The #id used to name the elements. If you set this manually, make sure it is unique. EG `mysuperuniqueid` 

##### images
Supply an array of image URL's for the plugin to cycle through. EG `[ "//mysite.com/images/slide1.jpg", "//mysite.com/images/slide2.jpg", "//mysite.com/images/slide3.jpg"]` 

##### fadeDuration
The amount of time taken fading between two images, in milliseconds. EG `400` or `1` or some integer.

##### imageDuration
The amount of time taken to show each image, in milliseconds. EG `1000` or `3000` or some integer. I would suggest this is longer than fadeDuration or funky things will start happening.

##### align
Adds a float value to the parent element. Set to `none`, `left` or `right`.

##### height and width
Sets the height and width of the element, obviously. 


# Example
Look at the example directory for the full images and code of the example. Here is the initiation script as this is likely the bit you want.

      $("#example").hype({
        images: [
          "coffee_truffle.jpg",
          "orange.png",
          "rasberry.png"
        ],
        height: 206,
        width: 388,
      });

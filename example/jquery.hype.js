(function ($) {
  $.fn.hype = function(userOptions) {
    var options = $.extend({
      id: "hype-"+Math.floor(Math.random()*(100000-1)),
      images: [],
      fadeDuration: 1500,
      imageDuration: 3000,
      align: "none",
      height: 200,
      width: 375,
    }, userOptions);
    
    // Setup layers
    this.css("float", options.align);
    this.css("height", options.height);
    this.css("width", options.width);
    this.css("overflow", "hidden");
    this.css("position", "relative");
    var z1 = `#${options.id}-z1`;
    var z2 = `#${options.id}-z2`;
    this.append(`
	<div id="${options.id}-z1" style="z-index: 2; position: absolute;width: 100%;height: 100%;">
		<img>
	</div>
	<div id="${options.id}-z2" style="z-index: 1; position: absolute;width: 100%;height: 100%;">
		<img>
	</div>
	`);
    
    var z1Top = true;
    var nextImage = 1;
    var image1 = $(`${z1} > img`)[0];
    var image2 = $(`${z2} > img`)[0];
    
    if (options.images.length > 0) {
      image1.src = options.images[0];
      
      if (options.images.length > 1) {
      	image2.src = options.images[1];
        
        setInterval(function() {
          nextImage += 1;
          if (nextImage > options.images.length - 1) {
            nextImage = 0;
          }          
          
          if (z1Top) {
            $(z1).fadeOut(options.fadeDuration, function() {
            	$(z1).css("z-index", "1");
              	$(z2).css("z-index", "2");
              	image1.src = options.images[nextImage]
              	$(z1).css("display", "inline-block");
            })
            z1Top = false;
          } else {
          	$(z2).fadeOut(options.fadeDuration, function() {
            	$(z2).css("z-index", "1");
              	$(z1).css("z-index", "2");
              	image2.src = options.images[nextImage]
              	$(z2).css("display", "inline-block");
            })
            z1Top = true;
       	  }
        }, options.imageDuration);
        
      } else {
        console.log("jquery.hype: You only added one image URL, so the images are not rotating");
      }
    } else {
      console.log("jquery.hype: You didn't add any image URL's to the options, you should do that.");
    }
  };
}(jQuery));

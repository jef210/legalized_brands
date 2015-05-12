(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
   
// console logging testing the scroll on the window

   $(window).scroll(function() {
    console.log( "Firing!" );
  });

// var timer;  
// var windowHeight = $(window).height();  
// var triggerHeight = 0.5 * windowHeight;

// $(window).scroll(function() {
//     if(timer) {
//         window.clearTimeout(timer);
//     }

//     timer = window.setTimeout(function() {

//         // this variable changes between callbacks, so we can't cache it
//         var y = $(window).scrollTop() + windowHeight;

//         if(y > triggerHeight) {
//             // ...
//         }


//     }, 100);
});
    
});


  
});

})(jQuery);

'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});



  // $("#md-popup-1").fancybox().trigger('click');

// $("#md-popup-2").fancybox().trigger('click');

// $("#md-popup-3").fancybox().trigger('click');

// $("#md-popup-4").fancybox().trigger('click');


let firstScroll = true;
$(window).scroll(function() {
    if (firstScroll) {
        firstScroll = false;
        $('html,body').animate({
            scrollTop: $(".md-img-3").offset().top
        }, 1000);
    }
});
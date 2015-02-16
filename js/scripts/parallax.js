var parallax = (function ($) {

    if( PLATFORM.IOS() ) return;

    var init = function(){
        var s = skrollr.init({
            forceHeight: false
        });
    };

    imagesLoaded( $('body')[0], function( instance ) {
      init();
    });

}($));

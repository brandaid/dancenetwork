var parallax = (function ($) {

    if( PLATFORM.IOS() ) return;

    var init = function(){
        var s = skrollr.init();
    };

    // I think this is somehow still firing before images are loaded
    // might need Metafizzy imagesLoaded
    $(window).load(init);

}($));

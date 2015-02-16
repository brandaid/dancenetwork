var scrollToSection = (function ($) {

    $('.js-scroll').click(function(evt){
        evt.preventDefault();

        $('html, body').animate({
            scrollTop: $('.js-main').offset().top
        }, 500);
    });

}($));

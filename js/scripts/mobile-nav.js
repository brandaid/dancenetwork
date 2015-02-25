var mobileNav = (function ($) {
  "use strict";

  function buildNav() {
    // Clone the Nav
    var mobile_nav_html =
      '<nav class="mobile-nav">' +
        '<ul role="navigation">' +
          '<li><a class="mobile-nav__link mobile-nav__link--home" href="#">Home</a></li>' +
          '<li><a class="mobile-nav__link mobile-nav__link--about" href="#">About</a></li>' +
          '<li><a class="mobile-nav__link mobile-nav__link--video" href="#">Video</a></li>' +
        '</ul>' +
        // '<a class="mobile-nav__close">&times;</a></nav>' +
      '</nav>';

    $(mobile_nav_html).insertBefore('.site-header');
  }

  function showNav() {
    var $mobile_nav = $('.mobile-nav'),
        $mobile_nav_btn = $('.js-nav');

    $mobile_nav_btn.click(function(evt){
      evt.preventDefault();

      $(this).toggleClass('is-open');

      $mobile_nav.toggleClass('is-visible');
    });
  }

  function init(){
    buildNav();
    showNav();
  }

  $(init);

}($));

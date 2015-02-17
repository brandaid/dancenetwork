// Fallbacks for browsers that don't support SVG

var svgFallback = (function ($) {
    "use strict";

    var init = function(){
        if(!supportsSvg()) {
            svgClass();
            svgReplace();
        }
    };

    function supportsSvg(){
        return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;
    }

    function svgClass(){
        document.documentElement.className += ' no-svg'
    }

    function svgReplace(){
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }

    $(init);
}($));

var PLATFORM = {
    IOS: function(){
        return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
    },
    IE8: function(){
        return $('html[data-useragent*="MSIE 8"]').length;
    },
    IE9: function(){
        return $('html[data-useragent*="MSIE 9"]').length;
    }
};

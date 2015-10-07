$(function() {

    // grab the initial top offset of the navigation 
    var stickyNavTop = $('nav').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function() {
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > stickyNavTop) {
            $('nav').css({
                'position': 'fixed',
                'top': 0,
                'left': 0
            });
        }
        else {
            $('nav').css({
                'position': 'relative'
            });
        }

    };

    // run our function on load
    stickyNav();

    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });

});
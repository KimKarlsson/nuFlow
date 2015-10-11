$(function() {
    // HÄMTAR TOP OFFSET I MENYN
    var stickyNavTop = $('nav').offset().top;
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function() {
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > stickyNavTop) {
            $('nav').css({
                'position': 'fixed',
                'top': -50,
                'left': 0,
            });
        }
        else {
            $('nav').css({
                'position': 'absolute',
                'top': 0,
            });
        }
    };
    // STARTAR FUNKTIONEN
    stickyNav();

    // OCH KÖR VID VARJE SCROLLNING
    $(window).scroll(function() {
        stickyNav();
    });
});

/*
SMOOTH SCROLLING
*/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 50
                }, 1500); 
                return false;
            }
        }
    });

});
/* BACK TO TOP FUNCTION */
$(this).ready(function() {
    $('body').prepend('<a href="#" class="back-to-top"></a>');
    var amountScrolled = 100;
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn();
        }
        else {
            $('a.back-to-top').fadeOut();
        }
    });
    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});




/*
=============================================
MOBILE JQUERY 
=============================================
*/

/* MOBILMENY KNAPP */

$('button').click(function() {
    $(this).toggleClass('slideToggle').siblings('nav').slideToggle();
});

$(function() {
    // HÄMTAR TOP OFFSET I MENYN
    var stickyNavTop = $('.mobile').offset().top;
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function() {
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > stickyNavTop) {
            $('.mobile').css({
                'position': 'fixed',
                'top': -110,
                'left': 0,
            });
        }
        else {
            $('.mobile').css({
                'position': 'absolute',
                'top': 0,
            });
        }
    };
    // STARTAR FUNKTIONEN
    stickyNav();

    // OCH KÖR VID VARJE SCROLLNING
    $(window).scroll(function() {
        stickyNav();
    });
});

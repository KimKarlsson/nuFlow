/* ANKARSKROLL*/
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
    //KONTROLLERAR OM SIDAN ÄR I "TOP" ANNARS VISA KNAPP TILLBAKA
    $(window).scroll(function() {
        if ($(this).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn(); //FADAR IN KNAPPEN
        }
        else {
            $('a.back-to-top').fadeOut(); //FADAR UT KNAPPEN
        }
    });
    $('a.back-to-top').click(function() { // SCROLLAR TILL TOPPEN VID KNAPPTRYCKNING
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});

// GÖMMER HEADER VID SKROLL
var didScroll;
var lastScrollTop = 0;
var downDelta = 200;
var navbarHeight = $('header, nav').outerHeight();
$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 500);

function hasScrolled() {
    var st = $(this).scrollTop();
    // KONTROLLERAR OM SCROLLEN PASSERAR DELTA
    if (Math.abs(lastScrollTop - st) <= downDelta)
        return;
    // SKROLLAR MAN MER ÄN HEADERN LÄGGER SCRIPTET TILL  .NAVIGATION-UP.
    if (st > lastScrollTop && st > navbarHeight) {
        // SCROLL DOWN
        $('header, nav').removeClass('navigation-down').addClass('navigation-up');
    }
    else {
        // SKROLL UPP
        if (st + $(window).height() < $(document).height()) {
            $('header, nav').removeClass('navigation-up').addClass('navigation-down');
        }
    }
    lastScrollTop = st;
}



/*
=============================================
MOBILE JQUERY 
=============================================
*/

/* MOBILMENY KNAPP */
$('button.mob-button').click(
    function() {
        $('.mobile').slideToggle('medium');
        $(this).toggleClass('opened');
    });

$(function() {

    // grab the initial top offset of the navigation 
    var stickyNavTop = $('nav').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function() {
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > stickyNavTop) {
            $('header,nav').css({
                'position': 'fixed',
                'top': -50,
                'left': 0
            });
        }
        else {
            $('header, nav').css({
                'top': 0,

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
/*
FADESLIDER
*/

/* 
IMAGESWITCHER
*/
$(function() {
    $('.fadein img:gt(0)').hide();
    setInterval(function() {
            $('.fadein :first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo('.fadein');
        },
        3000);
});

/**/

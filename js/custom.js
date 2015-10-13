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


/* WEBFUNKTION*/
$(function() {
    // HÄMTAR TOP OFFSET I MENYN
    var stickyNavTop = $('header, nav').offset().top;
    // BESTÄMMER OM NAV ÄR FAST ELLER INTE
    var stickyNav = function() {
        var scroll_top = $(window).scrollTop(); // POSITON TILL SIDANS TOPP
        // OM SCROLLING SKER LÄNGER ÄN TILL NAV, FÄST NAV -50PX,
        if (scroll_top > stickyNavTop) {
            $('header, nav').css({
                'position': 'fixed',
                'top': -50,
                'left': 0,
            });
        }
        else {
            $('header, nav').css({
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
=============================================
MOBILE JQUERY 
=============================================
*/

/* MOBILMENY KNAPP */
$('button.mob-button').click(
    function() {
        $('.mobile').slideDown('slideToggle');
    });

/*$('.mob-sub').click(
    function() {
        $(this).parent().toggleClass('slideToggle');
    });
*/
/* MOBILEVERSION*/
$(function() {
    // HÄMTAR TOP OFFSET I MENYN
    var stickyNavTop = $('header.mob-header, .mobile').offset().top;
    // BESTÄMMER OM NAV ÄR FAST ELLER INTE
    var stickyNav = function() {
        var scroll_top = $(window).scrollTop(); // POSITON TILL SIDANS TOPP
        // OM SCROLLING SKER LÄNGER ÄN TILL NAV, FÄST NAV -400PX,
        if (scroll_top > stickyNavTop) {
            $('header.mob-header, .mobile').css({
                'position': 'fixed',
                'top': -400,
                'left': 0,

            });
            $('.mobile').slideUp('slideUp').hide();
            
        }
        else {
            $('header.mob-header, .mobile').css({
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

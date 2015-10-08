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
                'top': 0,
                'left': 0,
            });
        }
        else {
            $('nav').css({
                'position': 'relative'
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
/* MOBILMENY KNAPP */
$('button').click(function() {
    $(this).toggleClass('expanded').siblings('div').slideToggle();
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
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });
    /* BACK TO TOP FUNCTION */
    $('body').prepend('<a href="#" class="back-to-top"></a>');
    var amountScrolled = 200;

    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        }
        else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    $('a.back-to-top').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
});

$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3000);
});
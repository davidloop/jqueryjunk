(function($) {

    // Open menu
    $(".menu-trigger").on('click', (e) => {
        e.preventDefault();
        $(e.target).toggleClass('open');
        $(".menu-target").toggleClass('open');
    });

    // Close menu clicking anywhere but the menu
    $(document).on('click', (e) => {
        if (
            !$(".menu-target").is(e.target) &&
            !$(".menu-target").find("*").is(e.target) &&
            !$(".menu-trigger").is(e.target) &&
            !$(".menu-trigger").find("*").is(e.target)
        ) {
            $(".menu-trigger").removeClass('open');
            $(".menu-target").removeClass('open');
        }
    });

    // Animate to each section
    $(".menu-target a").on('click', (e) => {
        $("html, body").animate({
            scrollTop: $( $(e.currentTarget).attr("href") ).offset().top - 105
        }, 200);
        $(".menu-trigger").removeClass('open');
        $(".menu-target").removeClass('open');
    });

    // Expand code
    $(".highlight-overflow").each( (e, i) => {
        if ( $(i).outerHeight() <= 207 ) {
            $(i).css({
                'padding-top' : '20px',
            })
            $(i).parent().find("button").hide();
        }
    });

    $(".highlight button").on('click', (e) => {
        e.preventDefault();
        if ( $(e.currentTarget).hasClass('open') ) {
            $(e.currentTarget).removeClass('open').text('expand');
            $(e.currentTarget).next().css({
                'max-height' : '225px',
            });
        } else {
            $(e.currentTarget).addClass('open').text('collapse');
            $(e.currentTarget).next().css({
                'max-height' : '2250px',
            });
        }
    });

    // Back to top
    $(window).on('scroll', () => {
        const scrolled = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if ( scrolled > 500 ) {
            $(".back-to-top").addClass('visible');
        } else {
            $(".back-to-top").removeClass('visible');
        }
    });

    $(".back-to-top").on('click', (e) => {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("[id=top]").offset().top
        }, 200);
    });

    // Year
    document.querySelector('.year').innerHTML = new Date().getFullYear();

})(jQuery);
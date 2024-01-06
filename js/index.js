(function($) {

    function toggleMenu() {
        $(".menu-trigger").toggleClass('open');
        $(".menu-target").toggleClass('open');
    }

    function isMenuClick(e) {
        return (
            $(".menu-target, .menu-target *").is(e.target) || $(".menu-trigger, .menu-trigger *").is(e.target)
        );
    }

    function closeMenu() {
        $(".menu-trigger").removeClass('open');
        $(".menu-target").removeClass('open');
    }


    
    // Open menu
    $(".menu-trigger").on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    // Close menu clicking anywhere but the menu
    $(document).on('click', (e) => {
        if (!isMenuClick(e)) {
            closeMenu();
        }
    });



    // Animate to each section
    $(".menu-target a").on('click', (e) => {
        $("html, body").animate({
            scrollTop: $( $(e.currentTarget).attr("href") ).offset().top - 105
        }, 200);
        closeMenu();
    });



    // Expand code
    $(".highlight-overflow").each( (index, element) => {
        const el = element;
        const maxHeight = 207;

        if ($(el).outerHeight() <= maxHeight) {
            $(el).css({
                'padding-top' : '20px',
            })
            $(el).parent().find("button").hide();
        }
    });

    $(".highlight button").on('click', (e) => {
        e.preventDefault();
        const button = $(e.currentTarget);
        const content = button.next();

        if (button.hasClass('open')) {
            button.removeClass('open').text('expand');
            content.css('max-height', '225px');
        } else {
            button.addClass('open').text('collapse');
            content.css('max-height', '2250px');
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
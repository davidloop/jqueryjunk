(function($) {

    $(".simple-accordion-to-top-trigger").on('click', (e) => {
        e.preventDefault();

        let target = $(e.currentTarget).parent().find(".simple-accordion-to-top-target");

        if ( $(e.currentTarget).hasClass('open') ) {
            $(e.currentTarget).removeClass('open').attr('aria-expanded', 'false');
            $(target).slideUp('fast');
        } else {
            $(".simple-accordion-to-top-trigger").removeClass('open').attr('aria-expanded', 'false');
            $(".simple-accordion-to-top-target").slideUp('fast');
            $(e.currentTarget).addClass('open').attr('aria-expanded', 'true');
            $(target).slideDown('fast');
        
            setTimeout( ()=> {
                $("body, html").animate({
                    scrollTop: $(e.currentTarget).offset().top - 105
                }, 200);
            }, 200);
        }
    });

})(jQuery);
(function($) {

    $(".simple-accordion-trigger").on('click', (e) => {
        e.preventDefault();

        let target = $(e.currentTarget).parent().find(".simple-accordion-target");

        if ( $(e.currentTarget).hasClass('open') ) {
            $(e.currentTarget).removeClass('open').attr('aria-expanded', 'false');
            $(target).slideUp('fast');
        } else {
            $(".simple-accordion-trigger").removeClass('open').attr('aria-expanded', 'false');
            $(".simple-accordion-target").slideUp('fast');
            $(e.currentTarget).addClass('open').attr('aria-expanded', 'true');
            $(target).slideDown('fast');
        }
    });

})(jQuery);
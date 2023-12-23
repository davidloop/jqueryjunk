(function($) {

    $(".simple-toggle-trigger").on('click', (e) => {
        e.preventDefault();

        let target = $(e.currentTarget).parent().find(".simple-toggle-target");

        if ( $(e.currentTarget).hasClass('open') ) {
            $(e.currentTarget).removeClass('open').attr('aria-expanded', 'false');
            $(target).slideUp('fast');
        } else {
            $(e.currentTarget).addClass('open').attr('aria-expanded', 'true');
            $(target).slideDown('fast');
        }
    });

    $(".simple-toggle-trigger").on('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(e.currentTarget).trigger('click');
        }
    });

})(jQuery);
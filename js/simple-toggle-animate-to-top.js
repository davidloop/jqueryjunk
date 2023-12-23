(function($) {
    $(".simple-toggle-to-top-trigger").on('click', (e) => {
        e.preventDefault();

        const target = $(e.target).parent().find(".simple-toggle-to-top-target");

        if ($(e.target).hasClass('open')) {
            $(e.target).removeClass('open').attr('aria-expanded', 'false');
            target.slideUp('fast');
        } else {
            $(e.target).addClass('open').attr('aria-expanded', 'true');
            target.slideDown('fast');

            $("body, html").animate({
                scrollTop: $(e.target).offset().top - 105
            }, 200);
        }
    });

    $(".simple-toggle-to-top-trigger").on('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(e.target).trigger('click');
        }
    });
})(jQuery);
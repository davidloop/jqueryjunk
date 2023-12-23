(function($) {
    $(".simple-toggle-trigger").on('click', (e) => {
        e.preventDefault();

        let target = $(e.target).parent().find(".simple-toggle-target");
        let isOpen = $(e.target).hasClass('open');

        $(e.target).toggleClass('open', !isOpen).attr('aria-expanded', !isOpen);
        $(target).slideToggle('fast');
    });

    $(".simple-toggle-trigger").on('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(e.target).trigger('click');
        }
    });
})(jQuery);
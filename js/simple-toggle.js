(function($) {
    $(".simple-toggle-trigger").on('click', function(e) {
        e.preventDefault();

        let target = $(this).parent().find(".simple-toggle-target");
        let isOpen = $(this).hasClass('open');

        $(this).toggleClass('open', !isOpen).attr('aria-expanded', !isOpen);
        $(target).slideToggle('fast');
    });

    $(".simple-toggle-trigger").on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(this).trigger('click');
        }
    });
})(jQuery);
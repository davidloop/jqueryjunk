(function($) {
    $(".simple-accordion-trigger").on('click keypress', (e) => {
        if (e.type === 'keypress' && e.key !== 'Enter') {
            return;
        }

        e.preventDefault();

        const target = $(e.target).parent().find(".simple-accordion-target");

        if ($(e.target).hasClass('open')) {
            $(e.target).removeClass('open').attr('aria-expanded', 'false');
            $(target).slideUp('fast');
        } else {
            $(".simple-accordion-trigger").removeClass('open').attr('aria-expanded', 'false');
            $(".simple-accordion-target").slideUp('fast');
            $(e.target).addClass('open').attr('aria-expanded', 'true');
            $(target).slideDown('fast');
        }
    });
})(jQuery);
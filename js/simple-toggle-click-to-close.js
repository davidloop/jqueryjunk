(function($) {
    $(".simple-toggle-click-to-close-trigger").on('click keypress', (e) => {
        if (e.type === 'keypress' && e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        
        e.preventDefault();

        let target = $(e.target).parent().find(".simple-toggle-click-to-close-target");
        let isOpen = $(e.target).hasClass('open');

        $(e.target).toggleClass('open', !isOpen).attr('aria-expanded', !isOpen);
        $(target).slideToggle('fast');
    });

    $(".simple-toggle-click-to-close-trigger").on('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(e.target).trigger('click');
        }
    });

    $(document).on('click', (e) => {
        let trigger = $(".simple-toggle-click-to-close-trigger");
        let target = $(".simple-toggle-click-to-close-target");

        if (
            !$(trigger).is(e.target) &&
            !$(trigger).find('*').is(e.target) &&
            !$(target).is(e.target) &&
            !$(target).find('*').is(e.target)
        ) {
            $(trigger).removeClass('open').attr('aria-expanded', 'false');
            $(target).slideUp('fast');
        }
    });
})(jQuery);
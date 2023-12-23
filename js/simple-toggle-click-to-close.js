(function($) {

    $(".simple-toggle-click-to-close-trigger").on('click keypress', function(e) {
        if (e.type === 'keypress' && e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        
        e.preventDefault();

        let target = $(e.currentTarget).parent().find(".simple-toggle-click-to-close-target");
        let isOpen = $(e.currentTarget).hasClass('open');

        $(e.currentTarget).toggleClass('open', !isOpen).attr('aria-expanded', !isOpen);
        $(target).slideToggle('fast');
    });

    $(".simple-toggle-click-to-close-trigger").on('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(e.currentTarget).trigger('click');
        }
    });

    $(document).on('click', function(e) {
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
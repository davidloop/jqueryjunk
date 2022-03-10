(function($) {

    $(".simple-toggle-click-to-close-trigger").on('click', (e) => {
        e.preventDefault();

        let target = $(e.currentTarget).parent().find(".simple-toggle-click-to-close-target");

        if ( $(e.currentTarget).hasClass('open') ) {
            $(e.currentTarget).removeClass('open').attr('aria-expanded', 'false');
            $(target).slideUp('fast');
        } else {
            $(e.currentTarget).addClass('open').attr('aria-expanded', 'true');
            $(target).slideDown('fast');
        }
    });

    $(document).on('click', (e) => {

        let trigger = $(".simple-toggle-click-to-close-trigger"),
            target = $(".simple-toggle-click-to-close-target");

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
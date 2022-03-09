(function($) {

    $(".simple-toggle-to-top-trigger").on('click', (e) => {
        e.preventDefault();

        let target = $(e.currentTarget).parent().find(".simple-toggle-to-top-target");

        if ( $(e.currentTarget).hasClass('open') ) {
            $(e.currentTarget).removeClass('open').attr('aria-expanded', 'false');
            $(target).slideUp('fast');
        } else {
            $(e.currentTarget).addClass('open').attr('aria-expanded', 'true');
            $(target).slideDown('fast');

            $("body, html").animate({
                scrollTop: $(e.currentTarget).offset().top - 105
            }, 200);
        }
    });

})(jQuery);
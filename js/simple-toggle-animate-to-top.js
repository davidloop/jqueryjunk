(function($) {

    $(".simple-toggle-to-top-trigger").on('click', function(e) {
        e.preventDefault();

        var target = $(this).parent().find(".simple-toggle-to-top-target");

        if ($(this).hasClass('open')) {
            $(this).removeClass('open').attr('aria-expanded', 'false');
            target.slideUp('fast');
        } else {
            $(this).addClass('open').attr('aria-expanded', 'true');
            target.slideDown('fast');

            $("body, html").animate({
                scrollTop: $(this).offset().top - 105
            }, 200);
        }
    });

    $(".simple-toggle-to-top-trigger").on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            $(this).trigger('click');
        }
    });

})(jQuery);
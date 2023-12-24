(function($) {
    $(".simple-accordion-to-top-trigger").on('click keypress', (e) => {
        if (e.type === 'keypress' && e.key !== 'Enter') {
            return;
        }

        e.preventDefault();

        const target = $(e.target).parent().find(".simple-accordion-to-top-target");

        if ($(e.target).hasClass('open')) {
            $(e.target).removeClass('open').attr('aria-expanded', 'false');
            $(target).slideUp('fast');
        } else {
            $(".simple-accordion-to-top-trigger").removeClass('open').attr('aria-expanded', 'false');
            $(".simple-accordion-to-top-target").slideUp('fast');
            $(e.target).addClass('open').attr('aria-expanded', 'true');
            $(target).slideDown('fast');
        
            setTimeout( ()=> {
                $("body, html").animate({
                    scrollTop: $(e.target).offset().top - 105
                }, 200);
            }, 200);
        }
    });
})(jQuery);
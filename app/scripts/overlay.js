'use strict';

(function ($) {
    $(document).ready(function () {
        $('.open-menu').on('click', function () {
            $('.overlay').addClass('open');
        });

        $('.close-menu').on('click', function () {
            $('.overlay').removeClass('open');
        });
    });
})(jQuery);
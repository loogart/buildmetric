        //parallax effect
        $(window).stellar({
            horizontalScrolling: false,
            responsive: false,
        });
        //
        $(document).ready(function () {
            $(".collapsed").click(function () {
                $('.mobile-menu-closed').toggleClass('mobile-menu-open');
            });
        });
$(document).ready(function() {
    $('.review-slider').slick({
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        responsive: [{
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 576,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });

    $(".menu-btn").on("click", function() {
        $("header").toggleClass("header-active");
        $(".menu-active").toggleClass("menu-close");
        $("nav").slideToggle("fast");
    });

    $(".call-header-mob").on("click", function() {
        $("header").removeClass("header-active");
        $(".menu-active").removeClass("menu-close");
        $("nav").css("display", "none");
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    $("#feedback").submit(function() {
        var form_data = $(this).serializeArray();
        $.ajax({
            type: "POST",
            url: "/php/sendMail.php",
            data: form_data,
            success: function() {
                $(".call-thank").click();
                console.log("send");
            },
            error: function(data) {
                $(".call-thank").click();
                console.log("error");
            }
        });

        return false;
    });
});
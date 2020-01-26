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

$(".curse-change").on("click", function (e) {
        e.preventDefault();
        let curse = $(this).attr("data-curse");
        $(".curse-input").val(curse);
    });

    $("#feedback").submit(function() {
        var form_data = $(this).serializeArray();
        $.ajax({
            type: "POST",
            url: "../../mail.php",
            data: form_data,
            success: function() {
                $(".call-thank").click();
                console.log("send");
            },
            error: function() {
                $(".call-thank").click();
                alert("Ошибка");
                console.log("error");
            }
        });

        return false;
    });


        $(".menu-ikor").on("click","a", function (event) {
            event.preventDefault();
            if ($(window).width() < 990) {
                $("header").removeClass("header-active");
                $(".menu-active").removeClass("menu-close");
                $("nav").slideUp("fast");
            }
            var id  = $(this).attr('href'),
                top = $(id).offset().top - 125;
            $('body,html').animate({scrollTop: top}, 1500);
        });


    $('.phons').on('input', function () {
        if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        }
        return false;
    });

    $(function() {
        menu_top = $('.header-menu').offset().top;        // запоминаем положение меню
        $(window).scroll(function () {             // отслеживаем событие прокрутки страницы
          if ($(window).scrollTop() > menu_top) {  // если прокрутка дошла до меню
            if ($('.menu').css('position') != 'fixed') {  // проверяем, если меню еще не зафиксировано
              $('.header-menu').addClass('header-fixed');
              $('main').css('margin-top','80px'); // делаем отступ, чтобы контент не "скакал" в момент фиксации меню
            }
          } else {                                 // прокрутка страницы обратно вверх достигла место "перехода" меню
            if ($('.header-menu').css('position') == 'fixed') {  // если меню зафиксировано
              $('.header-menu').removeClass('header-fixed');
              $('main').css('margin-top','');
            }
          }
        });
      });
        
        
});
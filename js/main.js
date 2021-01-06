$(function () {
    
    $('a[data-filter]').on('click', function(e) {
        e.preventDefault();
        let dataFilter = $(this).data('filter');
        if (dataFilter == 'all') {
            $('[data-work]').removeClass('hide');
            console.log($("[data-work]"));
        }
        else {
            $('[data-work]').each(function() {
                let dataWork = $(this).data('work');
                if (dataFilter != dataWork) {
                    $(this).addClass("hide");
                } else {
                    $(this).removeClass("hide");
                }
            });
        }
    });

    $('.modal__close').on('click', function() {
        let $this = $(this);
        $(this).parents('.modal').find('.modal__dialog').css({
            transform: "scale(0)"
        });
        setTimeout(function() {
            $this.parents('.modal').removeClass('is-active');
            $("body").removeClass("no-scroll");
        }, 300);
       
    });
    $('.modal').on('click', function() {
        let $this = $(this);
        $this.find('.modal__dialog').css({
            transform: "scale(0)"
        });
        setTimeout(function() {
            $this.removeClass('is-active');
            $("body").removeClass("no-scroll");
        },300);
    });
    $('.modal__dialog').on('click', function(e) {
        // Если мы кликаем по modal__dialog то мы отменяем событие клика по его родителю
        e.stopPropagation();
    });
    $('[data-modal]').on('click', function(e) {
        e.preventDefault();
        let modalWindow =  $(this).data('modal');
        $(modalWindow).addClass('is-active');
        $("body").addClass("no-scroll");
        setTimeout(function() {
            $(modalWindow).find('.modal__dialog').css({
                transform: "scale(1)"
            });

        }, 300);

    });
    $('.portfolio__col').each(function(i) {
        $(this).on('click', function() {
            $(".modal-work__cat").text($(".work__cat").eq(i).text());
            $('.modal-work__title').text($(".work__title").eq(i).text())
            $("#modal-review").addClass('is-active')
            $("body").addClass("no-scroll");
            setTimeout(function() {
                $("#modal-review").find('.modal__dialog').css({
                    transform: "scale(1)"
                });
    
            }, 300);
            
        });
    });
    
    
    // slick slider
    $('[data-slider="slick"]').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        
    });
    
    $('.slickPrev').on('click', function(e) {
        e.preventDefault();
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick('slickPrev');
    });
    $('.slickNext').on('click', function(e) {
        e.preventDefault();
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick('slickNext');
    });

    $('#jsBurger').on('click', toggleMenu);
        
    $('.nav__link').on('click', function(e) {
        e.preventDefault();
        toggleMenu();
    })
 
    function toggleMenu() {
        $('#jsBurger').toggleClass("is-active");
        $('#nav-menu').toggleClass("show");
        $('body').toggleClass('no-scroll');
    }
    
    // scroll-animate
    $('.nav__link:not(.nav__link--btn)').on('click', function(e) {
        e.preventDefault();
        let contentTarget = $(this).data('scroll');
        console.log(contentTarget);
        let offsetTop = $(contentTarget).offset().top;
        $('html, body').animate({scrollTop: offsetTop},700);
    });

    // fixed header
    
    let headerH = $('.header').innerHeight();
    let scrollPosition = $(window).scrollTop();
    checkScroll(headerH, scrollPosition);

    $(window).on('scroll resize', function() {
        headerH = $('.header').innerHeight();
        scrollPosition = $(window).scrollTop();
        checkScroll(headerH, scrollPosition);
    });
    function checkScroll (headerH, scrollPosition) {
        if (scrollPosition > headerH) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    }

});
const showElementAnimation = () => {
    const element = document.getElementsByClassName('bottomSlidein');
    if (!element) return;

    const showTiming = window.innerHeight > 768 ? 200 : 40;
    const scrollY = window.pageYOffset;
    const windowH = window.innerHeight;

    for (let i=0; i<element.length; i++) { 
        const elemClientRect = element[i].getBoundingClientRect(); 
        const elemY = scrollY + elemClientRect.top; 
        
        if(scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if (scrollY + windowH < elemY) {
            element[i].classList.remove('is-show');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

$(function(){
    // スマホハンバーガーメニュー
    $('.sitemapMore').on('click', function() {
        $(this).toggleClass('on-click');
        $('.sitemapHide').slideToggle(200);
    });

    // スマホフッターサービスメニュー
    $('.footerMenuMore').on('click', function() {
        $(this).toggleClass('on-click');
        $('.footerMenuHide').slideToggle(200);
    });

    // PCサービスメニュー
    $('.megaMore').on('click', function() {
        $(this).toggleClass('on-click');
        $('.megaHide').slideToggle(200);
    });

    // TOPページ　ファーストビュースライドショー
    $(".slider").on("init", function () {
        $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    }).slick({
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 2000,
        autoplaySpeed: 6000,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: true,
    }).on({
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
            $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
        },
        afterChange: function () {
            $(".remove-animation", this).removeClass(
                "remove-animation add-animation"
            );
        },
    });

    // TOPページ　サービス欄スライドショー
    $(".serviceSlider").on("init", function () {
        $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    }).slick({
        autoplay: false,
        arrows: true,
        slidesToShow: 5,
        swipe: false,
        responsive: [
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 4,
                    swipe: false,
                },
            },
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    swipe: false,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    swipe: true,
                },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                swipe: true,
              },
            },
        ],
    }).on({
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
            $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
        },
        afterChange: function () {
            $(".remove-animation", this).removeClass(
                "remove-animation add-animation"
            );
        },
    });

    // サービス詳細ページ　サービス欄スライドショー
    $(".anotherSlider").on("init", function () {
        $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    }).slick({
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    swipe: false,
                },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                swipe: true,
              },
            },
        ],
    }).on({
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
            $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
        },
        afterChange: function () {
            $(".remove-animation", this).removeClass(
                "remove-animation add-animation"
            );
        },
    });

    // $(window).on('load',function(){
    //     $('#splate').delay(200).animate(
    //         {'opacity': 1},{duration: 500}
    //     );
    //     $('#pclate').delay(200).animate(
    //         {'opacity': 1},{duration: 1500}
    //     );
    // });

    // オリジナルスライドショー
    // function toggleChangeBtn() {
    //     let slideIndex = $('.slide').index($('.active'));
    //     $('.button').show();
    //     if(slideIndex == 0) {
    //         $('.prev').hide();
    //     } else if (slideIndex == $('.slide').length - 1) {
    //         $('.next').hide();
    //     }
    // }
    // toggleChangeBtn();

    // $('.next').on('click', function() {
    //     let $displaySlide = $('.active');
    //     $displaySlide.removeClass('active');
    //     $displaySlide.next().addClass('active');
    //     toggleChangeBtn();
    // });
    // $('.prev').on('click', function() {
    //     let $displaySlide = $('.active');
    //     $displaySlide.removeClass('active');
    //     $displaySlide.prev().addClass('active');
    //     toggleChangeBtn();
    // });

    // フィルター
    // $('#filter a').click(function() {
	// 	$(this).css('outline','none');
	// 	$('#filter .current').removeClass('current');
	// 	$(this).parent().addClass('current');
		
	// 	const filterVal = $(this).text().toLowerCase().replace(' ','-');
				
	// 	if(filterVal == 'すべて') {
	// 		$('#newsItems .newsItem.hidden').fadeIn('slow').removeClass('hidden');
	// 	} else {
			
	// 		$('#newsItems .newsItem').each(function() {
	// 			if(!$(this).hasClass(filterVal)) {
	// 				$(this).fadeOut('normal').addClass('hidden');
	// 			} else {
	// 				$(this).fadeIn('slow').removeClass('hidden');
	// 			}
	// 		});
	// 	}
		
	// 	return false;
	// });

    // $(window).on('scroll', function () {
    //     var doch = $(document).innerHeight(); //ページ全体の高さ
    //     var winh = $(window).innerHeight(); //ウィンドウの高さ
    //     var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
    //     if (bottom * 0.9 <= $(window).scrollTop()) {
    //         $('.courceIcon').css('display','none');
    //     }
    //     if (bottom * 0.9 >= $(window).scrollTop()) {
    //             $('.courceIcon').css('display','block');
    //     }
    // });

    // プライバシーポリシーに同意するを押したらsubmitボタンを機能させる（disabled属性取る）
    // $('#agreebtn').change(function() {
    //     const result = $('button').prop('disabled');  
    //     if(result) {
    //         $('button').prop('disabled', false);
    //     }
    //     else {
    //         $('button').prop('disabled', true);
    //     }
    // });
});

// article1
$(".article1 .slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼 번호버튼
    pauseOnHover: false, // 마우스오버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: false, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive:[{
        breakpoint:1025,
        settings:{
            arrows: false
        }
    }]
})

var elplst = document.querySelector('.article1 .plst')
var ibt = elplst.childNodes
elplst.addEventListener('click', function(){
    if ( ibt[0].classList.contains('icon-music_pause_button') ) {
        $('.article1 .slide-group').slick('slickPause')
        ibt[0].classList.remove('icon-music_pause_button')
        ibt[0].classList.add('icon-music_play_button')
    } else {
        $('.article1 .slide-group').slick('slickPlay')
        ibt[0].classList.remove('icon-music_play_button')
        ibt[0].classList.add('icon-music_pause_button')
    }
})


// article7
$(".article7 .slide_group2").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼 번호버튼
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: false, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>'
})



var ww = $(window).width()
var wh = $(window).height()

// 사이드바
$(window).on('scroll',function(){
    var scr = $(this).scrollTop()
    showNavbar(scr)
    clickNavbar(scr)
})
for (let i = 0; i < $('#navbar > span').length; i++) {
    $('#navbar > span').eq(i).on('click', function() {
        $('html').animate ({scrollTop:$('.article').eq(i).offset().top - (wh / 3.6)}, 500)
    })
}
function showNavbar(scr) {
    if ( scr >= $('.article').eq(1).offset().top - (wh / 3)) {
        $('#navbar').addClass('on')
    } else if (scr < $('.article').eq(1).offset().top - (wh / 3)) {
        $('#navbar').removeClass('on')
    }
}
function clickNavbar(scr) {
    for (let i = 0; i < $('.article').length; i++) {
        let next = i + 1
        const last = $('.article').length - 1
        if (scr >= $('.article').eq(last).offset().top - (wh / 3.8)) {
            $('#navbar > span').eq(last).addClass('on')
            .siblings().removeClass('on')
        } else if ( scr >= $('.article').eq(i).offset().top - (wh / 3.5)
        && scr < $('.article').eq(next).offset().top - (wh / 3.5) ) {
            $('#navbar > span').eq(i).addClass('on')
            .siblings().removeClass('on')
        }

        if ( scr >= $('.article').eq(i).offset().top - (wh / 3.5)
            && !$('.article').eq(i).hasClass('on')) {
            $('.article').eq(i).addClass('on')
        } else if ( scr === 0) {
            $('.article').eq(i).removeClass('on')
        }
    }
}

// article6

var href;
$('.article6 .menu > a').on('click', function(e){
    e.preventDefault()
    href = $(this).attr('href')
    $(this).addClass('on').siblings().removeClass('on')
    $('.depth3 > li').each(function(){
        if ( $(this).hasClass(href) ) {
            $(this).css({display:'none'})
            $(this).addClass('active')
            $(this).css({display:'block'})
        } else {
            $(this).removeClass('active')
            .css({display:'none'})
        }
    })
})
$('.article6 .depth3 > li').hover(
    function(){
        $(this).addClass('on')
    },
    function(){
        $(this).removeClass('on')
    }
)



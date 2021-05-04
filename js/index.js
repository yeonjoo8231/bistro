
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
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    // centerMode: true,
    // centerPadding: "100px",
})



// 스크롤을 내리면 섹션부분부터 네브바가 나왔으면 좋겠다

var ww = $(window).width()
var wh = $(window).height()
var arti2Near = $('.article2').offset().top - (wh /2)
var arti3Near = $('.article3').offset().top - (wh /2)
var arti4Near = $('.article4').offset().top - (wh /2)
var arti5Near = $('.article5').offset().top - (wh /2)
var arti6Near = $('.article6').offset().top - (wh /2)
var arti7Near = $('.article7').offset().top - (wh /2)
var arti8Near = $('.article8').offset().top - (wh /2)


// 사이드바
$(window).on('scroll',function(){
    var scr = $(this).scrollTop()
    if ( scr >= arti2Near) {
        $('#navbar').addClass('on')
    } else if (scr < arti2Near) {
        $('#navbar').removeClass('on')
    }
})
$(window).on('scroll',function(){
    var scr = $(this).scrollTop()
    if ( scr >= arti2Near && scr < arti3Near ) {
        $('#navbar > span').eq(1).addClass('on')
        .siblings().removeClass('on')
    } else if ( scr >= arti3Near && scr < arti4Near ) {
        $('#navbar > span').eq(2).addClass('on')
        .siblings().removeClass('on')
    } else if ( scr >= arti4Near && scr < arti5Near) {
        $('#navbar > span').eq(3).addClass('on')
        .siblings().removeClass('on')
    } else if ( scr >= arti5Near && scr < arti6Near ) {
        $('#navbar > span').eq(4).addClass('on')
        .siblings().removeClass('on')
    } else if ( scr >= arti6Near && scr < arti7Near ) {
        $('#navbar > span').eq(5).addClass('on')
        .siblings().removeClass('on')
    } else if ( scr >= arti7Near && scr < arti8Near ) {
        $('#navbar > span').eq(6).addClass('on')
        .siblings().removeClass('on')
    } else {
        $('#navbar > span').eq(7).addClass('on')
        .siblings().removeClass('on')
    }

    // article2
    if ( scr >= arti2Near && !$('.article2').hasClass('on') ) {
        $('.article2').addClass('on')
    } else if ( scr === 0) {
        $('.article2').removeClass('on')
    }
    // article3
    if ( scr >= arti3Near && !$('.article3').hasClass('on') ) {
        $('.article3').addClass('on')
    } else if ( scr === 0) {
        $('.article3').removeClass('on')
    }
    // article4
    if ( scr >= arti4Near && !$('.article4').hasClass('on') ) {
        $('.article4').addClass('on')
    } else if ( scr === 0) {
        $('.article4').removeClass('on')
    }
    // article5
    if ( scr >= arti5Near && !$('.article5').hasClass('on') ) {
        $('.article5').addClass('on')
    } else if ( scr === 0) {
        $('.article5').removeClass('on')
    }

    if ( scr >= arti6Near && !$('.article6').hasClass('on') ) {
        $('.article6').addClass('on')
    } else if ( scr === 0) {
        $('.article6').removeClass('on')
    }

   
}) 

$('#navbar > span').on('click', function(){
    var num = $(this).index()
    switch(num) {
        case 0 : $('html').animate ({scrollTop:0}, 500); break;
        case 1 : $('html').animate ({scrollTop:arti2Near}, 500); break;
        case 2 : $('html').animate ({scrollTop:arti3Near}, 500); break;
        case 3 : $('html').animate ({scrollTop:arti4Near}, 500); break;
        case 4 : $('html').animate ({scrollTop:arti5Near}, 500); break;
        case 5 : $('html').animate ({scrollTop:arti6Near}, 500); break;
        case 6 : $('html').animate ({scrollTop:arti7Near}, 500); break;
        case 7 : $('html').animate ({scrollTop:arti8Near}, 500); 
    }
})


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



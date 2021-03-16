

$(window).on('scroll', function(){
    var scr = $(this).scrollTop()
    if (scr >= 30 && !$('#header').hasClass('on')) {
        $('#header').addClass('on')
        $('#header .topmenu').css({
            opacity:1
        }).animate({
            opacity:0
        },1000)
    } else if (scr < 30 && $('#header').hasClass('on')) {
        $('#header').removeClass('on')
        $('#header').removeClass('on')
        $('#header .topmenu').css({
            opacity:0
        }).animate({
            opacity:1
        },500)
    }
})


$('#nav .depth1 > li').hover(
    function(){
        if ($('html').hasClass('pc')) {
            $(this).addClass('on')
            $(this).find('.depth2').css({
                opacity:0
            }).animate({
                opacity:1
            },500)
        }
    },
    function(){
        if ($('html').hasClass('pc')) {
            $(this).removeClass('on')
            $(this).find('.depth2').animate({
                opacity:0
            },500)
        }
    }
)
$('#header .open').on('click',function(){
    $(this).toggleClass('on')
    $('#nav .depth1').slideToggle(500)
    $('#header').toggleClass('on')
})
$('#header #nav .depth1 > li').on('click',function(e){
    
    if ( $('html').hasClass('mobile') ) {
        e.preventDefault()
        // $(this).toggleClass('on').siblings().removeClass('on')
        $(this).find('.depth2').stop().slideToggle(500).css({display:'block', opacity:1})
        $(this).siblings().find('.depth2').stop().slideUp(500)
    }
})



//  ==============================================
var deviceSize = 850;    

function scrollOX(status) {
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollOX('hidden')
var sws = scrollOX('scroll')
var swd = swh - sws
if (swd>0) {
    deviceSize = deviceSize - swd
}

var ww;
function init(){
    ww = $(window).width()
    if (ww>deviceSize && !$('html').hasClass('pc') ) {
        $('html').addClass('pc').removeClass('mobile')
        $('#navbar').removeClass('on')
        $('html').scrollTop(0)
        // $('#nav .depth1 > li').find('.depth2').css({display:'none'})
        $('#nav .depth1 > li').removeClass('on')
        $('#nav .depth1 > li').find('.depth2').animate({
            opacity:0
        },0)
    } else if ( ww<=deviceSize && !$('html').hasClass('mobile') ) {
        $('html').addClass('mobile').removeClass('pc')
        $('#nav .depth1').slideUp(1)
        $('#header .open').removeClass('on')
        $('html').scrollTop(0)
        $('#nav .depth1 > li').find('.depth2').slideUp(1)
    }
}
init()

$(window).on('resize', function(){
    init()
})



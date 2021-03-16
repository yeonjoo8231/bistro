$('.title a').on('click', function(e){
    e.preventDefault() 
    var index = $(this).index()
    $(this).toggleClass('on').siblings().removeClass('on')
    $('.menu').eq(index).toggleClass('on').siblings().removeClass('on')
})
$('.abbox .title a').on('click',function(e){
    e.preventDefault()
    var url = this.href
    $('#content').remove()
    $('#container').load(url+' #content')
    $(this).addClass('on').siblings().removeClass('on')
})



// $('#header .nav .load').on('click', function(){
//     $('.comBox #content').remove()
//     $('.comBox #container').load('road.html #content')
//     $('.comBox .title a').eq(1).addClass('on').siblings().removeClass('on')
// }) 
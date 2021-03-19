// json불러오기
var reviewList = ''
$.ajax({
    type : 'GET',
    url : 'review.json',
    timeout : 3000,
    beforeSend : function(xhr){
        if (xhr.overrideMimeType){ 
            xhr.overrideMimeType('application/json')
        }
    },
    dataType : 'json',
    success : function(data) { 
        reviewList = data
        dataPrint()
    },
    error : function(xhr) {
        alert(xhr.status + '/' +xhr.errorText)
    }
})
function dataPrint() {
    var list = '';
    for ( var i in reviewList ) {
        list += `<li><div class="imgbox"><img src="${reviewList[i].Photo}" onerror="this.src='img/noimage.png'" alt=""></div>`
        list += `<div class="txtbox"><h3><i class="fas fa-quote-left"></i> ${reviewList[i].Title} <i class="fas fa-quote-right"></i></h3>`
        list += `<p class="iruma">${reviewList[i].Irum}님</p><p>${reviewList[i].Date}</p>`
        list += `<p>${reviewList[i].Review}</p></div><div class="btn"><button>삭제</button></div></li>`
    }
    $('.eventBox').append(`<ul class="list">${list}</ul>`)
    var eliruma = document.querySelector('.eventBox .list .iruma').textContent
    var eliru = eliruma.charAt(1)
    console.log(eliru)
    
}

//삭제 버튼 누르면 삭제
$('.eventBox').on('click', 'ul.list li button', function(e){
    e.preventDefault()
    var index = $(this).parents('li').index()
    reviewList.splice(index, 1)
    $('ul.list').remove()
    dataPrint()
})



//데이터 직접 등록
$('.eventBox').on('click', '.formBox button[type=submit]', function(e){
    e.preventDefault()
    if ( $('#title').val() ==='' && $('#review').val() ==='' ) {
        alert('후기를 작성해주세요 :)')
        return false
    }
    var last = {
        Title : $('#title').val(),
        Irum : $('#irum').val(),
        Date : $('#date').val(),
        Review : $('#review').val(),
        Photo : $('#photo').val()
    }
    reviewList.push(last)
    $('ul.list').remove()
    dataPrint()
})

//리뷰작성하기 버튼
$('.eventBox button').on('click',function(){
    $('.eventBox .formBox').stop().slideToggle(500).css({display:'block', opacity:1})
    
})


// var elh2 = document.querySelector('.rtxt h2').textContent
// console.log(elh2)

//추가로 하고싶은거
// 좋아요버튼 / 닫기 취소버튼 누르면 닫히는데 리뷰작성하기 정상적으로만들기

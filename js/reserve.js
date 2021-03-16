$('.peo p').on('click','.icon-arrows_plus', function(e){
    var $this = $(this);
    var target = $this.prev();
    var num = target.text();
    num++
    if ( num>6 ) { 
        alert ('6인 이상 예약 하실 수 없습니다.');
        return false
    }
    target.text(num);

})

// parseInt(문자를 숫자로 바꿔줌)
$('.peo p').on('click','.icon-arrows_minus', function(){
    var $this = $(this);
    var target = $this.next();
    var num = target.text();
    num --
    if (num < 0) {
        return false
    }
    target.text(num);

})

$('#datepicker').datepicker({
    dateFormat:"yy/mm/dd",
    dayNamesMin:["SUN","MON","TUE","WED","THU","FRI","SAT"],
    monthNames:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
    minDate: 0,
    onSelect: function(d){
           
        var arr=d.split("/");
        var year=arr[0];
        var month=arr[1];
        var date=arr[2];
        
        var ndate = new Date($("#datepicker").datepicker({dateFormat:"yy/mm/dd"}).val());
        var week = new Array('일', '월', '화', '수', '목', '금', '토');
        var day = week[ndate.getDay()];
        $(".date .input").text(year+'년 '+month+'월 '+date+'일 '+day+'요일 ');
        
    }
});

// var day = datePicker.getDayofMonth();
// var month = datePicker.getMonth();
// var year = datePicker.getYear();
// console.log(day)

// $('#datepicker').on('click','.ui-state-active', function(){
//     var date = $( '#datepicker' ).datepicker( {dateFormat: 'yyyy-mm-dd'} ).val();
//     console.log(date)
//     // $('.date label').remove()
//     // $('.date label').text()
// })



// $('#birth').datepicker({
//     dateFormat:'yy-mm-dd',
//     changeMonth:true,
//     changeYear:true,
//     yearRange:'1900:2021'
// })
$('.joinbox form').on('submit',function(){
    $('input').css({
        border:'1px solid #ddd'
    })
    // 아이디
    var idbox = $('#idbox').val()
    if ( idbox.length >= 3 && idbox.length < 6 ) {
        for ( var i=0; i<idbox.length; i++) {
            var ch = idbox.charAt(i)
            if ( !(ch>='0' && ch<='9') && !(ch>='a' && ch<='z') && !(ch>='A' && ch<='Z') ) {
                $('#idbox').css({
                    background:'#f87f77'
                }).focus().select()
                return false
            }
        }
    } else {
        alert('아이디는 3~5글자 범위입니다.')
        $('#idbox').css({
            background:'#f87f77'
        }).focus().select()
        return false
    }
    // 비밀번호
    var pwbox = $('#pwbox').val()
    var check1 = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    if ( !check1.test(pwbox) ) {
        alert('비밀번호 형식이 맞지 않습니다.')
        $('#pwbox').css({
            background:'#f87f77'
        }).focus().select()
        return false
    }   
    // 이름
    var irum = $('#irum').val()
    var check2 = /^[가-힣]+$/
    if ( irum.length >= 2 ) {
        if ( !check2.test(irum) ) {
            alert('이름 한글 두글자 이상입니다.')
            $('#irum').css({
                background:'#f87f77'
            }).focus().select()
            return false
        }
    } else {
        alert('이름 한글 두글자 이상입니다.')
            $('#irum').css({
                background:'#f87f77'
            }).focus().select()
            return false
    }
    // 전화번호
    var ph1 = $('#ph1').val()
    var ph2 = $('#ph2').val()
    var check3 = /[0-9]{3,4}/
    var check4 = /[0-9]{4}/
    if ( !check3.test(ph1) ) {
        alert('번호 형식이 맞지 않습니다.')
        $('#ph1').css({
            background:'#f87f77'
        }).focus().select()
        return false
    } else if ( !check4.test(ph2) ) {
        alert('번호 형식이 맞지 않습니다.')
        $('#ph2').css({
            background:'#f87f77'
        }).focus().select()
        return false
    }

    // 이메일
    var email = $('#email').val()
    var check5 = /^[a-zA-Z0-9]+$/ 
    if ( !check5.test(email) ) {
        alert('이메일 형식이 맞지 않습니다.')
        $('#email').css({
            background:'#f87f77'
        }).focus().select()
        return false
    }
    var domain = $('#domain').val()
    var check6 = /^[a-zA-Z0-9]+[\.][a-z]+([\.][a-z]+)*$/
    if ( domain !== '' ) {
        if ( !check6.test(domain) ) {
            alert('이메일 형식이 맞지 않습니다.')
             $('#domain').css({
                background:'#f87f77'
            }).focus().select()
            return false
        }
    } else {
        alert('이메일 도메인을 선택해주세요.')
        $('#domain').css({
            background:'#f87f77'
        }).focus().select()
        return false
    }
    
    // 성별
    var gender = $('input[name=gender]:checked').length
    if ( gender === 0 ) {
        alert('성별을 선택해주세요.')
        $('input[name=gender]').focus()
        return false
    }
    return false
})

// 비밀번호 안내문구
$('#pwbox').on('focus', function(){
    $(this).after('<span>비밀번호 첫글자는 영문자이고, 숫자, 특수문자중 2가지 이상 조합해야 합니다.</span>')
    $(this).next().css({
        color:'#f87f77', paddingLeft:'10px'
    })
})
$('#pwbox').on('blur', function(){
    $(this).next().remove()
})

// 이메일 도메인 선택
$('#domainlist').on('change', function(){
    var domainlist = $('#domainlist option:selected').val()
    if ( domainlist != 'noselect' && domainlist != 'self' ) {
        $('#domain').val(domainlist)
    } else if ( domainlist === 'noselect') {
        $('#domain').attr({
            disabled:true
        }).val('')
    } else {
        $('#domain').attr({
            disabled:true
        }).val('')
    }
})

// 관심분야 전체선택
$('#all').on('click',function(){
    var bool = $(this).prop('checked')
    $('input[name^=co]').prop('checked', bool)
})

// 메모 남은글자수
$('#memo').on('keydown', function(){
    var memo = $(this).val().length
    var max = 20
    var remain = max - memo
    $('.remain').text(remain)
})
// 생년월일 간에 datepicker연결하기
$('#birth').datepicker({
    dateFormat:'yy-mm-dd',
    changeMonth:true,
    changeYear:true,
    yearRange:'1900:2021'
})
let serverURL = 'https://script.google.com/macros/s/AKfycbwU0TLRdqNl9P_GwEfmzXog6JYw_uIvg_NeBKVPXrjdsCyCnAbieudowIXaeuR9xCMsVA/exec'
$(document).ready(function () {
    initBtnFunc();
});

function initBtnFunc(){
    $('.btn-send').click(function(event){
        sendToServer();
    });
}

function sendToServer(){
    let parameter = {};
    parameter.feeling = $('input[name=feeling]:checked').val();
    parameter.writing = $('textarea[name=writing]').val();
    parameter.method = "write1";

    console.log(parameter);

    $('.cover').css('display','grid');
    $.post(serverURL, parameter, function(data){
        console.log(data);
        if(data.result = 'sus'){
            alert('送出成功');
            $('.cover').css('display','none');
        }else{
            $('.cover').css('display','none');
            alert('送出失敗，請檢查後再試試看');
        }
    }).fail(function(data){
        alert('送出失敗');
        console.log(data);
    });
}
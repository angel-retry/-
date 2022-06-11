let serverURL = 'https://script.google.com/macros/s/AKfycbwU0TLRdqNl9P_GwEfmzXog6JYw_uIvg_NeBKVPXrjdsCyCnAbieudowIXaeuR9xCMsVA/exec'
$(document).ready(function () {
    readFromServer();
});


function readFromServer() {
    let parameter = {};
    parameter.method = 'read1';
    $.post(serverURL, parameter, function(data){
        setPost(data);
    }).fail(function(data) {
        alert('error');
    });
}

function setPost(sData){
    let node = $('#template01').html();
    for(let i=0;i<sData.length;i++){
        let content = node.replace('FEELING_HERE',sData[i][0]);
        content = content.replace('TEXT_HERE',sData[i][1]);
        $('.col').append(content);
    }
    
}
$(document).ready(function(){
    let addText = " click added some text!"
    $('#clickAddText').click(function(){
        $('#clickAddText').text($('#clickAddText').text() + addText);
    })
})

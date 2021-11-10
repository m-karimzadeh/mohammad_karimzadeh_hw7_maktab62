let progressMaxValue = parseInt($('#progressBar').attr('max'))
    ,progressMinValue = 0;

$('#progressPlus').click(function(){
    let progressValue = parseInt($('#progressBar').val());

    if(progressValue < progressMaxValue){
        $('#progressBar').val(progressValue + (progressMaxValue / 10));
    }
})
    
$('#progressNegative').click(function(){
    let progressValue = parseInt($('#progressBar').val());

    if(progressValue > progressMinValue){
        $('#progressBar').val(progressValue - (progressMaxValue / 10));
    }
})
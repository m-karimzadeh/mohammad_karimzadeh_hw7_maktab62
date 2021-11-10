$('.hideInfoTitle').click(function(){
    if(!$(this).hasClass('active')){
        $('.hideInfoTitle').removeClass('active');
        $('.hideInfoBody').slideUp('fast');

        $(this).addClass('active');
        $(this).next('.hideInfoBody').slideDown('fast');
    }
})
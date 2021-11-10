$('header > section').hover(function() {
    $(this).find('.submenuBox').slideDown('fase');

}).mouseleave(function(){
    $(this).find('.submenuBox').slideUp('fase');
});
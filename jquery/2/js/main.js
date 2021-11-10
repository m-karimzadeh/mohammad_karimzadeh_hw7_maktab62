
$('#blueBox').mousemove(function(){
    $(this).css('background', 'red')

}).mouseout(function(){
    $(this).css('background', 'blue')
})

$('#redBox').mousemove(function(){
    $(this).css('background', 'blue')

}).mouseout(function(){
    $(this).css('background', 'red')
})
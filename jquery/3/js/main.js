$('#parentCopy').click(function() {
    let mainText = $('#mainNodeText').text()
        ,parentText = $('#parentNodeText').text() + mainText
        ,childText = $('#childNodeText').text() + mainText;

    $('#mainNodeText').text(parentText + childText)
})

$('#childCopy').click(function() {
    let mainText = $('#mainNodeText').text()
        ,childText = $('#childNodeText').text() + mainText;

    $('#mainNodeText').text(childText)
})
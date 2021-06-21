$(function() {

    $(".radioBox__label").change(function() {
        if($(this).val() === あり) {
            $(this).text(aaa);
        }else {
            $(this).text(bbb);
        }
    })

})
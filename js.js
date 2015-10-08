$(document).ready(function() {

    var squares = $(".square");



    $('.square').on("mouseover", function() {
        var highlightIndex = $('.square').index(this);
        $('.square').each(
            function(i) {
                if (i <= highlightIndex) {
                    $(this).addClass("yellow");
                } else {
                    $(this).removeClass("yellow");
                }
            });
    });


    $('.square').on("mouseout", function() {
        var highlightIndex = $('.square').index(this);
        $('.square').each(
            function(i) {
                $(this).removeClass("yellow");
            });
    });







});
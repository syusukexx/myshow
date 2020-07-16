$().ready(function () {

    $(".one").click(function () {
        $(".info_box div").attr("class", "one");
        $(this).toggleClass("two");

        var a = $(this).attr("id");
        a = a.split("_")[1];

        $(".right").children().css("display", "none");
        $(".right_" + a).css("display","block");
    })

    $("#left_3").siblings().click(function(){
        $(".sp").css("display","none");
    })

    $("#left_3").click(function(){
        $(".sp").fadeTo("slow", 1);
    })
})
$(function(){
    var idx =0;
    setInterval(function(){
        if(idx < 4){
            idx++
        }
        else{
            idx = 0;
        }


        console.log(idx);

        $("#content2 img").eq(idx).fadeIn();
        $("#content2 img").eq(idx-1).fadeOut();
    },2000);

    $("#tap a").click(function(e) {
        e.preventDefault();

        var btnName = $(this).attr("name");

        console.log(btnName);

        $(this).siblings("a").removeClass("on");
        $(this).addClass("on");


        $("#"+btnName).siblings("div").hide();
        $("#"+btnName).css("display","flex");

    });

});
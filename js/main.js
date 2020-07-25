$(function () {
    "use strict";


    /*start method to add slider */

    var windowheight=$(window).height(),
        upperbarheight=$('.upper-bar').innerHeight(),
        navbarheigtht=$('.navbar').innerHeight();

    $('.slider,.carousel-item').height( windowheight - (upperbarheight+navbarheigtht) );

    /*start method to add slider */


    /*start function to add active */

    $(".featured-work ul li").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");

        if( $(this).data("class") == "all" ){
            $(".shuffle-images .col-md").css("opacity",1);
        }
        else {
            $(".shuffle-images .col-md").css("opacity",".08");
            $($(this).data("class")).parent().css("opacity",1);
        }

    })

    
    /*end function to add active */


});


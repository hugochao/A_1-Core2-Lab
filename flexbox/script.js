$(document).ready(function() {

    // alert("[whatever-little-message-you-want]");
    
    $(".valentines").hover(function(){
    $("#img1").css("opacity", "1");
    });
    $(".valentines").mouseout(function(){
    $("#img1").css("opacity", "0.5");
    });
    
    $(".valentines").hover(function(){
    $("#img2").css("opacity", "1");
    });
    $(".valentines").mouseout(function(){
    $("#img2").css("opacity", "0.5");
    });
    
    })
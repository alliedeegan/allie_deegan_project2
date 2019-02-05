$(document).ready(function() {

    $(".responsiveNav").hide();
    $(".responsiveNavIcon").on("click" , function() {
        $(".responsiveNav").show();
    });

    $("#closeNav").on("click", function (){
        $(".responsiveNav").hide();
    });

});



  

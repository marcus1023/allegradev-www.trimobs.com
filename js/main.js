$( document ).ready(function() {
    console.log( "ready!" );
//



$( "#test" ).click(function() {
  $('.side-menu').toggleClass( "shower");
  $('.main-header-container').toggleClass("show-me-200");
  $('.burger-li').toggleClass("orange-background");
  $('.scroller-nav').toggleClass("hide-me");
});


$("#test").hover(function(){
    $('.burger-li').css("background-color", "#e37401");
    }, function(){
    $('.burger-li').css("background-color", "white");
});

});

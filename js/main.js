$( document ).ready(function() {
    console.log( "ready!" );
//



$( "#test" ).click(function() {
  $('.side-menu').toggleClass( "shower");
  $('.info-section-left').toggleClass("show-me");
  $('.main-header-container').toggleClass("show-me-200");
  $('.info-section-right').toggleClass("dec-marg");
  $('.burger-li').toggleClass("orange-background");
  $('.scroller-nav').toggleClass("hide-me");
});


$(".main-header-container").hover(function(){
    $('.burger-li').css("background-color", "#e37401");
    }, function(){
    $('.burger-li').css("background-color", "white");
});

});

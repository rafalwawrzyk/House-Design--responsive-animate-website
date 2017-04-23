$(function(){
    

var $waypoint = $('#in-wrapper');

$waypoint.waypoint(function(){
    $('#in-wrapper > .one-of-third').addClass('anime');
    $('.about').addClass('animated-header')
    
},{offset: '90%'})

var $article = $('article');
var $aside = $('aside');

$waypoint.waypoint(function(){
    $article.addClass('article-animate');
    $('.facility').addClass('animated-header');
    
},{offset:'0%'})

$waypoint.waypoint(function(){
    $aside.addClass('aside-animate');
    
},{offset:'0%'})

$('.facility').waypoint(function(){
    $('.pricing').addClass('animated-header');
    $('.houses-img').addClass('animated-house-img');
    
},{offset:'0%'})






////overlay

//var overlay = document.getElementById('spinner-page')
//    
//window.addEventListener('load', function(){
//    overlay.style.display = 'none';
//})


var $overlay = $('#spinner-page');

$(window).on('load',function(){
    $overlay.hide();
});

    
    
    ////
$(function() {
    $(".rslides").responsiveSlides();
  });


$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
//nav ul, nav:active ul

    
    $hamburger = $('#menu-icons i');
    $dropMenu = $('nav ul, nav:active ul');
    
    $hamburger.on('click', function(){
        $dropMenu.toggleClass('block');
    })
    
   
    
    
    
    
    
    
    
    
    
    
    
})
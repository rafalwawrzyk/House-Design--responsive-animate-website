$(function(){
    

var $waypoint = $('#in-wrapper');

$waypoint.waypoint(function(){
    $('#in-wrapper > .one-of-third').addClass('anime');
    
},{offset: '50%'})
    
    
    
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

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 130) {
        $('.sticky').addClass('stickyAdd');
    } 
    else {
        $('.sticky').removeClass('stickyAdd');
    }
})

// fix aside menu on scroll
//store the element
var $cache = $('.stickyAside');

//store the initial position of the element
//var vTop = $cache.offset().top - parseFloat($cache.css('margin-top').replace(/auto/, 0));
$(window).on('scroll', function(){
    var scroll = $(this).scrollTop();

    // whether that's below the form
    if(scroll >= 450) {
      // if so, ad the fixed class
      $cache.addClass('stuck');
    }
    else {
      // otherwise remove it
      $cache.removeClass('stuck');
    }
  });

$(document).scroll(function() {
    checkOffset();
});
function checkOffset() {
    if($('.stickyAside').offset().top + $('.stickyAside').height() 
                                           >= $('footer').offset().top - 10)
        $('.stickyAside').css('position', 'absolute');
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
        $('.stickyAside').css('position', 'fixed'); // restore when you scroll up
}
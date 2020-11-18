
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 130) {
        $('.sticky').addClass('stickyAdd');
    } 
    else {
        $('.sticky').removeClass('stickyAdd');
    }
})


$(document).ready(function() {
    $('.object-container').addClass('animation');
    
    $('.trigger').click(function() {
        $('.object-container')
        .removeClass('animation')
        .delay(10)
        .queue(function(next){
            $(this).addClass('animation');
            next();
        });
        return false;
    });
});
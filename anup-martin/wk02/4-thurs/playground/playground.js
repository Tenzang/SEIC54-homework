
$(document).ready(function (){
    $('#name').on('keyup', function() {
        const name = $(this).val();
        $('header h1').text('welcome ' + name);
    }).on('focus', function () {
        $('header').addClass('active');
    }).on('blur', function () {
        $('header').removeClass('active');
    });

    $('#toggle').on('click', function() {
        $('img').fadeToggle(500);
    });
})

            

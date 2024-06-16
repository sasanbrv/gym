
$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 200){
        $('.nav-menu').addClass('custom-navbar')
    }else{
        $('.nav-menu').removeClass('custom-navbar')
    }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 700){
        $('.award-text').addClass('fromRight')
        $('.award-img').addClass('fromLeft')
    }else{
        $('.award-text').removeClass('fromRight')
        $('.award-img').removeClass('fromLeft')
    }
})


$('.gallery-list-item').click(function(){
    let value = $(this).attr('data-filter');
    $(this).addClass('active').siblings().removeClass('active')
    if(value === 'all'){
        $('.filter').show(300)
    }else{
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);

    }
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 4600){
        $('.card-1').addClass('movefromRight')
        $('.card-3').addClass('movefromLeft')
        $('.card-2').addClass('movefrombottom')
    }else{
        $('.card-1').removeClass('movefromRight')
        $('.card-3').removeClass('movefromLeft')
        $('.card-2').removeClass('movefrombottom')
    }
})

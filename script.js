$('.search-submit').on('click', function(e){
    if(window.innerWidth <= 720){
        e.preventDefault()
    }
    $('.search-input').toggleClass('active')
})

$('.nav-menu .toggle, .menu-section .menu li.close').on('click', function(e){
    $('.nav-menu .menu').toggleClass('active')
})

$('.mega-menu-box ul.menu-menu > li').on('mouseover', function(){
    if(window.innerWidth > 720){
    $('.menucontent').css({display: 'none'})
    $(this).find('.menucontent').css({display: 'inline-block'})
    }
})

$('li.mega-menu-item .menucontent ul.items > li a').on('click', function(e){
    if(window.innerWidth <= 720){
    e.preventDefault()
    $(this).parent().toggleClass('active')
    console.log(this)

    }
})

$('li.mega-menu-item > a').on('click', function(e){
    if(window.innerWidth <= 720){
    e.preventDefault()
    $(this).parent().toggleClass('active')
    console.log(this)
    }
})


// added from desktop
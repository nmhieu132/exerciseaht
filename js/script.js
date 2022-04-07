$(document).ready(function () {
    $('.responsive-bars').click(function (e) { 
        e.preventDefault();
        $('.header-menu__mainmenu__list').addClass('active');
        $('.cover').addClass('active')
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        
            $('.header-menu__mainmenu__list').removeClass('active');
            $('.cover').removeClass('active');
        
    });
});
    
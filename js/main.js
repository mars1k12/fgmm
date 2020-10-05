

//открытие модального окна входа
$('.login-link').on('click', function () {
    $('.login-block').addClass('active');
    $('.reg-block').removeClass('active');
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});


//открытие модального окна регистрации
$('.reg-link').on('click', function () {
    $('.login-block').removeClass('active');
    $('.reg-block').addClass('active')
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});


//открытие модального окна входа при регистрации
$('.login-link2').on('click', function () {
    $('.reg-block').removeClass('active');
    $('.login-block').addClass('active');    
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});


//открытие модального окна депозита
$('.deposit-btn').on('click', function () {
    $('.deposit-block').addClass('active'); 
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});


//открытие модального окна скачивания файла
$('.download-btn ').on('click', function () {
    $('.download-block').addClass('active'); 
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});


//открытие модального окна изменения почты
$('.change-email').on('click', function () {
    $('.change-email-block').addClass('active');  
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});


//открытие модального окна изменения пароля
$('.change-pass').on('click', function () {
    $('.change-pass-block').addClass('active');  
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});




//Закрытие модальных окон входа, регистрации, покупки
$('.bg-overlay').on('click', function () {
    $('.form-block').removeClass('active');  
    $('.bg-overlay').removeClass('active');  
    $('body').removeClass('overflow-hidden');   
});


//Закрытие модальных окон входа, регистрации, покупки
$('.close-form').on('click', function () {
    $('.form-block').removeClass('active');  
    $('.bg-overlay').removeClass('active');  
    $('body').removeClass('overflow-hidden');      
});




//Закрытие всплывающего окна об успешном изменении пароля или почты
$('.close-success-change').on('click', function () {
    $('.success-change').fadeOut();
});









//parallax
(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".parallax1");
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector(".parallax2");
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.03}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.04}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.07}%`;
        let x = `${_depth1}, ${_depth2}, ${_depth3}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();



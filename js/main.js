

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







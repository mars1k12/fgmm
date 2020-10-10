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
    $('.form-block').hide(); 
    $('.bg-overlay').removeClass('active');  
    $('body').removeClass('overflow-hidden');      
});




//Закрытие всплывающего окна об успешном изменении пароля или почты
$('.close-success-change').on('click', function () {
    $('.success-change').fadeOut();
});






//валидация регистрации
$(document).ready(function () {
    $("#regform").validate({
        rules: {
            "login": {
                required: true,
            },
            "email": {
                required: true,
                email: true
            },
            "password": {
                required: true
            },
            "password2": {                
                equalTo : "#password"
            },
            "agree-chk": {
                required: true,
            },
        },
        messages: {
            "login": {
                required: "Введите логин"
            },
            "email": {
                required: "Введите имя",
                email: "Неверный формат почты"
            },
            "password": {
                required: "Введите пароль"
            },
            "password2": {
                required: "Введите пароль"
            },
            "agree-chk": {
                required: "Нет согласия"
            }
        }
    });
});



//валидация входа
$(document).ready(function () {
    $("#loginform").validate({
        rules: {
            "login": {
                required: true,
            },
            "password": {
                required: true
            },

        },
        messages: {
            "login": {
                required: "Введите логин"
            },
            "password": {
                required: "Введите пароль"
            },
        }
    });
});



//валидация депозита
$(document).ready(function () {
    $("#depositform").validate({
        rules: {
            "sum": {
                required: true,
            },
        },
        messages: {
            "sum": {
                required: "Введите сумму",
                min: "Некорректная сумма",
                remote: "Некорректная сумма"
            },
        }
    });
});



//валидация смены почты
$(document).ready(function () {
    $("#changemailform").validate({
        rules: {
            "email1": {
                required: true,
                email: true
            },
            "email2": {
                required: true,
                email: true
            },
            "email3": {
                email: true
            },
        },
        messages: {
            "email1": {
                required: "Введите почту",
                email: "Неверный формат почты"
            },
            "email2": {
                required: "Введите почту",
                email: "Неверный формат почты"
            },
            "email3": {
                required: "Введите имя",
                email: "Неверный формат почты"
            },
        }
    });
});




//валидация кода под-ния смены почты
$(document).ready(function () {
    $("#changemailform2").validate({
        rules: {
            "pass-code": {
                required: true,
            },
        },
        messages: {
            "pass-code": {
                required: "Введите код подтвержения",
            },
        }
    });
});


//валидация смены пароля
$(document).ready(function () {
    $("#changemailform").validate({
        rules: {
            "password1": {
                required: true,
            },
            "password2": {
                required: true,
            },
            "password3": {

            },
        },
        messages: {
            "password1": {
                required: "Введите почту",
            },
            "password2": {
                required: "Введите почту",
            },
            "password3": {

            },
        }
    });
});





//валидация смены пароля2
$(document).ready(function () {
    $("#changpassform2").validate({
        rules: {
            "pass-code": {
                required: true,
            },
        },
        messages: {
            "pass-code": {
                required: "Введите код подтвержения",
            },
        }
    });
});



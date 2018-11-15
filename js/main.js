;(function() {
    "use strict";
    
    var login = prompt('Кто пришел??(Login)', '???');
    var password;
    var showBlack = document.querySelector('.ba-show');
    if(login === 'Админ'){
        password = prompt('Пароль??', '');
        if(password === 'Черный Властелин') {
            alert('Добро пожаловать МОЙ ГОСПОДИН!');
            showBlack.style.display = 'block';
        } else {
            alert('Пароль не верный');
        }

    } else {
        alert('Я Вас не знаю!');

    } 
})();
;
(function () {
    "use strict";
    var startBtn = document.querySelector('.ba-lets-start');
    startBtn.addEventListener('click', showForm);
    var audio = document.getElementById('music');
    
    function showForm() {
        var login = prompt('Кто пришел??(Login)', '???');
        var password;
        var showBlack = document.querySelector('.ba-show');

        if (login === 'Админ') {
            password = prompt('Пароль??', '');

            while (password !== 'Черный Властелин') {
                if(password !== null){
                    password = prompt('Пароль не верный!Пробуй еще...', '');
                }
            }
            if (password === 'Черный Властелин') {
                alert('Добро пожаловать МОЙ ГОСПОДИН!');
                showBlack.style.display = 'block';
                startBtn.style.display = 'none';
                audio.play();

            } else if(password === null) {
                alert('Вход Отменен');
            }
        } else if (login === null) {
            alert('Вход Отменен');

        } else {
            alert('Я Вас не знаю!');
        }

    }

})();
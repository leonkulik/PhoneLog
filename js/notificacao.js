/*globals navigator, document*/

function notificaUser(text) {
    'use strict';
    navigator.notification.beep(3);
    navigator.notification.vibrate(5000);
    navigator.notification.alert(
        text,
        false,
        'Título da Janela',
        'Vai!!!'
    );
}

function sucesso() {
    'use strict';
    notificaUser('Tô pronto!!');
}

document.addEventListener('deviceready', sucesso, false);
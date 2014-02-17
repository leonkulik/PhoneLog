/*globals navigator, document*/

function notificaConexao() {
    'use strict';
    navigator.notification.vibrate(5000);
    var qualidade = navigator.connection.type,
        elemento = document.getElementById('tipoconn');
    
    elemento.innerHTML = 'Tipo de conexão: ' + qualidade;
    
}

document.addEventListener('deviceready', notificaConexao, false);
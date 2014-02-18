/*globals document, alert, device*/

function getInfo() {
    'use strict';
    var elemento = document.getElementById('propriedades');
    elemento.innerHTML = 'Dispositivo: ' + device.name + '<br>' +
        'Versão do Cordova: ' + device.cordova + '<br>' +
        'Plataforma: ' + device.platform + '<br>' +
        'Versão do Dispositivo: ' + device.version + '<br>' +
        'Modelo do Dispositivo: ' + device.model + '<br>' +
        'UUID: ' + device.uuid;
}

function erro() {
    'use strict';
    alert('Erro na Captura');
}

document.addEventListener('deviceready', getInfo, erro);
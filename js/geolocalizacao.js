/*globals document, navigator, alert */

function sucesso(position) {
    'use strict';
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                            'Longitude: ' + position.coords.longitude + '<br />' +
                            'Altitude: ' + position.coords.altitude + '<br />' +
                            'Precisão: ' + position.coords.accuracy + '<br />' +
                            'Precisão Altitude: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Direção: ' + position.coords.heading + '<br />' +
                            'Velocidade: ' + position.coords.speed + '<br />' +
                            'Horário: ' + position.timestamp + '<br />';
}

function erro() {
    'use strict';
    alert('Erro');
}

function onDeviceReady() {
    'use strict';
    navigator.geolocation.getCurrentPosition(sucesso, erro);
}

document.addEventListener('deviceready', onDeviceReady, false);
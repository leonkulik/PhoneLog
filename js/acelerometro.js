/*globals alert, document, navigator*/

function onError() {
    'use strict';
    alert('Erro!');
}

function onSuccess(acceleration) {
    'use strict';
    var mostradados = document.getElementById('mostradados');
    mostradados =   'Aceleração X: ' + acceleration.x + '<br>' +
                    'Aceleração Y: ' + acceleration.y + '<br>' +
                    'Aceleração Z: ' + acceleration.z + '<br>' +
                    'Horário atual: ' + acceleration.timestamp;
}

function onDeviceReady() {
    'use strict';
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}

document.addEventListener("deviceready", onDeviceReady, false);
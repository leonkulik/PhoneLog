/*globals alert, document, navigator*/

function onError() {
    'use strict';
    alert('Erro!');
}

function onSuccess(acceleration) {
    'use strict';
    alert('Aceleração X: ' + acceleration.x + '\n' +
              'Aceleração Y: ' + acceleration.y + '\n' +
              'Aceleração Z: ' + acceleration.z + '\n' +
              'Horário atual: ' + acceleration.timestamp + '\n');
}

function onDeviceReady() {
    'use strict';
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}

document.addEventListener("deviceready", onDeviceReady, false);
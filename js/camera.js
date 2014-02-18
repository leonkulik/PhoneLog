/*globals navigator, alert, document */

var destinationType;

function onDeviceReady() {
    'use strict';
    destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData) {
    'use strict';
    var smallImage = document.getElementById('imgMiniatura');
    smallImage.style.display = 'block';
    smallImage.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    'use strict';
    alert('Falha: ' + message);
}

function tirarFoto() {
    'use strict';
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
}

document.addEventListener("deviceready", onDeviceReady, false);
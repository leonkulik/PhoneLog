/*globals document, navigator, alert*/

var bussolaID = null;

function pararBussola() {
    'use strict';
    if (bussolaID) {
        navigator.compass.clearWatch(bussolaID);
        bussolaID = null;
    }
}

function onSuccess(heading) {
    'use strict';
    var element = document.getElementById('direcao2');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
}

function onError(compassError) {
    'use strict';
    alert('Erro na bússola: ' + compassError.code);
}

function iniciarBussola() {
    'use strict';
    var options = { frequency: 3000 };
    bussolaID = navigator.compass.watchHeading(onSuccess, onError, options);
}

function mostraBussola(heading) {
    'use strict';
    var elemento = document.getElementById('direcao1');
    elemento.innerHTML = 'Heading: ' + heading.magneticHeading;
}

function onDeviceReady() {
    'use strict';
    navigator.compass.getCurrentHeading(mostraBussola, onError);
}


document.addEventListener("deviceready", onDeviceReady, false);
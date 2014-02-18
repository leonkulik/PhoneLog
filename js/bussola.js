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
    var element = document.getElementById('direcao');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
}

function onError(compassError) {
    'use strict';
    alert('Compass error: ' + compassError.code);
}

function iniciarBussola() {
    'use strict';
    var options = { frequency: 3000 };
    bussolaID = navigator.compass.watchHeading(onSuccess, onError, options);
}

function onDeviceReady() {
    'use strict';
    iniciarBussola();
}


document.addEventListener("deviceready", onDeviceReady, false);
/*globals navigator, document, alert*/
var bussolaID = null;
function iniciarBussola() {
    'use strict';
    bussolaID = navigator.compass.watchHeading(sucesso, erro, {frequency:3000});   
}
function sucesso(heading) {
    var elemento = document.getElementById('direcao2');
    elemento.innerHTML = 'Heading: ' + heading.magneticHeading;
}
function pararBussola() {
    'use strict';
    if (bussolaID) {
        navigator.compass.clearWatch(bussolaID);
        bussolaID = null;
    }   
}
function erro(compassError) {
    'use strict';
    alert('Erro: ' + compassError.code);
}
function mostraBussola(heading) {
    'use strict';
    var item = document.getElementById('direcao1');
    item.innerHTML = 'Heading: ' + heading.magneticHeading;   
}
function onDeviceReady() {
    'use strict';
    navigator.compass.getCurrentHeading(mostraBussola, erro);
}

document.addEventListener('deviceready', onDeviceReady, false);
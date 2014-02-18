/*globals navigator, alert, document */

var img_destino;
    

    
function deviceOk() {
    'use strict';
    img_destino = navigator.camera.DestinationType;
}

function resultSucesso(imagem_data) {
    'use strict';
    var mostra_img = document.getElementById("imagem");
    mostra_img.src = "data:image/jpeg;base64," + imagem_data;
}

function resultErro(msg) {
    'use strict';
    alert('Erro: ' + msg);
}

function tiraFoto() {
    'use strict';
    navigator.camera.getPicture(resultSucesso, resultErro, { quality: 50, destinationType: img_destino.DATA_URL });
}

document.addEventListener("deviceready", deviceOk, false);
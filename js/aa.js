/*globals navigator, document, alert, google*/


function mostraMapa(position) {
    'use strict';
    var lat = position.coords.latitude,
        lon = position.coords.longitude,
        mapini = new google.maps.LatLng(lat, lon),
        opcoes = {
            zoom: 8,
            center: mapini,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(document.getElementById('mapa'), opcoes);
    
}

function erro() {
    'use strict';
    alert('Erro');
}
    
function sucesso() {
    'use strict';
    navigator.geolocation.getCurrentPosition(mostraMapa, erro);
    
}

document.addEventListener('deviceready', sucesso, false);
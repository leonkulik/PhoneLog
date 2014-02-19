/*globals document, navigator, google, alert */

function sucesso(position) {
    'use strict';
    var lat = position.coords.latitude,
        lon = position.coords.longitude,
        myLatlng = new google.maps.LatLng(lat, lon),
        myOptions = {
            zoom: 8,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(document.getElementById("mapa"), myOptions);
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

  

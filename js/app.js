/*globals $, navigator, window, document, alert, position, watch_id, device, connection */
$(function () {
    'use strict';

    var func_interval, conn, position, watch_id;
    
    function notifyUser(text) {
    /* Display an annoying Alert :) */
        navigator.notification.alert(text, false, '¡Lovely pop-up!', 'Done');
    }
    
    function onDeviceReady() {
    /* Annoy user that's all set */
        position = navigator.geolocation.getCurrentPosition;
        notifyUser('Good to go!');
    }
    
    function getPhoneInfo() {
        var element = document.getElementById('devProp');
        element.innerHTML = 'Device Name: ' + device.name + '<br>' +
            'Device Cordova: '  + device.cordova + '<br>' +
            'Device Platform: ' + device.platform + '<br>' +
            'Device Version: '  + device.version;
    }
    
    function getConnectionType() {
        var quality = navigator.connection.type;
        notifyUser(quality);
    }
    
    function getPosition(position) {
    /* GPS Track */
        watch_id = navigator.geolocation.watchPosition(
            alert(position.timestamp + position.coords.latitude + ' : ' + position.coords.longitude),
            alert("Erro"),
            {frequency: 3000, enableHighAccuracy: true }
        );
    }
    
    function writeStuff(position) {
    /* Show stuff on screen */
        var quality;
        quality = navigator.connection.type;
        $("#log").append('<br> Quality: ' + quality);
        
        watch_id = navigator.geolocation.getCurrentPosition(
            $("#log").append(position.timestamp +
                'Latitude: ' + position.coords.latitude +
                'Longitude: ' + position.coords.longitude +
                'Accuracy: ' + position.coords.accuracy),
            alert("Erro"),
            { enableHighAccuracy: true }
        );
    }
    
    function startTrackStuff() {
    /* Repeat the writing function every 5 sec */
        getPhoneInfo();
        func_interval = window.setInterval(writeStuff, 2000);
        $("#msg").html("Tracking...");
    }
    
    function stopTrackStuff() {
    /* Stops the writing function */
        window.clearInterval(func_interval);
        $("#msg").html("Stooooped !!");
    }
    
    function storageCleaner() {
    // Clean the Local Storage
        window.localStorage.clear();
        $("#log").html("");
        window.clearInterval(func_interval);
    }
    
    function checkConnection() {
        getConnectionType();
    }
    
    function checkGeolocation() {
        getPosition();
    }
        
    /* Listeners */
    document.addEventListener("deviceready", onDeviceReady, false);
    $("#startTracking").click(startTrackStuff);
    $("#stopTracking").click(stopTrackStuff);
    $("#checkConnection").click(checkConnection);
    $("#checkGeolocation").click(checkGeolocation);
    $("#cleanLog").click(storageCleaner);
    
});
/*globals $, navigator, window, document, device, connection */
$(function () {
    'use strict';

    var func_interval, conn, pos;
    
    function notifyUser(text) {
    /* Display an annoying Alert :) */
        navigator.notification.alert(text, false, '¡ Lovely pop-up !', 'Done');
    }
    
    function onDeviceReady() {
    /* Annoy user that all's set */
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
        var quality, Connection, states = {};
        quality = navigator.connection.type;
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
        conn = states[quality];
    }
    
    function getPosition() {
    /* Track GPS */
        pos = navigator.geolocation.getCurrentPosition;
    }
    
    function writeStuff() {
    /* Show stuff on screen */
        getConnectionType();
        $("#log").append('<br> Quality: ' + conn);
        getPosition();
        $("#log").append(pos.timestamp +
            'Latitude: ' + pos.coords.latitude +
            'Longitude: ' + pos.coords.longitude +
            'Accuracy: ' + pos.coords.accuracy);
    }
    
    function startTrackStuff() {
    /* Repeat the writing function every 5 sec */
        func_interval = window.setInterval(writeStuff, 2000);
        getPhoneInfo();
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
        var conn = null;
        getConnectionType();
        notifyUser(conn);
    }
    
    function checkGeolocation() {
        var pos = null;
        getPosition();
        notifyUser(pos);
    }
        
    /* Listeners */
    document.addEventListener("deviceready", onDeviceReady, false);
    $("#startTracking").click(startTrackStuff);
    $("#stopTracking").click(stopTrackStuff);
    $("#checkConnection").click(checkConnection);
    $("#checkGeolocation").click(checkGeolocation);
    $("#cleanLog").click(storageCleaner);
    
});
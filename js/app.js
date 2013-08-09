/*globals $, navigator, window, document, device, connection */
$(function () {
    'use strict';

    var gogogo;
    
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
    
    function getConnectionType(conn) {
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
    
    function getPosition(pos) {
    /* Track GPS */
        pos = navigator.geolocation.getCurrentPosition;
//        window.localStorage.setItem(position.timestamp ,  
//            'Latitude: ' + position.coords.latitude + 
//            'Longitude: ' + position.coords.longitude +
//            'Accuracy: ' + position.coords.accuracy +
//            'Quality: ' + states[quality]);
    }
    
    function writeStuff() {
    /* Write all stuff on Local Storage and screen */
        var conn, pos;
        getConnectionType(conn);
        $("#log").append('<br> Quality: ' + conn);
        getPosition(pos);
        $("#log").append(pos.timestamp +
            'Latitude: ' + pos.coords.latitude +
            'Longitude: ' + pos.coords.longitude +
            'Accuracy: ' + pos.coords.accuracy);
    }
    
    function startTrackStuff() {
    /* Repeat the writing function every 5 sec */
        gogogo = window.setInterval(writeStuff, 2000);
        getPhoneInfo();
        $("#msg").html("Tracking...");
    }
    
    function stopTrackStuff() {
    /* Stops the writing function */
        window.clearInterval(gogogo);
        $("#msg").html("Stooooped !!");
    }
    
    function storageCleaner() {
    // Clean the Local Storage
        window.localStorage.clear();
        $("#log").html("");
        window.clearInterval(gogogo);
    }
    
    function checkConnection() {
        var conn = null;
        getConnectionType(conn);
        notifyUser(conn);
    }
    
    function checkGeolocation() {
        var pos = null;
        getPosition(pos);
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
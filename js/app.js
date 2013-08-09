/*globals $, navigator, window, document, device, connection */
$(function () {
    'use strict';

    var func_interval, conn, pos;
    
    function notifyUser(text) {
    /* Display an annoying Alert :) */
        navigator.notification.alert(text, false, '¡Lovely pop-up!', 'Done');
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
//        var quality, Connection, states = {};
        var quality = navigator.connection.type;
        alert(quality);
        notifyUser(quality);
    }
    
    function getPosition() {
    /* Track GPS */
        pos = navigator.geolocation.getCurrentPosition;
        alert(pos.timestamp + pos.coords.latitude + ' : ' + pos.coords.longitude);
        notifyUser(pos.timestamp + pos.coords.latitude + ' : ' + pos.coords.longitude);
    }
    
    function writeStuff() {
    /* Show stuff on screen */
        var quality;
        quality = navigator.connection.type;
        $("#log").append('<br> Quality: ' + quality);
        pos = navigator.geolocation.getCurrentPosition;
        $("#log").append(pos.timestamp +
            'Latitude: ' + pos.coords.latitude +
            'Longitude: ' + pos.coords.longitude +
            'Accuracy: ' + pos.coords.accuracy);
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
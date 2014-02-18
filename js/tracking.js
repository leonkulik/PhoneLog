/*globals $, navigator, window, document, alert, position, watch_id, device, connection */
$(function () {
    'use strict';
    var func_interval, conn, position, watch_id;
    
    function writeStuff(position) {
    /* Show stuff on screen */
        var quality;
        quality = navigator.connection.type;
        $("#log").append('<br> Conexão: ' + quality);
    }
    
    function startTrackStuff() {
    /* Repeat the writing function every 5 sec */
        func_interval = window.setInterval(writeStuff, 2000);
        $("#msg").html("Tracking...");
    }
    
    function stopTrackStuff() {
    /* Stops the writing function */
        window.clearInterval(func_interval);
        $("#msg").html("Parar !!");
    }
    
    function storageCleaner() {
    // Clean the Local Storage
        window.localStorage.clear();
        $("#log").html("");
        window.clearInterval(func_interval);
    }

    $("#startTracking").click(startTrackStuff);
    $("#stopTracking").click(stopTrackStuff);
    $("#cleanLog").click(storageCleaner);
    
});
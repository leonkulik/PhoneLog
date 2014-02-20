/*globals document, $*/
$(document).ready(function () {
    'use strict';
    $('[data-toggle=offcanvas]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });
    $('#navTopo').load('nav/_navTopo.html');
    $('#sidebar').load('nav/_navLinks.html');
    $('#navRodape').load('nav/_navRodape.html');
});
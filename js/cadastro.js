/*globals $, document, alert*/

$(document).ready(function () {

    'use strict';
    
    $('form').submit(function () {
        var dados = $(this).serialize();
        alert(dados);
        
        $.ajax({
            type: 'POST',
            data: dados,
            url: 'http://codelibrary.com.br/phonegap/gravar.php',
            success: function () {
                alert('Cadastrado!');
            },
            error: function () {
                alert('Erro...');
            }
        });
        return false;
    });
    
});
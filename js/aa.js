/*globals alert, navigator,document, ContactFindOptions*/


function sucesso(contacts) {
    'use strict';
    var i = 0;
    for (i; i < contacts.length; i += 1) {
        alert('Nome = ' + contacts[i].name);
    }
}

function erro() {
    'use strict';
    alert('Erro..');
}

function onDeviceReady() {
    'use strict';
    var opcoes = new ContactFindOptions(),
        campos = ['displayName', 'name'];
    opcoes.filter = 'Leon';
    navigator.contacts.find(campos, sucesso, erro, opcoes);
}


document.addEventListener('deviceready', onDeviceReady, false);
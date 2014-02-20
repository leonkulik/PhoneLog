/*globals ContactFindOptions, navigator, alert, filter, document*/

function onSuccess(contacts) {
    'use strict';
    var i = 0;
    for (i; i < contacts.length; i++) {
        alert("Nome = " + contacts[i].name);
    }
}

function onError(contactError) {
    'use strict';
    alert('Erro!');
}

function onDeviceReady() {
    'use strict';
    var options = new ContactFindOptions(),
        fields = ["displayName", "name"];
    options.filter = "Leon";
    navigator.contacts.find(fields, onSuccess, onError, options);
}

document.addEventListener("deviceready", onDeviceReady, false);
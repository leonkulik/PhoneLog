/*globals ContactFindOptions, navigator, alert, filter, document*/



function onSuccess(contacts) {
    'use strict';
    var i = 0;
    for (i; i < contacts.length; i++) {
        alert("Formatted: " + contacts[i].name.formatted       + "\n" +
            "Family Name: " + contacts[i].name.familyName      + "\n" +
            "Given Name: "  + contacts[i].name.givenName       + "\n" +
            "Middle Name: " + contacts[i].name.middleName      + "\n" +
            "Suffix: "      + contacts[i].name.honorificSuffix + "\n" +
            "Prefix: "      + contacts[i].name.honorificPrefix);
    }
}


function onError(contactError) {
    'use strict';
    alert('onError!');
}

function onDeviceReady() {
    'use strict';
    var options = new ContactFindOptions();
    options.filter = "leon";
    filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);
}

document.addEventListener("deviceready", onDeviceReady, false);
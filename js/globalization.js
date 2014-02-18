/*globals navigator, alert */

function checkGlobal() {
    'use strict';
    navigator.globalization.getPreferredLanguage(
        function (language) {alert('Língua: ' + language.value + '\n'); },
        function () {alert('Error getting language\n'); }
    );
}

function checkLocale() {
    'use strict';
    navigator.globalization.getLocaleName(
        function (locale) {alert('Local: ' + locale.value + '\n'); },
        function () {alert('Error getting locale\n'); }
    );
}
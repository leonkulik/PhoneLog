/*globals navigator, alert */

function checkGlobal() {
    'use strict';
    navigator.globalization.getPreferredLanguage(
        function (language) {alert('Língua: ' + language.value + '\n'); },
        function () {alert('Erro ao buscar a língua'); }
    );
}

function checkLocale() {
    'use strict';
    navigator.globalization.getLocaleName(
        function (locale) {alert('Local: ' + locale.value + '\n'); },
        function () {alert('Erro ao buscar o local\n'); }
    );
}
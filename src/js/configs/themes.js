var app = require('app');

app
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal').accentPalette('deep-orange')
    });
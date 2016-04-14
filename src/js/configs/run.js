var app = require('app');

app.run(['$rootScope','$state', function($rootScope, $state) {

    $rootScope.$state = $state;

    Parse.initialize("ZTcKEFM8Mvf7oNNURLZ6e6VapUWHGm7SiI6sW50f"); // PRODUCTION
    Parse.serverURL = 'http://www.oddcometgames.com/parse';

}]);

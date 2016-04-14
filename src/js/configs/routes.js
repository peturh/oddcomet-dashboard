var app = require('app');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    // Now set up the states
    $stateProvider

        .state('/', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeController',
            controllerAs: 'home',
            location: "Home"
        })
        .state('/email', {
            url : '/email',
            templateUrl : 'email.html',
            controller : 'EmailController',
            controllerAs : 'email',
            location : "Email"
        })
        .state('/news', {
            url : '/news',
            templateUrl : 'news.html',
            controller : 'NewsController',
            controllerAs : 'news',
            location : "News"
        })

}]);

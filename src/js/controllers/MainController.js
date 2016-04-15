var app = require('app');

app.controller('MainController', ['$scope', '$state', '$mdSidenav',
    function ($scope, $state, $mdSidenav) {
        var main = this;

        main.menu = [
            {
                link: '/',
                title: 'Home',
                icon: 'home'
            },
            {
                link: '/email',
                title: 'Email',
                icon: 'email'
            },
            {
                link: '/news',
                title: 'News',
                icon: 'create'
            }
        ];


        var emails = [];
        main.init = function () {

        };

        main.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };


        main.sendMail = function (text) {
            console.log(emails);
            var body = {
                text: text,
                emails: emails
            };
            // MailService.sendMail(body).then(function (response) {
            //   console.log(response.data);
            //});
        };

    }]);
var app = require('app');

app.controller('MainController', ['$scope', '$state', '$mdSidenav', 'MailService',
    function ($scope, $state, $mdSidenav, MailService) {
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

            var userQuery = new Parse.Query(Parse.User);
            userQuery.find({
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        emails.push(data[i].get('email'));
                    }

                },
                error: function (users, error) {
                    console.log(error);
                }
            });

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
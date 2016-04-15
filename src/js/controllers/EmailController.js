var app = require('app');

app.controller('EmailController', ['$scope', '$interval', '$timeout', 'EmailService',
    function ($scope, $interval, $timeout, EmailService) {
        var email = this;

        email.checked = true;
        email.users = [];
        email.init = function () {
            var userQuery = new Parse.Query(Parse.User);
            userQuery.find({
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        email.users.push({email : data[i].get('email'), checked : true});
                    }
                    console.log(email.users);

                },
                error: function (users, error) {
                    console.log(error);
                }
            });
        };

        email.sendEmail = function (message) {



        };

        email.triggerToSendCompleteEmail = function(){

        };
        email.checkAll = function(){

            for(var i = 0; i < email.users.length;i++){
                email.users[i].checked = !email.checked;
            }
        }


    }]);
var app = require('app');

app.controller('EmailController', ['$scope', '$interval', '$timeout', 'EmailService',
    function ($scope, $interval, $timeout, EmailService) {
        var email = this;

        email.checked = false;
        email.users = [];
        email.init = function () {
            var userQuery = new Parse.Query(Parse.User);
            userQuery.find({
                success: function (data) {
                    for (var i = 0; i < data.length; i++) {
                        email.users.push({email : data[i].get('email'), checked :  email.checked});
                    }
                },
                error: function (users, error) {
                    console.log(error);
                }
            });
        };

        email.sendEmail = function (subject,message) {
            var confirm = window.confirm('Are you sure you want to send emails to these users?');
            if(confirm){
                var emailsToSend = [];
                for (var i = 0; i < email.users.length; i++){
                    if(email.users[i].checked){
                        emailsToSend.push(email.users[i].email);
                    }
                }
                console.log("HEJ")
                EmailService.sendEmailToUsers(subject, message,emailsToSend).then(function(response){
                    console.log(response);
                })
            }
        };

        email.triggerToSendCompleteEmail = function(){

        };
        email.checkAll = function(){
            for(var i = 0; i < email.users.length;i++){
                email.users[i].checked = !email.checked;
            }
        }


    }]);
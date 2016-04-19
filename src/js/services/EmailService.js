var app = require('app');

app.service('EmailService', ['$http', function ($http) {

    var service = {};

    service.sendMail = function (emailObject) {
        console.log(emailObject);
        return $http({
            method: 'POST',
            url: "/sendstaticmail",
            data: emailObject
        })
            .success(function (data, status) {
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

    service.sendEmailToUsers = function (subject, message, emails) {
        var emailObject = {
            subject: subject,
            message: message,
            emails: emails
        };
        console.log(emailObject);
        return $http({
            method: 'POST',
            url: "/sendEmailToUsers",
            data: emailObject
        })
            .success(function (data, status) {
                console.log("Success");
                return data;
            })
            .error(function (data, status) {
                console.log("failed", data);
                return "Request failed";
            });
    };

    return service;
}]);
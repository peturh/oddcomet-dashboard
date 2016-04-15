var app = require('app');

app.service('EmailService', ['$http', function ($http) {

    var service = {};

    service.sendMail = function (emailObject) {
        console.log(emailObject);
        return $http({
            method: 'POST',
            url: "/sendmail",
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

    return service;
}]);
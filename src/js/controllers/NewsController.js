var app = require('app');

app.controller('NewsController', ['$scope', '$interval', '$timeout',
    function ($scope, $interval, $timeout) {
        var news = this;

        news.checked = false;
        news.medias = {
            facebook: {icon: "fa fa-facebook", stripTags: true, name: "Facebook", checked: false},
            instagram: {icon: "fa fa-instagram", stripTags: true, name: "Instagram", checked: false},
            linkedin: {icon: "fa fa-linkedin", stripTags: true, name: "LinkedIn", checked: false},
            homepage: {icon: "fa fa-newspaper-o", stripTags: false, name: "Website", checked: false}
        };

        news.init = function () {

        };

        news.sendnews = function (subject, message) {

        };


        news.checkAll = function () {
            angular.forEach(news.medias, function (value, key) {
                value.checked = !value.checked;
            });
        }
    }]);
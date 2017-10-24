/// <reference path="Scripts/typings/angularjs/angular.d.ts" />
var MainCtrl = (function () {
    function MainCtrl($scope) {
        $scope.greeting1 = 'hello, world!!!!';
        $scope.greeting2 = 'Angular and typescript';
    }
    return MainCtrl;
}());
MainCtrl.inject = ['$scope'];
var Config = (function () {
    function Config($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'main.html',
            controller: 'MainCtrl'
        })
            .otherwise({
            redirectTo: '/'
        });
    }
    return Config;
}());
Config.inject = ['$routeProvider'];
angular.module('classProjectApp', ['ngRoute', 'ngCookies'])
    .config(Config)
    .controller("MainCtrl", ["$scope", MainCtrl]);
// Function that returns void
(function () {
    var currentUser = {
        userId: '',
        fullName: ''
    };
    angular.module('classProjectApp').value('currentUser', currentUser);
})();
var Run = (function () {
    function Run($rootScope, $cookies, currentUser) {
        console.log('Running.....');
        console.log($cookies);
        currentUser.userId = $cookies.userId;
    }
    return Run;
}());
//variables can be injected
Run.inject = ['$rootScope', '$cookies', 'currentUser'];
//# sourceMappingURL=app.js.map
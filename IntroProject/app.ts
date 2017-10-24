/// <reference path="Scripts/typings/angularjs/angular.d.ts" />

class MainCtrl {
    static inject = ['$scope'];
    constructor($scope) {
        $scope.greeting1 = 'hello, world!!!!';
        $scope.greeting2 = 'Angular and typescript';

        }

}
class Config {
    static inject = ['$routeProvider'];
    constructor($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
}



angular.module('classProjectApp', ['ngRoute', 'ngCookies'])
    .config(Config)
    //.run(Run)
    .controller("MainCtrl", ["$scope", MainCtrl]);

//---------------------------------------------------------------------------------

interface ICurrentUser {
    userId: string;
    fullName: string;
}
// Function that returns void
((): void => {
    var currentUser: ICurrentUser = {
        userId: '',
        fullName: ''
    };

    angular.module('classProjectApp').value('currentUser', currentUser);
})();

//---------------------------------------------------------------------------------

interface IAppCookies {
    userId: string;
}

class Run {
    //variables can be injected
    static inject = ['$rootScope', '$cookies', 'currentUser'];
    constructor($rootScope: ng.IRootScopeService, $cookies: IAppCookies, currentUser: ICurrentUser) {
        console.log('Running.....');
        console.log($cookies);

        currentUser.userId = $cookies.userId;
    }
}
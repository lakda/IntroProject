/// <reference path="Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="app.ts" />

module Config {
    var app = ClassProject.getModule();

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

    app.config(Config);
}
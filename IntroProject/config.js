/// <reference path="C:\Users\ricardo.oksa\Documents\Visual Studio 2017\Projects\IntroProject\IntroProject\Scripts\typings\angularjs\angular.d.ts" />
/// <reference path="app.ts" />
var Config;
(function (Config_1) {
    var app = ClassProject.getModule();
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
    app.config(Config);
})(Config || (Config = {}));
//# sourceMappingURL=config.js.map
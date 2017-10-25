/// <reference path="C:\Users\ricardo.oksa\Documents\Visual Studio 2017\Projects\IntroProject\IntroProject\Scripts\typings\angularjs\angular.d.ts" />
/// <reference path="app.ts" />
var Main;
(function (Main) {
    'use strict';
    var app = ClassProject.getModule();
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            $scope.greeting1 = 'hello, world!!!!!!';
            $scope.greeting2 = 'Angular and typescript';
            $scope.setGreeting1 = function (s) {
                $scope.greeting1 = s;
            };
            $scope.setGreeting2 = function (s) {
                $scope.greeting2 = s;
            };
        }
        return MainCtrl;
    }());
    MainCtrl.inject = ['$scope'];
    app.controller("MainCtrl", ["$scope", MainCtrl]);
})(Main || (Main = {}));
//# sourceMappingURL=main.js.map
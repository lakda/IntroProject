/// <reference path="C:\Users\ricardo.oksa\Documents\Visual Studio 2017\Projects\IntroProject\IntroProject\Scripts\typings\angularjs\angular.d.ts" />
/// <reference path="app.ts" />

module Main {
    'use strict'

    var app = ClassProject.getModule();



    interface MainScope extends ng.IScope {
        greeting1: string;
        greeting2: string;
        setGreeting1(s): void;
        setGreeting2(s): void;
    }



    class MainCtrl {
        static inject = ['$scope'];
        constructor($scope: MainScope) {
            $scope.greeting1 = 'hello, world!!!!!!';
            $scope.greeting2 = 'Angular and typescript';

            $scope.setGreeting1 = (s) => {
                $scope.greeting1 = s;

            }
            $scope.setGreeting2 = (s) => {
                $scope.greeting2 = s;

            }

        }

    }

    app.controller("MainCtrl", ["$scope", MainCtrl]);

}
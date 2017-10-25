/// <reference path="C:\Users\ricardo.oksa\Documents\Visual Studio 2017\Projects\IntroProject\IntroProject\Scripts\typings\angularjs\angular.d.ts" />
var ClassProject;
(function (ClassProject) {
    'use strict';
    angular.module('classProjectApp', ['ngRoute']);
    ClassProject.getModule = function () {
        return angular.module('classProjectApp');
    };
})(ClassProject || (ClassProject = {}));
/*




//angular.module('classProjectApp', ['ngRoute', 'ngCookies'])
angular.module('classProjectApp', ['ngRoute'])
    .config(Config);
    //.run(Run);
    //.controller("MainCtrl", ["$scope", MainCtrl]);

//---------------------------------------------------------------------------------
class currentUser {
    public static get userId(): string { return 'jdoe'; }
    public static get fullName(): string { return 'John Doe'; }
}

    
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
    //static inject = ['$rootScope', '$cookies', 'currentUser'];
    static inject = ['$rootScope', 'currentUser'];
    //constructor($rootScope: ng.IRootScopeService, $cookies: IAppCookies, currentUser: ICurrentUser) {
    constructor($rootScope: ng.IRootScopeService, currentUser) {
        console.log('Running.....');
        //console.log($cookies);
        console.log(currentUser.userId);
        console.log(currentUser.fullName);

        //currentUser.userId = $cookies.userId;
    }
}

angular.module('classProjectApp')
    .run(Run)
    .controller('MainCtrl', ['$scope', MainCtrl]);

*/ 
//# sourceMappingURL=app.js.map
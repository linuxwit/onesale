define(['angular', 'app'], function(angular, app) {
    'use strict';
    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            });
            $routeProvider.when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            });
            $routeProvider.otherwise({
                templateUrl: '404.html'
            });
        }
    ]);
});
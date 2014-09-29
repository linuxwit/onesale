define(['angular', 'app'], function(angular, app) {
    'use strict';
    app.config(['$stateProvider', '$urlRouterProvider'

        function($stateProvider, $urlRouterProvider) {

            console.log('hello');
            $stateProvider.state('main', {
                url: '/',
                templateUrl: 'views/main.html'
            })
            /*       $routeProvider.when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            }).when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }).otherwise({
                redirectTo: '/'
            });*/
            //$locationProvider.html5Mode(true);
        }
    ]);
});
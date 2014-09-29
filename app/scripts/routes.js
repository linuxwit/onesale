define(['app'], function(app) {
    'use strict';
    app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($locationProvider, $stateProvider, $urlRouterProvider) {
            $stateProvider.state('main', {
                url: '/',
                templateUrl: 'views/main.html'
            }).state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            });
            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');
        }
    ]);
});
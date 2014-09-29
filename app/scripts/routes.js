define(['app'], function(app) {
    'use strict';
    app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($locationProvider, $stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');
            $stateProvider.state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html'
            }).state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            }).state('course', {
                url: '/course',
                templateUrl: 'views/course/main.html',
                controller: 'LoginCtrl'
            }).state('party', {
                url: '/party',
                template: '<h1>This Is A State</h1>'
            }).state('partyDetail', {
                url: '/party/:partyID/:partyLocation',
                template: '<h1>This Is {{partyID}} State</h1>'
            });
            //http://plnkr.co/edit/IzimSVsstarlFviAm7S7?p=preview
            //http://scotch.io/tutorials/javascript/angular-routing-using-ui-router#reader-mode
            //$locationProvider.html5Mode(true);
        }
    ]);
});
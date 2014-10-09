define(['app'], function(app) {
    'use strict';
    app.config(['$stateProvider', '$urlRouterProvider','$httpProvider',
        function($stateProvider, $urlRouterProvider,$httpProvider) {

           // $urlRouterProvider.responseInterceptors.push('httpInterceptor');

            $urlRouterProvider.otherwise('/dashboard');
            $stateProvider.state('login', {
                url: '/passport/login',
                templateUrl: 'views/passport/login.html',
                controller: 'PassportCtrl'
            }).state('logout', {
                url: '/passport/logout',
                templateUrl: 'views/passport/logout.html',
                controller: 'PassportCtrl'
            }).state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            }).state('dashboardNewest',{
                url:'/dashboard/newest',
                templateUrl:'views/dashboard/newest.html',
                controller:'DashboardCtrl'
            }).state('course', {
                url: '/course',
                templateUrl: 'views/course/main.html',
                controller: 'CourseCtrl'
            }).state('courseAdd', {
                url: '/course/add',
                templateUrl: 'views/course/form.html',
                controller: 'CourseCtrl'
            }).state('teacher', {
                url: '/teacher',
                templateUrl: 'views/teacher/main.html',
                controller: 'TeacherCtrl'
            }).state('teacherAdd', {
                url: '/teacher/add',
                templateUrl: 'views/teacher/add.html',
                controller: 'TeacherCtrl'
            }).state('student', {
                url: '/student',
                templateUrl: 'views/student/main.html',
                controller: 'StudentCtrl'
            }).state('studentAdd', {
                url: '/student/add',
                templateUrl: 'views/student/add.html',
                controller: 'StudentCtrl'
            }).state('team', {
                url: '/team',
                templateUrl: 'views/team/main.html',
                controller: 'TeamCtrl'
            });
            /*
            $routeProvider.when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'LoginCtrl'
            }).when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            }).when('/course', {
                templateUrl: 'views/course/main.html',
                controller: 'CourseCtrl'
            }).when('/teacher', {
                templateUrl: 'views/teacher/main.html',
                controller:'TeacherCtrl'
            }).when('/teacher/detaill/:id', {
                templateUrl: 'views/teacher/detail.html',
                controller:'TeacherDetailCtrl'
            }).when('/teacher/newest', {
                templateUrl: 'views/teacher/newest.html',
                controller:'TeacherCtrl'
            }).when('/teacher/all', {
                templateUrl: 'views/teacher/all.html',
                controller:'TeacherCtrl'
            }).when('/teacher/add', {
                templateUrl: 'views/teacher/add.html',
                controller:'TeacherCtrl'
            }).when('/team', {
               templateUrl: 'views/team/main.html',
               controller:'TeamCtrl'
            });
*/
            //http://plnkr.co/edit/IzimSVsstarlFviAm7S7?p=preview
            //http://scotch.io/tutorials/javascript/angular-routing-using-ui-router#reader-mode
           // $httpProvider.html5Mode(true);
        }
    ]);
});
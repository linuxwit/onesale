define([
    'angular',
    'uiBootstrap',
    'uiRoute',
    'ngCookies',
    'controllers/index',
    'directives/index',
    'services/index',
    'filters/index'
], function(ng) {
   var app = ng.module("app", [
      'ui.bootstrap',
      'ui.router',
      'ipCookie',
      'app.services',
      'app.controllers',
      'app.filters',
      'app.directives'
      ]).config(['$httpProvider', function($httpProvider) {
          $httpProvider.interceptors.push('httpInterceptor');
      }]).constant('API_SERVER', 'http://127.0.0.1:5000/api/');;
      return app;
});
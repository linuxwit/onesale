define([
    'angular',
    'uiBootstrap',
    'uiRoute',
    'ngCookies',
    'LocalStorageModule',
    'controllers/index',
    'directives/index',
    'services/index',
    'filters/index'
], function(ng) {
   var app = ng.module("app", [
      'ui.bootstrap',
      'ui.router',
      'ngCookies',
      'LocalStorageModule',
      'app.services',
      'app.controllers',
      'app.filters',
      'app.directives'
      ]).config(['$httpProvider', function($httpProvider) {
          $httpProvider.interceptors.push('httpInterceptor');
      }]).constant('API_SERVER', 'http://127.0.0.1/onsale/api/');;
      return app;
});
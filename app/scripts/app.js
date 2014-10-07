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
      ]);
      app.run(function (api) {
        api.init();
      }); 
      return app;
});
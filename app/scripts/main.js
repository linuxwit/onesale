require.config({
    baseUrl: 'scripts/',
    paths: {
        angular: '../bower_components/angular/angular',
        //ngRoute: '../bower_components/angular-route/angular-route',
        uiRoute: '../bower_components/angular-ui-router/release/angular-ui-router',
        uiBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        domReady: '../bower_components/requirejs-domready/domReady'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        //ngRoute: ['angular'],
        uiRouter: {
            deps: ['angular']
        },
        uiBootstrap: ['angular']
    }
});
/*require(['require', 'angular','routes', 'app'], function(ng) {
      ng.bootstrap(window.document, ['app']);
});*/
define(['require', 'angular', 'routes', 'app'], function(require, angular, app) {
    'use strict';
    require(['domReady!'], function(document) {
        angular.bootstrap(document, ['app']);
    });
});
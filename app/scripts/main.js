require.config({
    paths: {
        domReady: '../bower_components/requirejs-domready/domReady',
        // 'jquery': '../bower_components/jquery/jquery',
        angular: '../bower_components/angular/angular',
        // 'kendo': '../lib/kendo.all.min',
        uiRoute: '../bower_components/angular-ui-router/release/angular-ui-router',
      //  ngRoute:'../bower_components/angular-route/angular-route',
        uiBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        ngCookies: '../bower_components/angular-cookie/angular-cookie'
        // 'angular-kendo-ui': '../bower_components/angular-kendo-ui/angular-kendo'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRoute': {
            deps: ['angular']
        },
<<<<<<< HEAD
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
=======
        'uiBootstrap': {
            deps: ['angular']
        },
        'ngCookies': {
            deps: ['angular']
        }
    },
    deps: ['./bootstrap']
>>>>>>> de368cd8153b7785b157c29225f362765bcd2ce4
});
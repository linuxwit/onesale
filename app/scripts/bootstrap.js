/*require(['require', 'angular', 'routes', 'app'], function(ng) {
    ng.bootstrap(window.document, ['app']);
});*/
/*
define(['require', 'angular', 'routes', 'app'], function(require, angular, app) {
    'use strict';
    require(['domReady!','angular'], function(document) {
        console.log('domReady');
        angular.bootstrap(window.document, ['app']);
    });
});*/
define(["angular", 'app', 'routes'], function(angular, app) {
        angular.bootstrap(document, ["app"]);

});



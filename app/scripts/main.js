require.config({
    baseUrl: 'scripts/',
    paths: {
        angular: '../bower_components/angular/angular',
        //ngRoute: '../bower_components/angular-route/angular-route',
        uiRoute: '../bower_components/angular-ui-router/release/angular-ui-router',
        uiBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        //ngRoute: ['angular'],
        uiRoute: ['angular'],
        uiBootstrap: ['angular']
    }
});
require(['angular', 'app'], function(ng) {
    ng.bootstrap(window.document, ['app']);
});
require.config({
    paths: {
        domReady: '../bower_components/requirejs-domready/domReady',
        // 'jquery': '../bower_components/jquery/jquery',
        angular: '../bower_components/angular/angular',
        // 'kendo': '../lib/kendo.all.min',
        uiRoute: '../bower_components/ui-router/release/angular-ui-router',
        //  ngRoute:'../bower_components/angular-route/angular-route',
        uiBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        ngCookies: '../bower_components/angular-cookies/angular-cookies',
        LocalStorageModule: '../bower_components/angular-local-storage/dist/angular-local-storage'
        // 'angular-kendo-ui': '../bower_components/angular-kendo-ui/angular-kendo'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRoute': {
            deps: ['angular']
        },
        'uiBootstrap': {
            deps: ['angular']
        },
        'ngCookies': {
            deps: ['angular']
        },
        'LocalStorageModule':{
            deps:['angular']
        }
    },
    deps: ['./bootstrap']
});
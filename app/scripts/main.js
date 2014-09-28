require.config({
	baseUrl: 'scripts/',

	paths: {
		angular: '../bower_components/angular/angular',
		ngRoute: '../bower_components/angular-route/angular-route'
	},

	shim: {
		angular: {exports: 'angular'},
		ngRoute: ['angular']
	}
});

require(['angular', 'routes', 'app'], function(ng) {
	ng.bootstrap(window.document, ['app']);
});
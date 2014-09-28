define(['app'], function(app) {
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
        .otherwise({templateUrl: '404.html'});
  }]);
});
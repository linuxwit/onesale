define(['controllers/module'], function(mod) {
    mod.controller('DashboardCtrl', ['$scope', '$http','SessionService',
        function($scope, $http,SessionService) {

            $http.get('users/naorye/repos').then(function(response) {
                console.log(response);
            });
        }
    ]);
})
define(['controllers/module'], function(mod) {
    mod.controller('DashboardCtrl', ['$scope', '$http',
        function($scope, $http) {
            $http.get('users/naorye/repos').then(function(response) {
                console.log(response);
            });
        }
    ]);
})
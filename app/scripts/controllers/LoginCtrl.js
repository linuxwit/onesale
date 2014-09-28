define(['controllers/module'], function(controllers) {
    controllers.controller('LoginCtrl', ['$scope', '$http', '$q',
        function($scope, $http, $q) {
            $scope.user = {
                name: 'demo',
                'passwd': 'demo'
            };
            $scope.login = function() {
                var config = { /* ... */ } // configuration object
                if ($scope.user) {
                    console.log($scope.user.name);
                    console.log($scope.user.passwd);
                }
            }
        }
    ]);
});
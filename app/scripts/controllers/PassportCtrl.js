define(["./module"], function(mod) {
    mod.controller('PassportCtrl', ['$scope', '$location','authService',
        function($scope, $location,authService) {
            console.log("passport")
            $scope.loginData = {
                userName: "",
                password: ""
            };
            $scope.message = "";
            $scope.login = function() {
                authService.login($scope.loginData).then(function(response) {
                    $location.path('/dashboard');
                }, function(err) {
                    $scope.message = err.error_description;
                });
            };
        }
    ])
})
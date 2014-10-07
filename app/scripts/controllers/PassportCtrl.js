define(["./module"], function(mod) {
    mod.controller('PassportCtrl', ['$scope', '$location', '$cookieStore', 'authorization', 'api',
        function($scope, $location, $cookieStore, authorization, api) {
            $scope.login = function() {
                var credentials = {
                    username: this.username,
                    token: this.token
                };

                var success = function(data) {
                    var token = data.token;
                    api.init(token);
                    $cookieStore.put('token', token);
                    $location.path('/');
                };
                var error = function() {
                    // TODO: apply user notification here..
                };
                authorization.login(credentials).success(success).error(error);
            };
        }
    ])
})
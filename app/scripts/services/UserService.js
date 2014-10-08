define(['services/module',
    function(mod, config) {
        mod.service('UserService', ['$http',
            function() {
                var sdo = {
                    isLogged: false,
                    username: ''
                };
                
                $http.get('https://api.github.com/users/naorye/repos').then(function(response) {
                    console.log(response);
                }
                return sdo;
            }
        ]);
    }
])
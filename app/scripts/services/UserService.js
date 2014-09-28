define(['services/module',
    function(mod, config) {
        mod.service('UserService', ['$http',
            function() {
                var sdo = {
                    isLogged: false,
                    username: ''
                };
                return sdo;
            }
        ]);
    }
])
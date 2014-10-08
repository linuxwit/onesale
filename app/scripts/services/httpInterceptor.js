define(["./module"], function(mod) {
    mod.factory('httpInterceptor', ['$q', '$location', 'SessionService',
        function($q, $location, SessionService) {
            var sessionInjector = {
                request: function(config) {
                    console.log(SessionService);
                    if (!SessionService.isAnonymus) {
                        config.headers['x-session-token'] = SessionService.token;
                    }
                    return config;
                },
                response: function(response) {
                    return response || $q.when(response);
                },
                responseError: function(rejection) {
                    if (rejection.status === 401) {
                        $location.path('/login');
                    }
                    return $q.reject(rejection);
                }
            };
            return sessionInjector;
        }
    ]);
})
define(['./module'], function(mod) {
    mod.factory('authorization', function($http, config) {
        var url = config.analytics.url;
        return {
            login: function(credentials) {
                return $http.post(url + '/auth', credentials);
            }
        };
    })
})
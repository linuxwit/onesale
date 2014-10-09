define(["./module"], function(mod) {
    mod.factory('SessionService', [

        function($http) {
            var session = {
                isAnonymus: true,
                token: '',
                currentUser: null,
                init: function() {
                    this.resetSession();
                },
                resetSession: function() {
                    this.currentUser = null;
                    this.isAnonymus = true;
                },
                logout: function() {
                    var scope = this;
                    $http.delete('/auth').success(function() {
                        scope.resetSession();
                        $rootScope.$emit('session-changed');
                    });
                },
                authSuccess: function(userData) {
                    this.currentUser = userData;
                    this.isLoggedIn = true;
                    $rootScope.$emit('session-changed');
                },
                authFailed: function() {
                    this.resetSession();
                    alert('Authentication failed');
                }
            };
            session.init();
            return session;
        }
    ]);
})
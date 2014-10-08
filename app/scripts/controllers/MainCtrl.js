define(['controllers/module'], function(mod) {
    mod.controller('MainCtrl', ['$scope', '$http', '$q', '$state',
        function($scope, $http, $q, $state) {
        	console.log('MainCtrl');
            $scope.$state = $state;
            console.log($state.current.name);
            console.log($state.includes('dashboard'));
        }
    ]);
});
define(['controllers/module'], function(mod) {
    mod.controller('UserCtrl', ['$scope',
        function($scope) {
            $scope.status = {
                isopen: false
            };
  /*          $scope.toggled = function(open) {
                console.log('Dropdown is now: ', open);
            };
            $scope.toggleDropdown = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };*/
        }
    ])
})
define(['controllers/module'], function(controllers) {
  controllers.controller('MainCtrl', ['$scope', '$http', '$q', function($scope, $http, $q) {

    // used by bar chart and line chart.
    $scope.data = [
      {"y":15, "x":1},
      {"y":11, "x":2},
      {"y":17, "x":3},
      {"y":18, "x":4},
      {"y":6, "x":5},
      {"y":12, "x":6},
      {"y":9, "x":7},
      {"y":5, "x":8},
      {"y":2, "x":9},
      {"y":11, "x":10}
    ];

    $scope.piechartData = [
      {pet: 'Cats', votes: 30},
      {pet: 'Dogs', votes: 60},
      {pet: 'Unicorns', votes: 100}
    ];

    $scope.getMapData = function() {
      var deferred = $q.defer();

      $http.get('data/us.json').success(function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    $scope.timeseries = getTimeSeriesData();

    function getTimeSeriesData() {
      var dates = [],
          startDate = new Date();

      for (var i = 0; i < 300; i++) {
        var date = new Date(startDate);
        date.setDate(startDate.getDate() - i);
        dates.push(date);
      }

      var data = [
        {name: 'Name 1', values: []},
        {name: 'Name 2', values: []},
        {name: 'Name 3', values: []},
        {name: 'Name 4', values: []},
        {name: 'Name 5', values: []}
      ];

      data.forEach(function(d) {
        var max = Math.floor(Math.random() * (Math.floor(Math.random() * 20) + 1)) + 1;
        dates.forEach(function(date) {
          d.values.push({date: date, value: Math.floor(Math.random() * max) + 1});
        });
      });

      return data;
    }
  }]);
});
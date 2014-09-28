define(['directives/module'], function(directives) {

  directives.directive('barchart', ['BarChart', function(BarChart) {
    return {
      restrict: 'E',
      scope: {chartdata: '@'},

      link: function(scope, element) {
        var barchart = new BarChart(JSON.parse(scope.chartdata), element[0]);
        barchart.render();

        window.onresize = function() {
          if (barchart) barchart.render();
        }
      }
    }
  }]);

  directives.directive('linechart', ['LineChart', function(LineChart) {
    return {
      restrict: 'E',
      scope: {chartdata: '@'},

      link: function(scope, element) {
        var linechart = new LineChart(JSON.parse(scope.chartdata), element[0]);
        linechart.render();

        window.onresize = function() {
          if (linechart) linechart.render();
        }
      }
    }
  }]);

  directives.directive('piechart', ['PieChart', function(PieChart) {
    return {
      restrict: 'E',
      scope: {chartdata: '@'},

      link: function(scope, element) {
        var piechart = new PieChart(JSON.parse(scope.chartdata), element[0]);
        piechart.render();

        window.onresize = function() {
          if (piechart) piechart.render();
        }
      }
    }
  }]);

  directives.directive('map', ['Map', function(Map) {
    return {
      restrict: 'E',
      scope: {},
      link: function(scope, element) {
        var map;
        scope.$parent.getMapData().then(function(data) {
          map = new Map(data, element[0]);
          map.render();
        });

        window.onresize = function() {
          if (map) map.render();
        }
      }
    }
  }]);

  directives.directive('stackedAreaChart', ['StackedAreaChart', function(StackedAreaChart) {
    return {
      restrict: 'E',
      scope: {chartdata: '@'},
      link: function(scope, element) {
        var data = JSON.parse(scope.chartdata);
        data.forEach(function(d) {
          d.values.forEach(function(v) {
            v.date = new Date(v.date);
          })
        });

        var chart = new StackedAreaChart(data, element[0]);
        chart.render();

        window.onresize = function() {
          if (chart) chart.render();
        }
      }
    }
  }])
});

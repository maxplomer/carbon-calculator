angular.module('carbonCalculator')
  .controller('ProgressCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      //scatterplot graph

      var _MS_PER_DAY = 1000 * 60 * 60 * 24;

      var timeRanges = {
        'week': '7',
        'month': '30',
        'year': '365',
        'all': '99999'
      };

      // a and b are javascript Date objects
      var dateDiffInDays = function(a, b) {
        // Discard the time and time-zone information.
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      }

      var getData = function(offset, timeRange) {
        var result = [];
        var lastestDate = new Date(posts.footprints[0].created_at)

        angular.forEach(posts.footprints, function(footprint) {
          var d = new Date(footprint.created_at);
          console.log(dateDiffInDays(d, lastestDate))
          if (dateDiffInDays(d, lastestDate) < timeRanges[timeRange]) {
            result.unshift({
              x: d,
              y: footprint.co2_output + offset
            })
          }
        });

        return result;
      };

      $scope.drawScatter = function(timeRange) {
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.animation = true;

        var data = [
          {
            label: 'daily average footprint',
            strokeColor: '#A31515',
            data: getData(0, timeRange)
          },
          // {
          //   label: 'airplane flight footprint',
          //   strokeColor: 'blue',
          //   data: getData(99999, timeRange)
          // }
        ];

        var ctx2 = document.getElementById("myChartWithDates").getContext("2d");
        var myDateLineChart = new Chart(ctx2).Scatter(data, {
          bezierCurve: true,
          showTooltips: true,
          scaleShowHorizontalLines: true,
          scaleShowLabels: true,
          scaleType: "date",
          scaleLabel: "<%=value%> g"
        });

      };
      $scope.drawScatter('all');

    }
  ]);


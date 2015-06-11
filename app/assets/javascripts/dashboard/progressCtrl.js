angular.module('carbonCalculator')
  .controller('ProgressCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      //scatterplot graph

      var getData = function(offset) {
        var result = [];

        angular.forEach(posts.footprints, function(footprint) {
          result.unshift({
            x: new Date(footprint.created_at),
            y: footprint.co2_output + offset
          })
        });

        return result;
      };

      var drawScatter = function() {
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.animation = true;

        var data = [
          {
            label: 'daily average footprint',
            strokeColor: '#A31515',
            data: getData(0)
          },
          {
            label: 'airplane flight footprint',
            strokeColor: 'blue',
            data: getData(99999)
          }];

        var ctx2 = document.getElementById("myChartWithDates").getContext("2d");
        var myDateLineChart = new Chart(ctx2).Scatter(data, {
          bezierCurve: true,
          showTooltips: true,
          scaleShowHorizontalLines: true,

          scaleType: "date",
          scaleLabel: "<%=value%> g"
        });

      };
      drawScatter();

    }
  ]);


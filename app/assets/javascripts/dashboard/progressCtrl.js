angular.module('carbonCalculator')
  .controller('ProgressCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      $scope.options = {
        chart: {
          type: 'lineWithFocusChart',
          height: 450,
          margin: {
            top: 20,
            right: 20,
            bottom: 60,
            left: 40
          },
          transitionDuration: 500,
          xAxis: {
            axisLabel: 'X Axis',
            tickFormat: function(d) {
              return d3.format(',f')(d);
            }
          },
          x2Axis: {
            tickFormat: function(d) {
              return d3.format(',f')(d);
            }
          },
          yAxis: {
            axisLabel: 'Y Axis',
            tickFormat: function(d) {
              return d3.format(',.2f')(d);
            },
            rotateYLabel: false
          },
          y2Axis: {
            tickFormat: function(d) {
              return d3.format(',.2f')(d);
            }
          }

        }
      };

      $scope.data = generateData();

      /* Random Data Generator (took from nvd3.org) */
      function generateData() {
        return stream_layers(3, 10 + Math.random() * 200, .1).map(function(data, i) {
          return {
            key: 'Stream' + i,
            values: data
          };
        });
      }

      /* Inspired by Lee Byron's test data generator. */
      function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;

        function bump(a) {
          var x = 1 / (.1 + Math.random()),
            y = 2 * Math.random() - .5,
            z = 10 / (.1 + Math.random());
          for (var i = 0; i < m; i++) {
            var w = (i / m - y) * z;
            a[i] += x * Math.exp(-w * w);
          }
        }
        return d3.range(n).map(function() {
          var a = [],
            i;
          for (i = 0; i < m; i++) a[i] = o + o * Math.random();
          for (i = 0; i < 5; i++) bump(a);
          return a.map(stream_index);
        });
      }

      /* Another layer generator using gamma distributions. */
      function stream_waves(n, m) {
        return d3.range(n).map(function(i) {
          return d3.range(m).map(function(j) {
            var x = 20 * j / m - i / 3;
            return 2 * x * Math.exp(-.5 * x);
          }).map(stream_index);
        });
      }

      function stream_index(d, i) {
        return {
          x: i,
          y: Math.max(0, d)
        };
      }






      // //scatterplot graph

      // var getData = function() {
      //   var result = [{
      //           x: new Date('2011-04-11T17:00:00'),
      //           y: 25
      //         }];

      //   angular.forEach(posts.footprints, function(footprint) {
      //     result.unshift({
      //       x: new Date(footprint.created_at),
      //       y: Math.floor(footprint.co2_output / 1000)
      //     })
      //   });

      //   return result;
      // };

      // var drawScatter = function() {
      //   Chart.defaults.global.responsive = true;
      //   Chart.defaults.global.animation = false;



      //   var data3 = [
      //     {
      //       label: 'daily average footprint',
      //       strokeColor: '#A31515',
      //       data: getData()
      //     }];

      //   var ctx2 = document.getElementById("myChartWithDates").getContext("2d");
      //   var myDateLineChart = new Chart(ctx2).Scatter(data3, {
      //     bezierCurve: true,
      //     showTooltips: true,
      //     scaleShowHorizontalLines: true,
      //     scaleShowLabels: true,
      //     scaleType: "date",
      //     scaleLabel: "<%=value%> kg"
      //   });

      // };
      // drawScatter();

      // //angular charts graph
      // $scope.logScale = true;

      // //$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
      // $scope.series = ['Daily Average Footprints'];
      // //$scope.data = [[65, 59, 80, 81, 56, 55, 40]];

      // $scope.setGraphData = function() {      
      //   $scope.myData = [];
      //   $scope.myDates = [];
      //   $scope.myLabels = [];

      //   angular.forEach($scope.footprints, function(footprint) {
      //     var c = footprint.co2_output;
      //     if ($scope.logScale) { c = Math.log(c) }
      //     $scope.myData.unshift(Math.round(c));
      //     var d = new Date(footprint.created_at);
      //     $scope.myDates.unshift(d);
      //     $scope.myLabels.unshift("label");
      //   });

      //   $scope.data = [$scope.myData]
      //   $scope.labels = $scope.myLabels
      // };
      // $scope.setGraphData();

      // $scope.onClick = function (points, evt) {
      //   console.log(points, evt);
      // };

    }
  ]);


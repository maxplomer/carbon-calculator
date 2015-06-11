angular.module('carbonCalculator')
  .controller('ProgressCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      $scope.footprints = posts.footprints;

      //scatterplot graph

      var drawScatter = function() {
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.animation = false;



        var data3 = [
          {
            label: 'temperature',
            strokeColor: '#A31515',
            data: [
              {
                x: new Date('2011-04-11T11:45:00'),
                y: 25
              },
              {
                x: new Date('2011-04-11T12:51:00'),
                y: 28
              },
              {
                x: new Date('2011-04-11T14:10:00'),
                y: 22
              },
              {
                x: new Date('2011-04-11T15:15:00'),
                y: 18
              },
              {
                x: new Date('2011-04-11T17:00:00'),
                y: 25
              },
              {
                x: new Date('2011-04-11T21:00:00'),
                y: 24
              },
              {
                x: new Date('2011-04-12T13:00:00'),
                y: 24
              }
            ]
          }];

        var ctx2 = document.getElementById("myChartWithDates").getContext("2d");
        var myDateLineChart = new Chart(ctx2).Scatter(data3, {
          bezierCurve: true,
          showTooltips: true,
          scaleShowHorizontalLines: true,
          scaleShowLabels: true,
          scaleType: "date",
          scaleLabel: "<%=value%> deg C"
        });

      };
      drawScatter();

      //angular charts graph
      $scope.logScale = true;

      //$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
      $scope.series = ['Daily Average Footprints'];
      //$scope.data = [[65, 59, 80, 81, 56, 55, 40]];

      $scope.setGraphData = function() {      
        $scope.myData = [];
        $scope.myDates = [];
        $scope.myLabels = [];

        angular.forEach($scope.footprints, function(footprint) {
          var c = footprint.co2_output;
          if ($scope.logScale) { c = Math.log(c) }
          $scope.myData.unshift(Math.round(c));
          var d = new Date(footprint.created_at);
          $scope.myDates.unshift(d);
          $scope.myLabels.unshift("label");
        });

        $scope.data = [$scope.myData]
        $scope.labels = $scope.myLabels
      };
      $scope.setGraphData();

      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };

    }
  ]);


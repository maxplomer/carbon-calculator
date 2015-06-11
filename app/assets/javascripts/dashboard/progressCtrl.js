angular.module('carbonCalculator')
  .controller('ProgressCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      //scatterplot graph

      var getData = function() {
        var result = [{
                x: new Date('2011-04-11T17:00:00'),
                y: 25
              }];

        angular.forEach(posts.footprints, function(footprint) {
          result.unshift({
            x: new Date(footprint.created_at),
            y: Math.floor(footprint.co2_output / 1000)
          })
        });

        return result;
      };

      var drawScatter = function() {
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.animation = false;



        var data3 = [
          {
            label: 'daily average footprint',
            strokeColor: '#A31515',
            data: getData()
          }];

        var ctx2 = document.getElementById("myChartWithDates").getContext("2d");
        var myDateLineChart = new Chart(ctx2).Scatter(data3, {
          bezierCurve: true,
          showTooltips: true,
          scaleShowHorizontalLines: true,
          scaleShowLabels: true,
          scaleType: "date",
          scaleLabel: "<%=value%> kg"
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


angular.module('carbonCalculator')
  .controller('ProgressCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      $scope.logScale = true;

      $scope.footprints = posts.footprints;

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

      var data2 = [
        {
          label: 'My First dataset',
          strokeColor: '#F16220',
          pointColor: '#F16220',
          pointStrokeColor: '#fff',
          data: [
            { x: 19, y: 65 }, 
            { x: 27, y: 59 }, 
            { x: 28, y: 69 }, 
            { x: 40, y: 81 },
            { x: 48, y: 56 }
          ]
        },
        {
          label: 'My Second dataset',
          strokeColor: '#007ACC',
          pointColor: '#007ACC',
          pointStrokeColor: '#fff',
          data: [
            { x: 19, y: 75 }, 
            { x: 27, y: 69 }, 
            { x: 28, y: 70 }, 
            { x: 40, y: 31 },
            { x: 48, y: 76 }, 
            { x: 52, y: 23 }, 
            { x: 24, y: 32 }
          ]
        }
      ];
      var options = {};

      // Get the context of the canvas element we want to select
      var ctx = document.getElementById("myChart").getContext("2d");
      var mychart = new Chart(ctx).Scatter(data2, options);
      
    }
  ]);


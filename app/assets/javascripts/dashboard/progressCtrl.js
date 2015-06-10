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

    }
  ]);


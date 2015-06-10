angular.module('carbonCalculator')
  .controller('ProgressCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      $scope.footprints = posts.footprints;

      $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
      $scope.series = ['Daily Average', 'Series B'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];

      $scope.myData = [];
      $scope.myDates = [];
      angular.forEach($scope.footprints, function(footprint) {
        $scope.myData.push(footprint.co2_output)
        $scope.myDates.push(footprint.created_at)
      });


      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };

    }
  ]);


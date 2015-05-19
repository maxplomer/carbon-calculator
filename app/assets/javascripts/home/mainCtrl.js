angular.module('carbonCalculator')
  .controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {

      $scope.posts = posts.posts;

      $scope.sortMethod = '-id';

      $scope.addPost = function(){
        posts.create({
          gal_of_gas_per_day: $scope.gal_of_gas_per_day,
          gal_of_hotwater_per_day: $scope.gal_of_hotwater_per_day,
          kwh_of_energy_per_day: $scope.kwh_of_energy_per_day
        });

        $scope.gal_of_gas_per_day = '';
        $scope.gal_of_hotwater_per_day = '';
        $scope.kwh_of_energy_per_day = '';
      };

    }
  ]);
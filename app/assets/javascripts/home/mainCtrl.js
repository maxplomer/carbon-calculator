angular.module('carbonCalculator')
  .controller('MainCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      $scope.posts = posts.posts;

      $scope.sortMethod = '-co2_output';

      $scope.changeSortMethod = function(method) { 
        if ($scope.sortMethod == method) {
          $scope.sortMethod = "-" + method;
        } else {
          $scope.sortMethod = method;
        }
      };

      $scope.addPost = function(){
        posts.create({
          gal_of_gas_per_day: $scope.gal_of_gas_per_day,
          gal_of_hotwater_per_day: $scope.gal_of_hotwater_per_day,
          hotwater_source: $scope.hotwater_source,
          kwh_of_energy_per_day: $scope.kwh_of_energy_per_day,
          energy_source: $scope.energy_source,
          lbs_of_meat_per_day: $scope.lbs_of_meat_per_day,
          airline_miles_per_year: $scope.airline_miles_per_year
        });

        $scope.gal_of_gas_per_day = '';
        $scope.gal_of_hotwater_per_day = '';
        $scope.hotwater_source = '';
        $scope.kwh_of_energy_per_day = '';
        $scope.energy_source = '';
        $scope.lbs_of_meat_per_day = '';
        $scope.airline_miles_per_year = '';
      };

      //Auth

      $scope.login = function() {
        Auth.login($scope.user).then(function() {
          $('#myModal').modal('hide');
          $state.go('dashboard');
        });
      };

      $scope.register = function() {
        Auth.register($scope.user).then(function() {
          $state.go('home');
        });
      };

    }
  ]);
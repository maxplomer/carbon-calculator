angular.module('carbonCalculator')
  .controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts) {

      $scope.posts = posts.posts;

      $scope.addPost = function(){
        if(!$scope.gal_of_gas_per_day || !$scope.gal_of_hotwater_per_day) { 
          return; 
        }

        posts.create({
          title: $scope.title,
          link: $scope.link,
          gal_of_gas_per_day: $scope.gal_of_gas_per_day,
          gal_of_hotwater_per_day: $scope.gal_of_hotwater_per_day
        });

        $scope.title = '';
        $scope.link = '';
        $scope.gal_of_gas_per_day = '';
        $scope.gal_of_hotwater_per_day = '';
      };

    }
  ]);
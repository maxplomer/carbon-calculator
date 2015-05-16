angular.module('carbonCalculator')
  .controller('PostsCtrl', [
    '$scope',
    'posts',
    'post',
    function($scope, posts, post) {

      $scope.post = post;

    }
  ]);
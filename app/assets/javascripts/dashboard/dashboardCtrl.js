angular.module('carbonCalculator')
  .controller('DashboardCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      $scope.logout = Auth.logout;

      $scope.logout = function() {
        Auth.logout().then(function() {
          $state.go('home');
        });
      };

      Auth.currentUser().then(function (user){
        $scope.user = user;
      });

    }
  ]);
angular.module('carbonCalculator')
  .controller('MainCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      $scope.posts = posts.posts;

      var sortMethods = {
        '-id': 'Id', 
        '-updated_at_id': 'UpdatedAt', 
        'user.username': 'Username', 
        '-co2_output': 'Co2Output'
      }

      $scope.changeSortMethod = function(method, flag) { 
        setBoldVariables(method);
        if ($scope.sortMethod == method && !flag) {
          $scope.sortMethod = "-" + method;
          setSortArrow(method, 'ASC');
        } else {
          $scope.sortMethod = method;
          setSortArrow(method, 'DESC');
        }
      };

      var setBoldVariables = function(method) {
        $scope.sortMethodId = false;
        $scope.sortMethodUpdatedAt = false;
        $scope.sortMethodUsername = false;
        $scope.sortMethodCo2Output = false;

        var cmd = '$scope.sortMethod' + sortMethods[method] + ' = true;';
        
        eval(cmd);
      };

      var setSortArrow = function(method, direction) {
        $scope.sortMethodId_ASC = false;
        $scope.sortMethodUpdatedAt_ASC = false;
        $scope.sortMethodUsername_ASC = false;
        $scope.sortMethodCo2Output_ASC = false;
        $scope.sortMethodId_DESC = false;
        $scope.sortMethodUpdatedAt_DESC = false;
        $scope.sortMethodUsername_DESC = false;
        $scope.sortMethodCo2Output_DESC = false;

        var cmd = '$scope.sortMethod' + sortMethods[method] + '_' + direction + ' = true;';

        eval(cmd);
      };

      //call changeSortMethod() here to set the sort variables
      $scope.changeSortMethod('-co2_output', true); //flag=true will force descending


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
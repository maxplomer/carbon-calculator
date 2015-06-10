angular.module('carbonCalculator')
  .controller('DashboardCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      $scope.footprints = posts.footprints;

      //set initial values
      $scope.footprint = { "carbon_sources": {} };
      $scope.footprint_item_name = "kilowatt-hours of Electricity";
      $scope.energy_source = '';

      //new footprint errors
      $scope.energySourceError = false;
      $scope.blankFormError = false;
      
      //active bootstrap-select
      $('.selectpicker').selectpicker();

      $scope.newFootprint = function() {
        $('#myModal').modal('toggle');
      };

      $scope.addFootprintItem = function() {
        $scope.blankFormError = false;
        var number = $scope.footprint_item_number;
        var name = $scope.footprint_item_name;

        $scope.footprint["carbon_sources"][name] = number;
        $scope.footprint_item_number = '';
        $scope.carbon_sources = convertHashToArray($scope.footprint["carbon_sources"]);
      };

      $scope.removeFootprintItem = function(name) {
        delete $scope.footprint["carbon_sources"][name];
        $scope.carbon_sources = convertHashToArray($scope.footprint["carbon_sources"]);
        if (name == "kilowatt-hours of Electricity") {
          $scope.energySourceError = false;
        }
      };

      $scope.setEnergySource = function(energy_source) {
        $scope.energy_source = energy_source;
        $scope.footprint["energy_source"] = energy_source;
        $scope.energySourceError = false;
      };
      
      $scope.addDailyAverageFootprint = function() {
        var name = "kilowatt-hours of Electricity";
        var value = $scope.footprint["carbon_sources"][name];
        if (value > 0 && $scope.energy_source == '') {
          $scope.energySourceError = true;
          return;
        }
        var x = $scope.carbon_sources;
        if (typeof x === 'undefined' || x.length == 0) {
          $scope.blankFormError = true;
          return;
        }

        console.log('add footprint')
        posts.createFootprint($scope.footprint)

        //persist data
        console.log($scope.footprint)

        //clear the form
        $scope.footprint = { "carbon_sources": {} };
        $scope.carbon_sources = convertHashToArray($scope.footprint["carbon_sources"]);
        
        //clear the energy sources
        $scope.energy_source = '';
        x = document.getElementsByClassName("btn-primary")
        angular.forEach(x, function(radio_button) {
          angular.element(radio_button).removeClass('active');   
        });
        $('#myModal').modal('toggle');
      };

      var convertHashToArray = function(input) {
        var output = [], item;

        for (var type in input) {
            item = {};
            item.type = type;
            item.name = input[type];
            output.push(item);
        }

        return output;
      };

      //Auth
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
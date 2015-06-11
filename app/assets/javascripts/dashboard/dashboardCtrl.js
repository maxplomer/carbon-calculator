angular.module('carbonCalculator')
  .controller('DashboardCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      // var templates = {
      //   "dashboard": "dashboard/_myfootprints.html", 
      //   "progress": "dashboard/_progress.html"
      // }

      $scope.stateName = $state.current.name;
      //$scope.partial = templates[stateName];

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







      //scatterplot graph

      var _MS_PER_DAY = 1000 * 60 * 60 * 24;

      var timeRanges = {
        'week': '7',
        'month': '30',
        'year': '365',
        'all': '99999'
      };

      // a and b are javascript Date objects
      var dateDiffInDays = function(a, b) {
        // Discard the time and time-zone information.
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      }

      var getData = function(offset, timeRange) {
        var result = [];
        var lastestDate = new Date(posts.footprints[0].created_at)

        angular.forEach(posts.footprints, function(footprint) {
          var d = new Date(footprint.created_at);

          if (dateDiffInDays(d, lastestDate) < timeRanges[timeRange]) {
            result.unshift({
              x: d,
              y: footprint.co2_output + offset
            })
          }
        });

        return result;
      };

      $scope.drawScatter = function(timeRange) {
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.animation = true;

        var data = [
          {
            label: 'daily average footprint',
            strokeColor: '#A31515',
            data: getData(0, timeRange)
          },
          // {
          //   label: 'airplane flight footprint',
          //   strokeColor: 'blue',
          //   data: getData(99999, timeRange)
          // }
        ];

        var ctx2 = document.getElementById("myChartWithDates").getContext("2d");
        var myDateLineChart = new Chart(ctx2).Scatter(data, {
          bezierCurve: true,
          showTooltips: true,
          scaleShowHorizontalLines: true,
          scaleShowLabels: true,
          scaleType: "date",
          scaleLabel: "<%=value%> g"
        });

      };
      if ($scope.stateName == 'progress') {
        $scope.drawScatter('all');
      }

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
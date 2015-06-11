angular.module('carbonCalculator')
  .controller('ProgressCtrl', [
    '$scope',
    '$state',
    'Auth',
    'posts',
    function($scope, $state, Auth, posts) {

      $scope.options = {
        chart: {
          type: 'lineWithFocusChart',
          height: 450,
          margin: {
            top: 20,
            right: 20,
            bottom: 60,
            left: 40
          },
          transitionDuration: 500,
          xAxis: {
            axisLabel: 'X Axis',
            tickFormat: function(d) {
              return d3.format(',f')(d);
            }
          },
          x2Axis: {
            tickFormat: function(d) {
              return d3.format(',f')(d);
            }
          },
          yAxis: {
            axisLabel: 'Y Axis',
            tickFormat: function(d) {
              return d3.format(',.2f')(d);
            },
            rotateYLabel: false
          },
          y2Axis: {
            tickFormat: function(d) {
              return d3.format(',.2f')(d);
            }
          }

        }
      };

      $scope.data = [
        {
          "key": "Stream0",
          "values": [{
            "x": 0,
            "y": 0.7036656858543312,
            "series": 0
          }, {
            "x": 1,
            "y": 1.2631450694622046,
            "series": 0
          }, {
            "x": 2,
            "y": 2.0286948665163194,
            "series": 0
          }, {
            "x": 3,
            "y": 3.0181847814719958,
            "series": 0
          }, {
            "x": 4,
            "y": 4.215065286867839,
            "series": 0
          }, {
            "x": 5,
            "y": 5.432458900640525,
            "series": 0
          }, {
            "x": 6,
            "y": 6.38531025182084,
            "series": 0
          }, {
            "x": 7,
            "y": 7.021250781039253,
            "series": 0
          }, {
            "x": 8,
            "y": 7.194165034852128,
            "series": 0
          }, {
            "x": 9,
            "y": 6.646440964718964,
            "series": 0
          }, {
            "x": 10,
            "y": 5.798670521957729,
            "series": 0
          }, {
            "x": 11,
            "y": 4.614176279596826,
            "series": 0
          }, {
            "x": 12,
            "y": 3.5371423417545,
            "series": 0
          }, {
            "x": 13,
            "y": 2.621819352130204,
            "series": 0
          }, {
            "x": 14,
            "y": 2.0533932677181284,
            "series": 0
          }, {
            "x": 15,
            "y": 1.6930352922015937,
            "series": 0
          }, {
            "x": 16,
            "y": 1.5083436143044213,
            "series": 0
          }, {
            "x": 17,
            "y": 1.5915730377048505,
            "series": 0
          }, {
            "x": 18,
            "y": 1.7145250577513034,
            "series": 0
          }, {
            "x": 19,
            "y": 1.8310718318904948,
            "series": 0
          }, {
            "x": 20,
            "y": 1.946890908660515,
            "series": 0
          }, {
            "x": 21,
            "y": 2.0528271258494035,
            "series": 0
          }, {
            "x": 22,
            "y": 2.031242185549433,
            "series": 0
          }, {
            "x": 23,
            "y": 2.0451844772202135,
            "series": 0
          }, {
            "x": 24,
            "y": 1.8730149443388175,
            "series": 0
          }, {
            "x": 25,
            "y": 1.7397254220968128,
            "series": 0
          }, {
            "x": 26,
            "y": 1.542720643773732,
            "series": 0
          }, {
            "x": 27,
            "y": 1.3558656786405332,
            "series": 0
          }, {
            "x": 28,
            "y": 1.0572340811508234,
            "series": 0
          }, {
            "x": 29,
            "y": 0.8633718046319815,
            "series": 0
          }, {
            "x": 30,
            "y": 0.6910456547383428,
            "series": 0
          }, {
            "x": 31,
            "y": 0.5587896189580009,
            "series": 0
          }, {
            "x": 32,
            "y": 0.42652756603967074,
            "series": 0
          }, {
            "x": 33,
            "y": 0.2896581487145372,
            "series": 0
          }, {
            "x": 34,
            "y": 0.2508321891749544,
            "series": 0
          }, {
            "x": 35,
            "y": 0.1929699352362657,
            "series": 0
          }, {
            "x": 36,
            "y": 0.18836050845133717,
            "series": 0
          }, {
            "x": 37,
            "y": 0.21128593582743518,
            "series": 0
          }, {
            "x": 38,
            "y": 0.21231208570968743,
            "series": 0
          }, {
            "x": 39,
            "y": 0.18911483040108654,
            "series": 0
          }, {
            "x": 40,
            "y": 0.1146835238389735,
            "series": 0
          }, {
            "x": 41,
            "y": 0.12427331867198725,
            "series": 0
          }, {
            "x": 42,
            "y": 0.19500319441378688,
            "series": 0
          }, {
            "x": 43,
            "y": 0.1484377798429865,
            "series": 0
          }, {
            "x": 44,
            "y": 0.10813425439081416,
            "series": 0
          }, {
            "x": 45,
            "y": 0.1810106893853151,
            "series": 0
          }, {
            "x": 46,
            "y": 0.16970141818674295,
            "series": 0
          }, {
            "x": 47,
            "y": 0.136711978476416,
            "series": 0
          }, {
            "x": 48,
            "y": 0.14556061562345954,
            "series": 0
          }, {
            "x": 49,
            "y": 0.1413055907604431,
            "series": 0
          }, {
            "x": 50,
            "y": 0.19643188620157395,
            "series": 0
          }, {
            "x": 51,
            "y": 0.1617376532891866,
            "series": 0
          }, {
            "x": 52,
            "y": 0.1457321187544299,
            "series": 0
          }, {
            "x": 53,
            "y": 0.13953851351883143,
            "series": 0
          }, {
            "x": 54,
            "y": 0.165562909200673,
            "series": 0
          }, {
            "x": 55,
            "y": 0.10165180202348288,
            "series": 0
          }, {
            "x": 56,
            "y": 0.18558537985613588,
            "series": 0
          }, {
            "x": 57,
            "y": 0.19840010744839803,
            "series": 0
          }, {
            "x": 58,
            "y": 0.16387953756935725,
            "series": 0
          }, {
            "x": 59,
            "y": 0.17255467266374896,
            "series": 0
          }, {
            "x": 60,
            "y": 0.16648499439833006,
            "series": 0
          }, {
            "x": 61,
            "y": 0.12774008177307467,
            "series": 0
          }, {
            "x": 62,
            "y": 0.15160681270082882,
            "series": 0
          }, {
            "x": 63,
            "y": 0.1773432898568881,
            "series": 0
          }, {
            "x": 64,
            "y": 0.1944987168736064,
            "series": 0
          }, {
            "x": 65,
            "y": 0.11458850562219115,
            "series": 0
          }, {
            "x": 66,
            "y": 0.19388194563999642,
            "series": 0
          }, {
            "x": 67,
            "y": 1.8195415034595122,
            "series": 0
          }, {
            "x": 68,
            "y": 2.0200724502505674,
            "series": 0
          }]
        }, {
          "key": "Stream1",
          "values": [{
            "x": 0,
            "y": 0.1727436150731444,
            "series": 1
          }, {
            "x": 1,
            "y": 0.17715630805065227,
            "series": 1
          }, {
            "x": 2,
            "y": 0.143898850128686,
            "series": 1
          }, {
            "x": 3,
            "y": 0.10235243343399918,
            "series": 1
          }, {
            "x": 4,
            "y": 0.10744820066590259,
            "series": 1
          }, {
            "x": 5,
            "y": 0.1847520235496202,
            "series": 1
          }, {
            "x": 6,
            "y": 0.1512038461344093,
            "series": 1
          }, {
            "x": 7,
            "y": 0.16836413888171986,
            "series": 1
          }, {
            "x": 8,
            "y": 0.21196032018004143,
            "series": 1
          }, {
            "x": 9,
            "y": 0.27872169174267425,
            "series": 1
          }, {
            "x": 10,
            "y": 0.7311577924316132,
            "series": 1
          }, {
            "x": 11,
            "y": 1.66384165124206,
            "series": 1
          }, {
            "x": 12,
            "y": 2.285364601200654,
            "series": 1
          }, {
            "x": 13,
            "y": 1.8207449397375686,
            "series": 1
          }, {
            "x": 14,
            "y": 0.8796461910359792,
            "series": 1
          }, {
            "x": 15,
            "y": 0.31089121202109815,
            "series": 1
          }, {
            "x": 16,
            "y": 0.22148384267287105,
            "series": 1
          }, {
            "x": 17,
            "y": 0.16146949383341688,
            "series": 1
          }, {
            "x": 18,
            "y": 0.18195535949200503,
            "series": 1
          }, {
            "x": 19,
            "y": 0.3013450779995651,
            "series": 1
          }, {
            "x": 20,
            "y": 0.42539210331582733,
            "series": 1
          }, {
            "x": 21,
            "y": 0.6349411660137849,
            "series": 1
          }, {
            "x": 22,
            "y": 0.9472026211898787,
            "series": 1
          }, {
            "x": 23,
            "y": 1.4418852133695161,
            "series": 1
          }, {
            "x": 24,
            "y": 2.1496243315794548,
            "series": 1
          }, {
            "x": 25,
            "y": 3.116118327227806,
            "series": 1
          }, {
            "x": 26,
            "y": 4.163575090083931,
            "series": 1
          }, {
            "x": 27,
            "y": 5.245794904772654,
            "series": 1
          }, {
            "x": 28,
            "y": 6.233693429143809,
            "series": 1
          }, {
            "x": 29,
            "y": 6.966623444245285,
            "series": 1
          }, {
            "x": 30,
            "y": 7.308649277433077,
            "series": 1
          }, {
            "x": 31,
            "y": 7.267241973193244,
            "series": 1
          }, {
            "x": 32,
            "y": 6.811513896997977,
            "series": 1
          }, {
            "x": 33,
            "y": 5.965593720390623,
            "series": 1
          }, {
            "x": 34,
            "y": 4.870753157575422,
            "series": 1
          }, {
            "x": 35,
            "y": 3.805390030099913,
            "series": 1
          }, {
            "x": 36,
            "y": 2.814484952296248,
            "series": 1
          }, {
            "x": 37,
            "y": 1.993808028937918,
            "series": 1
          }, {
            "x": 38,
            "y": 1.26078489765155,
            "series": 1
          }, {
            "x": 39,
            "y": 0.8649886096614414,
            "series": 1
          }, {
            "x": 40,
            "y": 0.5384424977668075,
            "series": 1
          }, {
            "x": 41,
            "y": 0.35888448880642143,
            "series": 1
          }, {
            "x": 42,
            "y": 0.2525828114374128,
            "series": 1
          }, {
            "x": 43,
            "y": 0.17663040306006095,
            "series": 1
          }, {
            "x": 44,
            "y": 0.1606162349364276,
            "series": 1
          }, {
            "x": 45,
            "y": 0.2027512489462328,
            "series": 1
          }, {
            "x": 46,
            "y": 0.15703303409712366,
            "series": 1
          }, {
            "x": 47,
            "y": 0.18770187273338568,
            "series": 1
          }, {
            "x": 48,
            "y": 0.15501938097985127,
            "series": 1
          }, {
            "x": 49,
            "y": 0.18143837999308177,
            "series": 1
          }, {
            "x": 50,
            "y": 0.14297952972306907,
            "series": 1
          }, {
            "x": 51,
            "y": 0.12622207829691912,
            "series": 1
          }, {
            "x": 52,
            "y": 0.17851315173246263,
            "series": 1
          }, {
            "x": 53,
            "y": 0.13388350543067012,
            "series": 1
          }, {
            "x": 54,
            "y": 0.1166042098237345,
            "series": 1
          }, {
            "x": 55,
            "y": 0.16300643184235034,
            "series": 1
          }, {
            "x": 56,
            "y": 0.1859064202131283,
            "series": 1
          }, {
            "x": 57,
            "y": 0.19271546564459582,
            "series": 1
          }, {
            "x": 58,
            "y": 0.15576072498285326,
            "series": 1
          }, {
            "x": 59,
            "y": 0.15428151985054236,
            "series": 1
          }, {
            "x": 60,
            "y": 0.1478388796728425,
            "series": 1
          }, {
            "x": 61,
            "y": 0.13588298739376778,
            "series": 1
          }, {
            "x": 62,
            "y": 0.19794139438252234,
            "series": 1
          }, {
            "x": 63,
            "y": 0.19784649495857565,
            "series": 1
          }, {
            "x": 64,
            "y": 0.106394538677588,
            "series": 1
          }, {
            "x": 65,
            "y": 0.18878926533239423,
            "series": 1
          }, {
            "x": 66,
            "y": 0.19857373197280112,
            "series": 1
          }, {
            "x": 67,
            "y": 0.16259183955530165,
            "series": 1
          }, {
            "x": 68,
            "y": 0.1809919189833463,
            "series": 1
          }]
        }
      ]







      /* Random Data Generator (took from nvd3.org) */
      function generateData() {
        return stream_layers(3, 10 + Math.random() * 200, .1).map(function(data, i) {
          return {
            key: 'Stream' + i,
            values: data
          };
        });
      }

      /* Inspired by Lee Byron's test data generator. */
      function stream_layers(n, m, o) {
        if (arguments.length < 3) o = 0;

        function bump(a) {
          var x = 1 / (.1 + Math.random()),
            y = 2 * Math.random() - .5,
            z = 10 / (.1 + Math.random());
          for (var i = 0; i < m; i++) {
            var w = (i / m - y) * z;
            a[i] += x * Math.exp(-w * w);
          }
        }
        return d3.range(n).map(function() {
          var a = [],
            i;
          for (i = 0; i < m; i++) a[i] = o + o * Math.random();
          for (i = 0; i < 5; i++) bump(a);
          return a.map(stream_index);
        });
      }

      /* Another layer generator using gamma distributions. */
      function stream_waves(n, m) {
        return d3.range(n).map(function(i) {
          return d3.range(m).map(function(j) {
            var x = 20 * j / m - i / 3;
            return 2 * x * Math.exp(-.5 * x);
          }).map(stream_index);
        });
      }

      function stream_index(d, i) {
        return {
          x: i,
          y: Math.max(0, d)
        };
      }






      // //scatterplot graph

      // var getData = function() {
      //   var result = [{
      //           x: new Date('2011-04-11T17:00:00'),
      //           y: 25
      //         }];

      //   angular.forEach(posts.footprints, function(footprint) {
      //     result.unshift({
      //       x: new Date(footprint.created_at),
      //       y: Math.floor(footprint.co2_output / 1000)
      //     })
      //   });

      //   return result;
      // };

      // var drawScatter = function() {
      //   Chart.defaults.global.responsive = true;
      //   Chart.defaults.global.animation = false;



      //   var data3 = [
      //     {
      //       label: 'daily average footprint',
      //       strokeColor: '#A31515',
      //       data: getData()
      //     }];

      //   var ctx2 = document.getElementById("myChartWithDates").getContext("2d");
      //   var myDateLineChart = new Chart(ctx2).Scatter(data3, {
      //     bezierCurve: true,
      //     showTooltips: true,
      //     scaleShowHorizontalLines: true,
      //     scaleShowLabels: true,
      //     scaleType: "date",
      //     scaleLabel: "<%=value%> kg"
      //   });

      // };
      // drawScatter();

      // //angular charts graph
      // $scope.logScale = true;

      // //$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
      // $scope.series = ['Daily Average Footprints'];
      // //$scope.data = [[65, 59, 80, 81, 56, 55, 40]];

      // $scope.setGraphData = function() {      
      //   $scope.myData = [];
      //   $scope.myDates = [];
      //   $scope.myLabels = [];

      //   angular.forEach($scope.footprints, function(footprint) {
      //     var c = footprint.co2_output;
      //     if ($scope.logScale) { c = Math.log(c) }
      //     $scope.myData.unshift(Math.round(c));
      //     var d = new Date(footprint.created_at);
      //     $scope.myDates.unshift(d);
      //     $scope.myLabels.unshift("label");
      //   });

      //   $scope.data = [$scope.myData]
      //   $scope.labels = $scope.myLabels
      // };
      // $scope.setGraphData();

      // $scope.onClick = function (points, evt) {
      //   console.log(points, evt);
      // };

    }
  ]);


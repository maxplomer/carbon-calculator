(function() {
    var orig = angular.module;
    angular.modules = [];
    angular.module = function() {
        var args = Array.prototype.slice.call(arguments);
        if (arguments.length > 1) {
            angular.modules.push(arguments[0]);
        }
        return orig.apply(null, args);
    }
})();


angular.module('carbonCalculator', ['ui.router', 'templates', 'Devise', 'chart.js', 'ngAnimate'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl',
          resolve: {
            postPromise: ['posts', function(posts){
              return posts.getAll();
            }]
          },
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              $state.go('dashboard');
            })
          }]
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: 'posts/_posts.html',
          controller: 'PostsCtrl',
          resolve: {
            post: ['$stateParams', 'posts', function($stateParams, posts) {
              return posts.get($stateParams.id);
            }]
          }
        })
        .state('dashboard', {
          url: '/home',
          templateUrl: 'dashboard/_dashboard.html',
          controller: 'DashboardCtrl',
          resolve: {
            postPromise: ['posts', function(posts){
              return posts.getMyPosts();
            }]
          },
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              console.log('logged in')
            })
          }]
        })
        .state('progress', {
          url: '/progress',
          templateUrl: 'dashboard/_progress.html',
          controller: 'ProgressCtrl',
          resolve: {
            postPromise: ['posts', function(posts){
              return posts.getMyPosts();
            }]
          },
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              console.log('logged in')
            })
          }]
        })

      $urlRouterProvider.otherwise('/');
      
    }
  ]);
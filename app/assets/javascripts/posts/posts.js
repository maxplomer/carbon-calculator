angular.module('carbonCalculator')
  .factory('posts', ['$http', function($http) {

    var o = {posts: [], footprints: []};

    o.createFootprint = function(footprint) {
      return $http.post('/footprints', footprint).success(function(data){
        o.footprints.push(data.footprint);
      });
    };

    o.getMyPosts = function() {
      return $http.get('/my_posts').success(function(data){
        angular.copy(data.my_posts, o.posts);
      });
    };

    o.getAll = function() {
      return $http.get('/posts').success(function(data){
        angular.copy(data.posts, o.posts);
      });
    };

    o.create = function(post) {
      return $http.post('/posts', post).success(function(data){
        o.posts.push(data.post);
      });
    };

    o.get = function(id) {
      return $http.get('/posts/' + id).then(function(res){
        return res.data.post;
      });
    };

    return o;

  }]);
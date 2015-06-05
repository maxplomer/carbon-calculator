angular.module('carbonCalculator')
  .factory('posts', ['$http', function($http) {

    var o = {posts: []};

    o.getMyPosts = function() {
      return $http.get('/my_posts').success(function(data){
        angular.copy(data.posts, o.posts);
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
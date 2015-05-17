angular.module('carbonCalculator')
  .factory('posts', ['$http', function($http) {

    var o = {posts: []};

    o.getAll = function() {
      return $http.get('/posts.json').success(function(data){
        angular.copy(data.posts, o.posts);
      });
    };

    o.create = function(post) {
      return $http.post('/posts.json', post).success(function(data){
        o.posts.push(data.post);
      });
    };

    o.get = function(id) {
      return $http.get('/posts/' + id + '.json').then(function(res){
        return res.data.post;
      });
    };

    return o;

  }]);
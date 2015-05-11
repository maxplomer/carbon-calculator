angular.module('carbonCalculator')
  .factory('posts', ['$http', function($http) {

    var o = {
      posts: [{
        title: 'sample post',
        link: '',
        upvotes: 0,
        comments: [{
          author: 'Joe',
          body: 'Cool post!',
          upvotes: 0
        }]
      }]
    };

    o.getAll = function() {
      return $http.get('/posts.json').success(function(data){
        angular.copy(data, o.posts);
      });
    };

    return o;

  }]);
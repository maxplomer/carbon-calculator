angular.module('carbonCalculator')
  .factory('posts', [function() {

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

    return o;

  }]);
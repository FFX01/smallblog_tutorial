Blog.factory('Post', function(Restangular){
  var Post;
  Post = {
    get: function(){
      return Restangular.one('Posts').getList();
    },
    create: function(data){
      return Restangular.one('Posts').customPOST(data);
    }
  };
  return Post;
})

Blog.factory('User', function(Restangular){
  var User;
  User = {
    create: function(user){
      return Restangular.one('users').customPost(user);
    }
  };
  return User;
})

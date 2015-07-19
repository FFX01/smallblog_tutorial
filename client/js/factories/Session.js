Blog.factory('Session', function(Restangular){
  var session;
  Session = {
    create: function(data, bypassErrorInterceptor){
      return Restangular.one('sessions').withHttpConfig({bypassErrorInterceptor: bypassErrorInterceptor}).customPOST(data);
    }
  };
  return Session;
})

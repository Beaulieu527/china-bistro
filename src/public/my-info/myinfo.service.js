(function() {
  "use strict";

  angular.module('public')
  .service('MyInfoService', MyInfoService);

 
  function MyInfoService() {
    var service = this;
    service.foundItems = undefined;
    service.userdetails = undefined;

    service.setInfo = function(user,shortName)  {
      service.userdetails = user;
      console.log("uservice.serdetails", service.userdetails);
      service.foundItems = shortName;console.log("In My info service found Items ", service.foundItems);
    };

    service.getInfo = function()  {
      return service.foundItems;
    };

    service.getUserInfo = function()  {
      return service.userdetails;
    };

    service.getIsSignedUp = function()  {console.log("Userdetails is ", service.userdetails );
      if(service.userdetails === undefined) {
        return false;

      }

      else{
        return true;
      }
    };
  }
})();
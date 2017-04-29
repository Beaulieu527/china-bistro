(function() {
  "use strict";

  angular.module('common')
  .service('SignUpService', SignUpService);

  SignUpService.$inject = ['$http','ApiPath'];
  function SignUpService($http, ApiPath) {
    var service = this;
    var foundItems = [];
    service.getItemsByShortName = function(shortName)  {
     
      return $http.get(ApiPath + '/menu_items/'+shortName+'.json').then(function(response) {
        foundItems = response.data;
        return foundItems;
      }).catch(function(error)  {
        throw error;

      });
    };
  }
})();
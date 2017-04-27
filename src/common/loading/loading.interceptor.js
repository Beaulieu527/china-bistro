(function() {
  "use strict";

  angular.module('common')
  .factory('loadingHttpInterceptor', LoadingHttpInterceptor);

  LoadingHttpInterceptor.$inject = ['$rootScope', '$q'];

  function LoadingHttpInterceptor($rootScope, $q) {

    var loadingCount = 0;//if few requests happen at same time then turn off when first request came back and second is pending
    var loadingEventName = 'spinner:activate';

    return{//when http service makes a request it first goes to this function below
      request: function(config) {//config- everything needed for http service to make the request
        /*console.log("Inside interceptor config", config);*/
        if(++loadingCount ===1) {//to take care of multiple requests
          $rootScope.$broadcast(loadingEventName, {on:true});
        }//boradcast loading event with value is true

        return config;
      },
      //when response comes back, this is called
      response: function(response)  {
        if(--loadingCount === 0)  {
          $rootScope.$broadcast(loadingEventName, {on:false});
        }//false to turn off

        return response;
      },    

      responseError: function(response)  {
        if(--loadingCount === 0)  {
          $rootScope.$broadcast(loadingEventName, {on:false});
        }//false to turn off

        return $q.reject(response);//if error then reject that response
      }   //reject promise because if not then look like promise resovled succesfully.

    };
  }

})();
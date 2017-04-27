(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,//abstract- never go directly, parent which can just be inherited and shared
      templateUrl: 'src/public/public.html'//this will be injected to ui view in index.html
    })
    .state('public.home', {//child injecting template into public.html
      url: '/',
      templateUrl: 'src/public/home/home.html'
    });
}
})();

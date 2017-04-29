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
    })


    .state('public.menu', {//child injecting template into public.html
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller:'MenuController',
      controllerAs: 'menuCtrl',
      resolve:{  
        menuCategories: ['MenuService', function(MenuService){
          return MenuService.getCategories();
        }]
      }


    })

    .state('public.menuitems',  {
      url:'/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller:'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve:{
        menuItems: ['$stateParams','MenuService', function($stateParams,MenuService)  {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })

    .state('public.signUp', {
      url: '/signUp',
      templateUrl: 'src/public/sign-up/signup.html',
      controller:'SignUpController',
      controllerAs: 'signupCtrl'
      
    })

    .state('public.myInfo', {
      url: '/myInfo',
      templateUrl: 'src/public/my-info/myInfo.html',
      controller:'MyInfoController',
      controllerAs: 'myinfoCtrl'
      
    });
}
})();

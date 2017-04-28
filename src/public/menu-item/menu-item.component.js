(function() {
  "use strict";

  angular.module('public')
  .component('menuItem', {//since menu-item.html is a template for component, we dont need to give controlleras syntax since it will use $ctrl
    templateUrl: 'src/public/menu-item/menu-item.html',
    bindings:{
      menuItem:'<'
    },
    controller: MenuItemController
  });

  MenuItemController.$inject = ['ApiPath'];
  function MenuItemController(ApiPath)  {
    var $ctrl =  this;
    $ctrl.basePath = ApiPath; 
  }
})();
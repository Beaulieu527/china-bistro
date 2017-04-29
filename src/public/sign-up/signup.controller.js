(function() {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService'];
  function SignUpController(SignUpService) {
    var $ctrl = this;
      

    $ctrl.submit = function() {
      console.log("$ctrl.user.favMenu", $ctrl.user.favMenu);
      var menuItems = SignUpService.getItemsByShortName($ctrl.user.favMenu).catch(function(e) {
        $ctrl.isInvalidItem = true;
      });
      console.log("menuItems", menuItems);
      
      $ctrl.completed = true;

    };

    $ctrl.validateFavItem = function()  {
      $ctrl.isInvalidItem = false;

      SignUpService.getItemsByShortName($ctrl.user.favMenu).catch(function(e) {
         $ctrl.isInvalidItem = true;
      });
     
    };


  }
})();
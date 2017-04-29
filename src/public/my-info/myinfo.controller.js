(function() {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MyInfoService'];
  function MyInfoController(MyInfoService) {
    var $ctrl = this;
    $ctrl.foundItems = MyInfoService.getInfo();
    $ctrl.userInfo = MyInfoService.getUserInfo();
    $ctrl.signedUp = MyInfoService.getIsSignedUp();
    console.log("foundItems in Info COntroller are", $ctrl.foundItems);
    


    


  }
})();
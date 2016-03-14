(function(){
    "use strict";

    angular
      .module("ngClassifieds")
      .controller("ngclassCtrl", function($scope){

          $scope.name = {
            fname: 'Ruslan',
            lname: 'Kiricenko'
          }

          $scope.message = "Hello World!!!";
      });

})();

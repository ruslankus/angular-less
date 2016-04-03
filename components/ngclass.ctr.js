(function(){
    "use strict";

    angular
      .module("ngClassifieds")
      .controller("ngclassCtrl", function($scope,classFactory,$mdSidenav){
		
       classFactory.getClassifieds().then(function(returnData){
            //console.log(data);
            $scope.classifieds = returnData.data;             
        });
        
		$scope.openSidebar = function() {          
          $mdSidenav('left').open();
        };
        
        $scope.closeSidebar = function() {          
          $mdSidenav('left').close();
        };
        
			          
      });

})();

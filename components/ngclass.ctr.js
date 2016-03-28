(function(){
    "use strict";

    angular
      .module("ngClassifieds")
      .controller("ngclassCtrl", function($scope,classFactory){
		
       classFactory.getClassifieds().then(function(returnData){
            //console.log(data);
            $scope.classifieds = returnData.data; 
            
        });
        
		
			          
      });

})();

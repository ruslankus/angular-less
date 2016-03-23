(function(){
    "use strict";

    angular
      .module("ngClassifieds")
      .controller("ngclassCtrl", function($scope, $http){
		
        $http.get('/data/data.json').then(function(returnData){
            //console.log(data);
            $scope.classifieds = returnData.data; 
            
        });
        
		
			          
      });

})();

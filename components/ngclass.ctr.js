(function(){
    "use strict";

    angular
      .module("ngClassifieds")
      .controller("ngclassCtrl", function($scope,classFactory,$mdSidenav,$mdToast,$mdDialog){
		
       classFactory.getClassifieds().then(function(returnData){
            //console.log(data);
            $scope.classifieds = returnData.data;
            $scope.categories = getCategories(returnData.data);             
        });
        
        var contact = {
          name:"Vasia Pupkin",
          phone:"(555)-555-555",
          email:"vasia@pupkin.com"
        }
        
        
        
        
		    $scope.openSidebar = function() {          
          $mdSidenav('left').open();
        };
        
        $scope.closeSidebar = function() {          
          $mdSidenav('left').close();
          $scope.classified = {};
        };
        
        
        $scope.saveClassified = function(classified){
          if(classified){
            classified.contact = contact;
            $scope.classifieds.push(classified);
            $scope.classified = {};
            $scope.closeSidebar();
            
            showToast("Classified Saved!");            
          }
        };
        
        
        $scope.editClassified = function(classified) {
           $scope.edit = true;
           $scope.classified = classified;
           $scope.openSidebar();          
        };
        
        
        $scope.saveEdit = function(){
          $scope.edit = false;
          $scope.classified = {};
          $scope.closeSidebar();
          
          showToast("Classified chages saved!")
        };
        
        
        $scope.deleteClassified = function(event, classified){
          var confirm = $mdDialog.confirm()
            .title("Delete "+ classified.title + '?')
            .textContent("Are you sure")
            .targetEvent(event)
            .ok("Delete")
            .cancel("Cancel");
          
          $mdDialog.show(confirm).then(function(){
            var index = $scope.classifieds.indexOf(classified);
             $scope.classifieds.splice(index,1);
          }, function(){
            
          });
          
          
        };
        
        
        function showToast(message){
          $mdToast.show(
              $mdToast.simple()
                .content(message)
                .position('top, right')
                .hideDelay(3000)
            );
        }
        
        
        function getCategories(classifieds){
          var categories = [];
          
          angular.forEach(classifieds, function(item){
            angular.forEach(item.categories, function(category){
              categories.push(category);
            })
          });
          
          return _.uniq(categories);
        }
        
        
        
			          
      });

})();

(function(){
    
    "use strict";
    
    angular.
        module('ngClassifieds').
        factory('classFactory', function($http){
            
            function getClassifieds(){
                return $http.get('data/data.json');
            }
            
            return {
                getClassifieds: getClassifieds
            }
            
        })
    
    
})();
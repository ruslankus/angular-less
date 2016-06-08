(function(){    
    "use strict";
    
    angular.
        module('ngClassifieds').
        factory('classFactory', function($http, $firebaseArray){
            
            var ref = new Firebase('https://ruslan.firebaseio.com/');
            console.log($firebaseArray(ref))
            return {
                ref: $firebaseArray(ref)
            }
            
        })
    
    
})();
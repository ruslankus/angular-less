(function () {

    "use strict";
    
    angular
        .module('ngClassifieds')
        .controller('newClassCtrl', function ($scope, $state, $mdSidenav, $timeout, $mdDialog, classFactory) {

            var vm = this;
            vm.closeSidebar = closeSidebar;
            vm.saveClassified = saveClassified;
            //vm.sidenavOpen = false;

            $timeout(function(){
                $mdSidenav('left').open()

            },500);


            $scope.$watch('vm.sidenavOpen', function(sidenav){

                console.log(sidenav);

                if(sidenav == false){
                    $mdSidenav('left')
                        .close()
                        .then(function () {
                            $state.go('classifieds');
                        })


                }
            });


            function closeSidebar() {
                vm.sidenavOpen = false;
            }


            function saveClassified(classified){
                if(classified){

                    classified.contact = {
                        name:"Vasia Pupkin",
                        phone:"(555)-555-555",
                        email:"vasia@pupkin.com"
                    };

                    $scope.$emit('newClassified', classified);
                    vm.sidenavOpen = false;
                }
            }



        })
    

})();

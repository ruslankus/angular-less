
(function () {

    "use strict";

    angular
        .module('ngClassifieds')
        .controller('editClassCtrl', function ($scope, $state, $mdSidenav, $timeout, $mdDialog, classFactory) {

            var vm = this;
            vm.classifieds = classFactory.ref;
            vm.closeSidebar = closeSidebar;
            vm.saveEdit = saveEdit;
            vm.classified = vm.classifieds.$getRecord($state.params.id);
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


            function saveEdit(){
                vm.classifieds.$save(vm.classified);
                $scope.$emit('editSaved','Edit saved!');
                vm.sidenavOpen = false;
            }



        })


})();

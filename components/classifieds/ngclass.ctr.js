(function(){
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("ngclassCtrl", function($scope,classFactory,$mdSidenav,$state,$mdToast,$mdDialog,$http){

            var vm = this;
            vm.classifieds;
            vm.classified;
            vm.categories;
            vm.closeSidebar = closeSidebar;
            vm.deleteClassified = deleteClassified;
            vm.edit;
            vm.editClassified = editClassified;
            vm.openSidebar = openSidebar;
            vm.saveClassified = saveClassified;
            vm.saveEdit = saveEdit;


            vm.classifieds = classFactory.ref;
            vm.classifieds.$loaded().then(function(classifieds){
               vm.categories = getCategories(classifieds);
            });
            

            $scope.$on('newClassified', function(event, classified){

                vm.classifieds.$add(classified)
                showToast('Classified Added!')
            });

            $scope.$on('editSaved', function(event, classified){
               showToast(classified);
            });


            var contact = {
                name:"Vasia Pupkin",
                phone:"(555)-555-555",
                email:"vasia@pupkin.com"
            };




            function openSidebar() {
                $state.go('classifieds.new');
            };

            function closeSidebar() {
                $mdSidenav('left').close();
                vm.classified = {};
            };


            function saveClassified(classified){
                if(classified){
                    classified.contact = contact;
                    vm.classifieds.push(classified);
                    vm.classified = {};
                    closeSidebar();

                    showToast("Classified Saved!");
                }
            };


            function editClassified(classified) {
                console.log(classified);
                $state.go('classifieds.edit', {
                    id: classified.$id                    
                });
            };


            function saveEdit() {
                vm.edit = false;
                vm.classified = {};
                closeSidebar();

                showToast("Classified chages saved!")
            };


            function deleteClassified(event, classified){
                var confirm = $mdDialog.confirm()
                .title("Delete "+ classified.title + '?')
                .textContent("Are you sure")
                .targetEvent(event)
                .ok("Delete")
                .cancel("Cancel");

                $mdDialog.show(confirm).then(function(){

                    vm.classifieds.$remove(classified);
                    showToast("Classified deleted!")
                },
                function(){

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


        });//controller

})();

(function () {

    "use strict"

    angular
        .module('ngClassifieds')
        .directive('classified-card', function () {

            var ret = {
                templateUrl: "components/classifieds/card/classified-card.tpl.html",

                scope: {
                    classifieds: "=classifieds"
                },

                controller: classifiedCardController,
                controllerAs: "vm"
            };

            console.log(ret);
            return ret;
            
            
            function classifiedCardController() {

                var vm = this;
                vm.editClassified = editClassified;
                vm.deleteClassified = deleteClassified;

                function editClassified(classified) {
                    console.log(classified);
                    $state.go('classifieds.edit', {
                        id: classified.$id
                    });
                };


                function deleteClassified(event, classified) {
                    var confirm = $mdDialog.confirm()
                        .title("Delete " + classified.title + '?')
                        .textContent("Are you sure")
                        .targetEvent(event)
                        .ok("Delete")
                        .cancel("Cancel");

                    $mdDialog.show(confirm).then(function () {

                            vm.classifieds.$remove(classified);
                            showToast("Classified deleted!")
                        },
                        function () {

                        });

                }//deleteClassified


                function showToast(message){
                    $mdToast.show(
                        $mdToast.simple()
                            .content(message)
                            .position('top, right')
                            .hideDelay(3000)
                    );
                }//showToast



            }//classifiedCardController


        })

});
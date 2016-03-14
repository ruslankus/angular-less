angular
  .module("ngClassifieds", [])
  .config(function(){

  }).directive("helloWorld", function(){

    return {

      template: "<h1>{{ message }}</h1>"

    }

  });

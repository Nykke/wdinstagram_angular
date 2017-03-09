"use strict";


  angular
    .module("wdinstagram", [
          "ui.router"
  ])
    .config([
        "$stateProvider",
        RouterFunction
      ])
    .controller("WdInstaIndexController", [
          WdInstaIndexControllerFunction
    ])
    .controller("WdInstaShowController", [
      WdInstaShowControllerFunction
    ])

    function RouterFunction($stateProvider) {
      $stateProvider
        .state("wdinstaIndex", {
          url: "/wdinstagrams",
          templateUrl: "js/ng-views/index.html",
          controller: "WdInstaIndexController",
          controllerAs: "vm"
        })
        .state("wdinstaShow", {
          url: "/wdinstagrams/:id",
          templateUrl: "js/ng-views/show.html",
          controller: "WdInstaShowController",
          controllerAs: "vm"
        })
    }



    function WdInstaIndexControllerFunction () {
      this.wdinstagrams = wdinstagrams

    }

    function WdInstaShowControllerFunction ($stateParams) {
      this.wdinstagram = wdinstagrams[$stateParams.id]
    }

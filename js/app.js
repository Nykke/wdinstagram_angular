"use strict";


  angular
    .module("wdinstagram", [
          "ui.router",
          "ngResource"
  ])
    .config([
        "$stateProvider",
        RouterFunction
      ])
      .factory("WdInstaFactory", [
        "$resource",
        WdInstaFactoryFunction
      ])
    .controller("WdInstaIndexController", [
          "WdInstaFactory",
          WdInstaIndexControllerFunction
    ])
    .controller("WdInstaShowController", [
        "WdInstaFactory",
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

    function WdInstaFactoryFunction( $resource ) {
      return $resource( "http://localhost:3000/entries", {}, {
        update: { method: "PUT" }
      }); 
    }

    function WdInstaIndexControllerFunction ( WdInstaFactory) {
      this.wdinstagrams = WdInstaFactory.query()
      console.log(this.wdinstagrams)
    }

    function WdInstaShowControllerFunction ( WdInstaFactory, $stateParams) {
      this.wdinstagram = WdInstaFactory.get({id: $stateParams.id})
      console.log(this.wdistagram)
    }

﻿(function () {
    "use strict";
    angular.module("app-trips", ["simpleControls", "ngRoute"])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            controller: "tripsController",
            controllerAs: "vm",
            templateUrl: "/views/tripsView.html"
        });

        $routeProvider.when("/editor/:tripname", {
            controller: "tripEditorController",
            controllerAs: "vm",
            templateUrl: "/views/tripEditorView.html"
        });

        $routeProvider.otherwise({
            redirectTo: "/"
        });
    });
})();
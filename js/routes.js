"use strict";
angular.module("dodgeasteroidsApp").config(function ($routeProvider) {
  $routeProvider
    .when("/game", {
      templateUrl: "templates/game.html",
      controller: "GameController"
    })
    .when("/highscores", {
      templateUrl: "templates/high_scores.html",
      controller: "HighscoresController"
    })
    .otherwise({redirectTo: "/game"});
});
"use strict";
angular.module("dodgeasteroidsApp").config(function ($routeProvider) {
  $routeProvider
    .when("/game", {
      templateUrl: "app/views/game.html",
      controller: "GameController"
    })
    .when("/highscores", {
      templateUrl: "app/views/high_scores.html",
      controller: "HighscoresController"
    })
    .otherwise({redirectTo: "/game"});
});
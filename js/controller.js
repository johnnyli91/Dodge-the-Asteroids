"use strict";
angular.module("dodgeasteroidsApp")
//allow cross origin stuff
  .config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .controller("GameController", function ($scope, $http, $window) {

    $scope.game = function () {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

    game.state.add('MainMenu', mainMenu);
    game.state.add('Game', theGame);
    game.state.add('GameOver', gameOver);

    game.state.start('MainMenu');

    }
  })
  .controller("HighscoresController", function ($scope, $http) {
    $http.get('http://localhost:8000/api/play/')
      .success(function (data) {
        $scope.scores = data;
      })
  });

"use strict";
angular.module("dodgeasteroidsApp")
//allow cross origin stuff
  .config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .controller("GameController", function ($scope, $http) {

    $scope.game = function () {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

    game.state.add('MainMenu', mainMenu);
    game.state.add('Instructions', instructions);
    game.state.add('Game', theGame);
    game.state.add('GameOver', gameOver);

    game.state.start('MainMenu');

    }
  })
  .controller("HighscoresController", function ($scope, $http) {
    $http.get('http://ec2-52-10-161-244.us-west-2.compute.amazonaws.com/api/play/')
      .success(function (data) {
        $scope.scores = data;
      })
  });

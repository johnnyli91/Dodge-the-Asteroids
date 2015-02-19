var mainMenu = function(game) {};

mainMenu.prototype = {
  preload: function () {
    this.load.image("star", "img/star.png");
    this.load.image("enemy", "img/asteroid.png");
    this.load.image("start", "img/start.png");
    this.load.image("restart", "img/restart.png");
    this.load.image("instructions", "img/instructions.png");
    this.load.image("back", "img/back.png");
    this.load.image("background", "img/background.png");
    this.load.image("fastEnemy", "img/asteroid1.png");
    this.load.image("slowEnemy", "img/asteroid2.png");
  },

  create: function () {

    this.background = this.game.add.sprite(0, 0, "background");
    this.title = this.game.add.text(400, 250, "Dodge the Asteroids!", {fill: "#fff"});
    this.title.anchor.set(0.5, 0.5);
    this.startButton = this.game.add.button(400,350, "start", this.startGame, this);
    this.startButton.anchor.set(0.5, 0.5);
    this.instructions = this.game.add.button(400, 400, "instructions", this.instruct, this);
    this.instructions.anchor.set(0.5, 0.5);
  },

  startGame: function () {
    this.game.state.start("Game");
  },

  instruct: function () {
    this.game.state.start("Instructions");
  }
};
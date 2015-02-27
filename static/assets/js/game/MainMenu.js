var mainMenu = function(game) {};

mainMenu.prototype = {
  preload: function () {
    this.load.image("star", "assets/img/star.png");
    this.load.image("enemy", "assets/img/asteroid.png");
    this.load.image("start", "assets/img/start.png");
    this.load.image("restart", "assets/img/restart.png");
    this.load.image("instructions", "assets/img/instructions.png");
    this.load.image("back", "assets/img/back.png");
    this.load.image("background", "assets/img/background.png");
    this.load.image("fastEnemy", "assets/img/asteroid1.png");
    this.load.image("slowEnemy", "assets/img/asteroid2.png");
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
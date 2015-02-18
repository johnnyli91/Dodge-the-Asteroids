var mainMenu = function(game) {};

mainMenu.prototype = {
    preload: function() {
        this.load.image('star', 'img/star.png');
        this.load.image('enemy', 'img/asteroid.png');
        this.load.image('start', 'img/start.png');
        this.load.image('restart', 'img/restart.png');
        this.load.image('background', 'img/background.png');
        this.load.image('fastEnemy', 'img/asteroid1.png');
        this.load.image('slowEnemy', 'img/asteroid2.png');
    },

    create: function() {

        this.background = this.game.add.sprite(0, 0, 'background');
        var title = this.game.add.text(400, 250, "Dodge the Asteroids!", {fill: '#fff'});
        title.anchor.set(0.5, 0.5);
        var startButton = this.game.add.button(400,350, 'start', this.startGame, this);
        startButton.anchor.set(0.5, 0.5);
    },

    startGame: function() {
        this.game.state.start("Game", true, false, "");
    }
};
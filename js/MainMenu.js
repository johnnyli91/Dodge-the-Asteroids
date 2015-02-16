var mainMenu = function(game) {};

mainMenu.prototype = {
    preload: function() {
        this.load.image('star', 'img/star.png');
        this.load.image('enemy', 'img/asteroid.png');
        this.load.image('start', 'img/start.png');
        this.load.image('restart', 'img/restart.png');
        this.load.image('background', 'img/background.png');
    },

    create: function() {

        this.background = this.game.add.sprite(0, 0, 'background');
        var title = this.game.add.text(400, 200, "Dodge the Asteroids!", {fill: '#fff'});
        title.anchor.set(0.5, 0.5);
        var startButton = this.game.add.button(400,300, 'start', this.startGame, this);
        startButton.anchor.set(0.5, 0.5);
    },

    startGame: function() {
        this.game.state.start("Game");
    }
};
var gameOver = function(game) {}

gameOver.prototype = {

    init: function(score) {
        this.score = score;
    },

    create: function () {
        this.background = this.game.add.sprite(0, 0, 'background');
        var scoreDisplay = this.game.add.text(400, 250, "You scored: "+ this.score, {fill: '#fff'});
        scoreDisplay.anchor.setTo(0.5, 0.5);
        var playButton = this.game.add.button(400, 350, "restart", this.startGame, this);
        playButton.anchor.setTo(0.5, 0.5);
    },

    startGame: function() {
        this.game.state.start("Game");
    }
}
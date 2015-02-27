var instructions = function(game) {};

instructions.prototype = {
    create: function () {
        this.background = this.game.add.sprite(0, 0, "background");
        this.backButton = this.game.add.button(400, 350, "back", this.back, this);
        this.backButton.anchor.set(0.5, 0.5);
        this.starText = this.game.add.text(400, 200 , "Control the star with the arrow keys and dodge the asteroids.", {font: "18px Arial", fill: "#fff"});
        this.starText.anchor.set(0.5, 0.5);
        this.asteroidText = this.game.add.text(400, 250, "Asteroids will randomly spawn during the game.", {font: "18px Arial", fill: "#fff"});
        this.asteroidText.anchor.set(0.5, 0.5);
    },

    back: function () {
        this.game.state.start("MainMenu");
    }
}
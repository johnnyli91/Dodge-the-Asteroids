var gameOver = function(game) {}

gameOver.prototype = {

  init: function(score) {
    this.score = score;
    $.ajax({
      type: "POST",
      url: "http://ec2-52-10-161-244.us-west-2.compute.amazonaws.com/api/play/create/",
      data: JSON.stringify({"score": this.score, "game":"dodge_the_asteroids"}),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        alert("Error in recording the score. Please try again later.");
      }
    });
  },

  create: function () {
    this.background = this.game.add.sprite(0, 0, 'background');
    var scoreDisplay = this.game.add.text(400, 250, "You scored: "+ this.score, {fill: '#fff'});
    scoreDisplay.anchor.setTo(0.5, 0.5);
    var playButton = this.game.add.button(400, 350, "restart", this.startGame, this);
    playButton.anchor.setTo(0.5, 0.5);
  },

  startGame: function() {
    this.game.state.start("MainMenu");
  }
}
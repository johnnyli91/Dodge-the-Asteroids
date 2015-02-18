var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');


game.state.add('MainMenu', mainMenu);
game.state.add('Game', theGame);
game.state.add('GameOver', gameOver);

game.state.start('MainMenu');

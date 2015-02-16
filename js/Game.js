var theGame = function(game) {
    this.numOfEnemies = 15;
}

theGame.prototype = {
    // generates random interger
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    create: function () {
        this.score = 0;
        this.gameOver = false;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        // creates the player
        this.background = this.game.add.sprite(0, 0, 'background');
        this.star = this.game.add.sprite(400, 300, 'star');
        this.star.anchor.set(0.5, 0.5);
        this.game.physics.arcade.enable(this.star);
        this.star.body.collideWorldBounds = true;
        // creates the controls
        this.cursors = this.game.input.keyboard.createCursorKeys();
        // creates the enemies
        this.enemies = this.game.add.group();
        this.enemies.enableBody = true;
        for (var i = 0; i < this.numOfEnemies; i++) {
            this.enemy = this.enemies.create(this.getRandomInt(0,800), this.getRandomInt(0,600), 'enemy');
            this.enemy.body.collideWorldBounds = true;
            this.enemy.body.bounce.setTo(1,1.05);
            this.enemy.body.velocity.x = this.getRandomInt(-150,150);
            this.enemy.body.velocity.y = this.getRandomInt(-150,150);
        };
        this.scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
    },

    update: function () {
        var gameOver = false;
        var kill = function (star, enemy) {
            star.kill();
            gameOver = true;
        };
        // handles collisions
        this.game.physics.arcade.collide(this.enemies, this.enemies);
        if (this.score > 50) {
            this.game.physics.arcade.collide(this.star, this.enemies, kill);
        }        
        // controls for player
        this.star.body.velocity.x = 0;
        this.star.body.velocity.y = 0;
        if (this.cursors.left.isDown && this.cursors.up.isDown) {
            this.star.body.velocity.x = -150;
            this.star.body.velocity.y = -150;
        } else if (this.cursors.left.isDown && this.cursors.down.isDown) {
            this.star.body.velocity.x = -150;
            this.star.body.velocity.y = 150;
        } else if (this.cursors.right.isDown && this.cursors.up.isDown) {
            this.star.body.velocity.x = 150;
            this.star.body.velocity.y = -150;
        } else if (this.cursors.right.isDown && this.cursors.down.isDown) {
            this.star.body.velocity.x = 150;
            this.star.body.velocity.y = 150;
        } else if (this.cursors.left.isDown) {
            this.star.body.velocity.x = -150;  
        } else if (this.cursors.right.isDown) {
            this.star.body.velocity.x = 150;
        } else if (this.cursors.up.isDown) {
            this.star.body.velocity.y = -150;
        } else if (this.cursors.down.isDown) {
            this.star.body.velocity.y = 150;  
        };
        // handles score
        this.score += 1;
        this.scoreText.text = 'Score: ' + this.score;

        if (gameOver === true) {
            this.game.state.start("GameOver", true, false, this.score)
        };
        // randomly add more enemies
        if (Math.random() > 0.999) {
            this.enemy = this.enemies.create(this.getRandomInt(0,800), this.getRandomInt(0,600), 'enemy');
            this.enemy.body.collideWorldBounds = true;
            this.enemy.body.bounce.setTo(1,1.05);
            this.enemy.body.velocity.x = this.getRandomInt(-150,150);
            this.enemy.body.velocity.y = this.getRandomInt(-150,150);
        };
    }
}
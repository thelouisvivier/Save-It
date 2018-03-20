var game  = new Phaser.Game(1200, 600, Phaser.CANVAS,'');
game.state.add('Game', Game);
game.state.start('Game');

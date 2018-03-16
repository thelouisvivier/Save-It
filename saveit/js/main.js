var game  = new Phaser.Game(300, 300, Phaser.CANEVAS,'');
game.state.add('Game', Game);
game.state.start('Game');

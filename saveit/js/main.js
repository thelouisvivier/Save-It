var game  = new Phaser.Game(1200, 600, Phaser.CANVAS,'');
game.state.add('Introduction', Introduction);
game.state.add('Game', Game);
game.state.add('Continuer', Continuer);
game.state.add('Credit', Credit);
game.state.add('Menu', Menu);
//game.state.start('Game');
game.state.start('Menu');

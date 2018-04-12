var game  = new Phaser.Game(1200, 600, Phaser.AUTO,'');
game.state.add('IntroductionState', Introduction);
game.state.add('GameState', Game);
game.state.add('GameState2', Game2);
game.state.add('ContinuerState', Continuer);
game.state.add('CreditState', Credit);
game.state.add('MenuState', Menu);
game.state.start('MenuState');

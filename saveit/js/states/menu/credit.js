var Credit = {

  create : function(){
    this.stage.backgroundColor = '#000000';
    var fond = game.add.sprite(game.width/200,0, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.scale.setShowAll();

    var contenu = "Crédits :\n\nFlorentin DEHOOGHE\nLouis-Clément LANGUE\nRémi VANDEWALLE\nLouis VIVIER";
    var textCredits = game.add.bitmapText(game.world.centerX, game.world.centerY+40, 'Exo2',contenu, 40);
    textCredits.align = 'center';
    textCredits.tint = 0x000000;
    textCredits.anchor.x = 0.5;
    textCredits.anchor.y = 0.5;
    textCredits.scale.setTo(game.width/1500);
    var boutonRetour = game.add.button(game.world.centerX, game.height/1.15, 'retour', this.retourMenu, this, 1, 0);
    boutonRetour.anchor.set(0.5);
    boutonRetour.scale.setTo(game.height/750);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

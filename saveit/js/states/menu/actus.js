var Actus = {

  create : function(){
    this.stage.backgroundColor = '#000000';
    var fond = game.add.sprite(game.width/200,0, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.scale.setShowAll();

    var contenu = "// En cours de construction //";
    var textActus = game.add.bitmapText(game.world.centerX, game.world.centerY+40, 'Exo2',contenu, 40);
    textActus.align = 'center';
    textActus.tint = 0x000000;
    textActus.anchor.x = 0.5;
    textActus.anchor.y = 0.5;

    var boutonRetour = game.add.button(game.world.centerX, game.height/1.15, 'retour', this.retourMenu, this, 1, 0);
    boutonRetour.anchor.set(0.5);
    boutonRetour.scale.setTo(game.height/750);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

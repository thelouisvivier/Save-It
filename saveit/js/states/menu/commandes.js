var Commandes = {

  create : function(){
    this.stage.backgroundColor = '#000000';
    var fond = game.add.sprite(game.width/200,0, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.scale.setShowAll();

    var arrowIMG = game.add.sprite(game.width/8.5, game.height/2.5, 'arrowkeys');
    arrowIMG.anchor.set(0);
    arrowIMG.scale.setTo(game.width/3000)
    var arrowContent = "Pour vous deplacer, utilisez\nles flèches de votre clavier";
    var arrowTXT = game.add.bitmapText(game.width/4, game.height/2.4, 'Exo2',arrowContent, 30);
    arrowTXT.align = 'left';
    arrowTXT.tint = 0x000000;
    arrowTXT.anchor.x = 0;
    arrowTXT.scale.setTo(game.width/1500);
    var keysIMG = game.add.sprite(game.width/8.5, game.height/1.6, 'keys');
    keysIMG.anchor.set(0);
    keysIMG.scale.setTo(game.width/3800)
    var keysContent = 'Pour éteindre ou allumer les objets, utilisez la touche du clavier\ncorrespondant à la première lettre de l\'objet. Par exemple\npour éteindre le radiateur, utilisez la touche "R".';
    var keysTXT = game.add.bitmapText(game.width/4, game.height/1.7, 'Exo2',keysContent, 30);
    keysTXT.align = 'left';
    keysTXT.tint = 0x000000;
    keysTXT.anchor.x = 0;
    keysTXT.scale.setTo(game.width/1500);


    var boutonRetour = game.add.button(game.world.centerX, game.height/1.15, 'retour', this.retourMenu, this, 1, 0);
    boutonRetour.anchor.set(0.5);
    boutonRetour.scale.setTo(game.height/750);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

var Introduction = {

  create : function(){
    var fond = game.add.tileSprite(0, 0, 3456, 2304, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();
    var contenu = "Samedi 5 mai 2018 : la France vit à crédit par rapport\naux ressources naturelles produites par la Terre.\n\nDans cette aire de surconsommationn botre planète a décidé qu'elle en avait assez.\nDans save-it votre but sera de minimiser votre dette\nécologique en économisant les ressources que vous\nconsommez chez vous.";
    var text = game.add.bitmapText(game.world.centerX, game.world.centerY+30, 'Exo2',contenu, 30);
    text.align = 'center';
    text.tint = 0x000000;
    text.anchor.x = 0.5;
    text.anchor.y = 0.5;
    var boutonRetour = game.add.button(game.width/2.20, game.height/1.15, 'retour', this.retourMenu, this, 1, 0);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

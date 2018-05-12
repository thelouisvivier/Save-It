var Credit = {
  preload : function(){
    Whattoload();
  },

  create : function(){
    var fond = game.add.tileSprite(0, 0, 3456, 2304, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();

    var style1 = { font: "75px Arial", fill: "#ff0000", align: "center" };
    var lesCredits = game.add.text(game.world.centerX, 250, "", style1);;
    var credits =game.add.image(game.width/3.2,game.height/3,'credits');
    credits.scale.setTo(game.width/1500);
    var contenu = "";
    var style = { font: "45px Arial", fill: "#ff0000", align: "left" };
    var text = game.add.text(game.world.centerX, 425, contenu, style);
    text.anchor.set(0.5);
    lesCredits.anchor.set(0.5);
    var boutonRetour = game.add.button(game.width/2.15, game.height/1.15, 'retour', this.retourMenu, this, 1, 0);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

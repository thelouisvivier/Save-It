var Introduction = {
  preload : function(){
    Whattoload();
  },

  create : function(){
    var fond = game.add.tileSprite(0, 0, 3456, 2304, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();
    var text =game.add.image(game.width/4.1,game.height/2.5,'text');
    text.scale.setTo(game.width/2000);
    var contenu = "";
    var style = { font: "55px Arial", fill: "#ff0000", align: "center" };
    var text = game.add.text(game.world.centerX, game.world.centerY, contenu, style);
    var boutonRetour = game.add.button(game.width/2.20, game.height/1.15, 'retour', this.retourMenu, this, 1, 0);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

var Introduction = {
  preload : function(){
    game.load.image('menu','./assets/textures/menu.jpg', window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
    game.load.spritesheet('retour','./assets/buttons/retour.png', 0, 74);
    game.load.image('text','./assets/fonts/text.png',0,0);
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
    var boutonRetour = game.add.button(game.width/2.2, game.height/1.2, 'retour', this.retourMenu, this, 1, 0);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

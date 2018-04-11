var Continuer = {
  preload : function(){
    game.load.image('menu','./assets/textures/menu.jpg',4000,3000);
    game.load.spritesheet('retour','./assets/buttons/retour.png', 0, 74);
  },

  create : function(){
    var fond = game.add.tileSprite(0, 0, 4000, 3000, 'menu');
    fond.scale.setTo(0.35 ,0.3);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();
    var boutonRetour = game.add.button(1000, 500, 'retour', this.retourMenu, this, 1, 0);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

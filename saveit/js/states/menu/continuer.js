var Continuer = {
  preload : function(){
    game.load.image('menu','./assets/textures/menu.jpg',window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
    game.load.spritesheet('retour','./assets/buttons/retour.png', 0, 74);
    game.load.spritesheet('niveau1','./assets/buttons/niveau1.png', 0, 87);
    game.load.spritesheet('niveau2','./assets/buttons/niveau2.png', 0, 87);
  },

  create : function(){
    var fond = game.add.tileSprite(0, 0, 3456, 2304, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();
    var boutonRetour = game.add.button(1000, 500, 'retour', this.retourMenu, this, 1, 0);
    var boutonNiveau1 = game.add.button(400, game.world.centerY, 'niveau1', this.accesNiveau1, this, 1, 0);
    var boutonNiveau2 = game.add.button(700, game.world.centerY, 'niveau2', this.accesNiveau2, this, 1, 0);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  },

  accesNiveau1 : function(){
    game.state.start('Level1State');
  },

  accesNiveau2 : function(){
    game.state.start('Level2State');
  }
}

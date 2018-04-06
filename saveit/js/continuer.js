var Continuer = {
  preload : function(){
    game.load.image('menu','./assets/textures/menu.jpg',4000,3000);
  },

  create : function(){
    var fond = game.add.tileSprite(0, 0, 4000, 3000, 'menu');
    fond.scale.setTo(0.35 ,0.3);
  }
}

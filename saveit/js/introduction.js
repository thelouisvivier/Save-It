var Introduction = {
  preload : function(){
    game.load.image('menu','./assets/menu.png');
  },

  create : function(){
    game.add.tileSprite(0, 0, 1920, 1920, 'menu');
  }
}

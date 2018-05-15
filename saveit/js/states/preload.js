var Preload = {
  preload: function (){
    this.logo = this.add.sprite(this.game.world.centerX,this.game.world.centerY,'preloadlogo');
    this.logo.anchor.setTo(0.5);
    this.logo.scale.setTo(0.1, 0.1);

    this.preloadbar = this.add.sprite(this.game.world.centerX,this.game.world.centerY+150,'preloadbar');
    this.preloadbar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloadbar);

    Whattoload();
  },
  create: function(){
    this.state.start('MenuState');
  }
}

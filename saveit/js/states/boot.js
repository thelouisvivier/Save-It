var Boot = {
  preload: function(){
    this.load.image('preloadbar','assets/load/bar.png');
    this.load.image('preloadlogo','assets/load/logo.jpg');
  },
  create: function(){
    this.game.stage.backgroundColor = '#000';
    this.state.start('PreloadState');
  }
}

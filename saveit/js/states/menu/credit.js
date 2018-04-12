var Credit = {
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

    var style1 = { font: "75px Arial", fill: "#ff0000", align: "center" };
    var lesCredits = game.add.text(game.world.centerX, 250, "Crédits", style1);;
    var contenu = "Réalisation : \n Dehooghe Florentin \n Langue Louis-Clément \n Vandewalle Rémi \n Vivier Louis";
    var style = { font: "45px Arial", fill: "#ff0000", align: "left" };
    var text = game.add.text(game.world.centerX, 425, contenu, style);
    text.anchor.set(0.5);
    lesCredits.anchor.set(0.5);
    var boutonRetour = game.add.button(1000, 500, 'retour', this.retourMenu, this, 1, 0);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

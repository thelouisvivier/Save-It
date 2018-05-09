var Introduction = {
  preload : function(){
    game.load.image('menu','./assets/textures/menu.jpg', window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio);
    game.load.spritesheet('retour','./assets/buttons/retour.png', 0, 74);
  },

  create : function(){
    var fond = game.add.tileSprite(0, 0, 3456, 2304, 'menu');
    fond.scale.setTo(0.40 ,0.40);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();

    var contenu = "Samedi 5 mai 2018 : la France vit à crédit par rapport aux ressources naturelles produite par la Terre. Dans cette aire de surconsommation, notre planète a décidé qu'elle en avait assez. Dans Save-it votre but sera de mettre fin à la surconsommation en économisant les ressources que vous consommez chez vous.";
    var style = { font: "55px Arial", fill: "#ff0000", align: "center" };
    var text = game.add.text(game.world.centerX, game.world.centerY, contenu, style);
    var boutonRetour = game.add.button(1000, 500, 'retour', this.retourMenu, this, 1, 0);
  },

  retourMenu : function(){
    game.state.start('MenuState');
  }
}

var Menu = {
  preload : function(){
    game.load.image('menu','./assets/textures/menu.jpg', 4000, 3000);
    game.load.spritesheet('b_intro','./assets/buttons/intro.png', 0 , 357);
    game.load.spritesheet('b_demarrer','./assets/buttons/demarrer.png', 0, 357);
    game.load.spritesheet('b_continuer','./assets/buttons/continuer.png', 0, 357);
    game.load.spritesheet('b_credits','./assets/buttons/credits.png', 0, 357);
  },

  create : function(){
    var fond = game.add.tileSprite(0, 0, 4000, 3000, 'menu');
    fond.scale.setTo(0.40 ,0.40);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();

    var buttonIntroduction = game.add.button(600, 300, 'b_intro', this.startIntroduction, this, 1, 0, 2).scale.setTo(0.25,0.25);
    var buttonDemarrer = game.add.button(600,400, 'b_demarrer', this.startStart, this, 1, 0, 2).scale.setTo(0.25,0.25);
    var buttonContinuer = game.add.button(600, 500, 'b_continuer', this.startContinuer, this, 1, 0, 2).scale.setTo(0.25,0.25);
    var buttonCredits = game.add.button(600, 600, 'b_credits', this.startCredit, this, 1, 0, 2).scale.setTo(0.25,0.25);
  },

  startIntroduction : function(){
    game.state.start('IntroductionState');
  },

  startStart : function(){
    game.state.start('GameState');
  },

  startContinuer : function(){
    game.state.start('ContinuerState');
  },

  startCredit : function(){
    game.state.start('CreditState');
  }
}

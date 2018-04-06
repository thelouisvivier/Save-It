var Menu = {
  preload : function(){
    game.load.image('menu','./assets/textures/menu.jpg', 4000, 3000);
    game.load.spritesheet('b_intro','./assets/bouttons/intro.png', 0 , 357);
    game.load.spritesheet('b_demarrer','./assets/bouttons/demarrer.png', 0, 357);
    game.load.spritesheet('b_continuer','./assets/bouttons/continuer.png', 0, 357);
    game.load.spritesheet('b_credits','./assets/bouttons/credits.png', 0, 357);
  },

  create : function(){
    var fond = game.add.tileSprite(0, 0, 4000, 3000, 'menu');
    fond.scale.setTo(0.35 ,0.3);
    var buttonIntroduction = game.add.button(565, 200, 'b_intro', this.startIntroduction, this, 1, 0, 2).scale.setTo(0.25,0.25);
    var buttonDemarrer = game.add.button(565, 300, 'b_demarrer', this.startStart, this, 1, 0, 2).scale.setTo(0.25,0.25);
    var buttonContinuer = game.add.button(565, 400, 'b_continuer', this.startContinuer, this, 1, 0, 2).scale.setTo(0.25,0.25);
    var buttonCredits = game.add.button(565, 500, 'b_credits', this.startCredit, this, 1, 0, 2).scale.setTo(0.25,0.25);
  },

  startIntroduction : function(){
    game.state.start('Introduction');
  },

  startStart : function(){
    game.state.start('Game');
  },

  startContinuer : function(){
    game.state.start('Continuer');
  },

  startCredit : function(){
    game.state.start('Credit');
  }
}

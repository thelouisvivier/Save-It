var Menu = {
  preload : function(){
    game.load.image('menu','./assets/menu.png', 0, 0);
    game.load.image('saveit','./assets/saveit.png', 0, 0);
    game.load.spritesheet('b_introduction','./assets/introduction.png', 0 , 0);
    game.load.spritesheet('b_demarrer','./assets/demarrer.png', 0, 0);
    game.load.spritesheet('b_continuer','./assets/continuer.png', 0, 0);
    game.load.spritesheet('b_credits','./assets/credits.png', 0, 0);
  },

  create : function(){
    //game.add.tileSprite(0, 0, 1920, 1920, 'menu');
    var logo = game.add.sprite(500, 20, 'saveit');
    logo.scale.setTo(0.5,0.5);
    var buttonIntroduction = game.add.button(550, 200, 'b_introduction', this.startIntroduction, this, 2, 1, 0);
    var buttonDemarrer = game.add.button(565, 250, 'b_demarrer', this.startStart, this, 2, 1, 0);
    var buttonContinuer = game.add.button(567, 300, 'b_continuer', this.startContinuer, this, 2, 1, 0);
    var buttonCredits = game.add.button(587, 350, 'b_credits', this.startCredit, this, 2, 1, 0);
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

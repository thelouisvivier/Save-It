var Menu = {
  preload : function(){
    game.load.image('menu','./assets/textures/menu.jpg');
    game.load.spritesheet('b_intro','./assets/buttons/intro.png', 0 , 357);
    game.load.spritesheet('b_demarrer','./assets/buttons/demarrer.png', 0, 357);
    game.load.spritesheet('b_continuer','./assets/buttons/continuer.png', 0, 357);
    game.load.spritesheet('b_credits','./assets/buttons/credits.png', 0, 357);
  },

  create : function(){
    this.stage.backgroundColor = '#000000';
    var fond = game.add.sprite(game.width/200,0, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    //essaye avec : .EXACT_FIT ou .RESIZE ou .USER_SCALE
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.scale.setShowAll();

    var buttonIntroduction = game.add.button((game.width/2.38), game.height/2.75, 'b_intro', this.startIntroduction, this, 1, 0, 2).scale.setTo(0.25,0.25);
    var buttonDemarrer = game.add.button((game.width/2.38) , game.height/2.18, 'b_demarrer', this.startStart, this, 1, 0, 2).scale.setTo(0.25,0.25);
    var buttonContinuer = game.add.button((game.width/2.38) , game.height/1.80, 'b_continuer', this.startContinuer, this, 1, 0, 2).scale.setTo(0.25,0.25);
    var buttonCredits = game.add.button((game.width/2.38) , game.height/1.52, 'b_credits', this.startCredit, this, 1, 0, 2).scale.setTo(0.25,0.25);
  },

  startIntroduction : function(){
    game.state.start('IntroductionState');
  },

  startStart : function(){
    game.state.start('Level1State');
  },

  startContinuer : function(){
    game.state.start('ContinuerState');
  },

  startCredit : function(){
    game.state.start('CreditState');
  }
}

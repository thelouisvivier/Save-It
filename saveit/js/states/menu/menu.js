var Menu = {

  create : function(){
    this.stage.backgroundColor = '#000000';
    var fond = game.add.sprite(game.width/200,0, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.scale.setShowAll();

    var buttonIntroduction = game.add.button((game.width/2.45), game.height/2.50, 'b_intro', this.startIntroduction, this, 1, 0, 2).scale.setTo(game.height/3000);
    var buttonDemarrer = game.add.button((game.width/2.45) , game.height/1.90, 'b_demarrer', this.startStart, this, 1, 0, 2).scale.setTo(game.height/3000);
    var buttonContinuer = game.add.button((game.width/2.45) , game.height/1.53, 'b_continuer', this.startContinuer, this, 1, 0, 2).scale.setTo(game.height/3000);
    var buttonCredits = game.add.button((game.width/2.45) , game.height/1.28, 'b_credits', this.startCredit, this, 1, 0, 2).scale.setTo(game.height/3000);
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

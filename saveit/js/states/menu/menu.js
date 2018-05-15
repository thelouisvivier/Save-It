var Menu = {

  create : function(){
    this.stage.backgroundColor = '#000000';
    var fond = game.add.sprite(game.width/200,0, 'menu');
    fond.scale.setTo(game.width/3500);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    game.scale.setShowAll();

    var buttonIntroduction = game.add.button((game.width/2)-50, game.height/2.5, 'b_intro', this.startIntroduction, this, 1, 0, 2);
    var buttonDemarrer = game.add.button((game.width/2)- 50 , game.height/1.80, 'b_demarrer', this.startStart, this, 1, 0, 2);
    var buttonContinuer = game.add.button((game.width/2)+ 50, game.height/1.8, 'b_continuer', this.startContinuer, this, 1, 0, 2);
    var buttonCommandes = game.add.button((game.width/2) + 50, game.height/2.50, 'b_commandes', this.startCommandes, this, 1, 0, 2);
    var buttonActus = game.add.button((game.width/2)-50 , game.height/1.4, 'b_actus', this.startActus, this, 1, 0, 2);
    var buttonCredits = game.add.button((game.width/2)+50 , game.height/1.4, 'b_credits', this.startCredit, this, 1, 0, 2);
    buttonIntroduction.anchor.x = 1;
    buttonDemarrer.anchor.x = 1;
    buttonContinuer.anchor.x = 0;
    buttonCommandes.anchor.x = 0;
    buttonActus.anchor.x = 1;
    buttonCredits.anchor.x = 0;
    buttonIntroduction.scale.setTo(game.height/3000);
    buttonDemarrer.scale.setTo(game.height/3000);
    buttonContinuer.scale.setTo(game.height/3000);
    buttonCommandes.scale.setTo(game.height/3000);
    buttonActus.scale.setTo(game.height/3000);
    buttonCredits.scale.setTo(game.height/3000);
    var version = game.add.bitmapText(game.width-20,game.height-10, 'Exo2','V1.0.1', 20);
    version.align = 'right';
    version.tint = 0x000000;
    version.anchor.x = 1;
    version.anchor.y = 1;
    version.scale.setTo(game.width/1500);
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

  startCommandes : function(){
    game.state.start('CommandesState');
  },

  startActus : function(){
    game.state.start('ActusState');
  },

  startCredit : function(){
    game.state.start('CreditState');
  }
}

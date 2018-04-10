//Pour le joueur
var louis;
var cursors;

//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];

//Touches de contrôle des objets
var keyT;
var keyL;

//Compteur
var timer;
var total = 3;

var Game = {

  preload: function (){
    game.load.image('sol','assets/textures/sol.png');
    game.load.image('popup', 'assets/popup/popupwindow.png');
    game.load.spritesheet('louis', 'assets/sprites/perso/louis.png', 100, 95);
    game.load.spritesheet('tv', 'assets/sprites/objects/tv.png', 100, 100);
    game.load.spritesheet('lampeB', 'assets/sprites/objects/lampeB.png', 100, 256);
    game.load.spritesheet('evier', 'assets/sprites/objects/evier.png', 200, 158);
    game.load.spritesheet('radiateur', 'assets/sprites/objects/radiateur.png', 240, 150);
  },

  create : function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');
    game.world.setBounds(0, 0, 1920, 1920);

    Sprite.tv.create(1200,800,0/*id UNIQUE de l'objet*/);
    Sprite.lampe.create(1000,600,'bleu',1);
    Sprite.evier.create(1300,700,2);
    Sprite.radiateur.create(1400,800,3);
    Sprite.tv.create(1000,800,4);
    Sprite.louis.create();

    //  Create our Timer
    timer = game.time.create(false);
    //  Set a TimerEvent to occur after 1 seconds
    timer.loop(1000, Game.updateCounter, this);
    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();

    keyT = game.input.keyboard.addKey(Phaser.Keyboard.T);
    keyL = game.input.keyboard.addKey(Phaser.Keyboard.L);
  },

  update : function (){
    Sprite.louis.update();
    Sprite.tv.update(0);
    Sprite.lampe.update(1);
    Sprite.evier.update(2);
    Sprite.radiateur.update(3);
    Sprite.tv.update(4);

    if(total==0){
      timer.stop();
    };
  },

  updateCounter : function (){
    /* Obsolète pour le moment
    if(tvstate==true){
      total--;
    }; */
  },

  render :function () {
    game.debug.text('Argent restant: ' + total + '€', 1000 , 64);
  },

}

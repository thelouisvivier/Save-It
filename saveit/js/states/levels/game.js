//Pour le joueur
var louis;
var cursors;

//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];

//Compteur
var timer;
var total = 3;

var Game = {

  preload: function (){
    game.load.image('sol','assets/textures/sol.png');
    game.load.image('popupportrait', 'assets/popup/popupportrait.png');
    game.load.spritesheet('louis', 'assets/sprites/perso/louis.png', 100, 95);
    game.load.spritesheet('tv', 'assets/sprites/objects/tv.png', 100, 100);
    game.load.spritesheet('lampeB', 'assets/sprites/objects/lampeB.png', 100, 256);
    game.load.spritesheet('lampeJ', 'assets/sprites/objects/lampeJ.png', 100, 256);
    game.load.spritesheet('evier', 'assets/sprites/objects/evier.png', 200, 158);
    game.load.spritesheet('radiateur', 'assets/sprites/objects/radiateur.png', 240, 150);
    game.load.spritesheet('fenetre', 'assets/sprites/objects/fenetre.png', 200, 162);
    game.load.spritesheet('radio', 'assets/sprites/objects/radio.png', 200, 56);
    game.load.spritesheet('tv2', 'assets/sprites/objects/tv2.png', 100, 100);
    game.load.spritesheet('ordinateur', 'assets/sprites/objects/ordi.png', 200, 176);
    game.load.spritesheet('machinealaver', 'assets/sprites/objects/machinealaver.png', 600, 564);
    game.load.spritesheet('microonde', 'assets/sprites/objects/micro-onde.png', 880, 612);
    game.load.image('plante', 'assets/sprites/objects/plante.png');
    game.load.image('plante1', 'assets/sprites/objects/plante1.png');
    game.load.image('plante2', 'assets/sprites/objects/plante2.png');
  },

  create : function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');
    game.world.setBounds(0, 0, 1920, 1920);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();

    //Ajout des sprite
    Sprite.tv.create(1200,800,'beige',0/*id UNIQUE de l'objet*/);
    Sprite.lampe.create(1000,600,'jaune',1);
    Sprite.evier.create(1300,700,2);
    Sprite.microonde.create(1400,800,3);
    Sprite.radio.create(900,800,4);
    Sprite.fenetre.create(600,600,1/*model de fenetre*/,6);
    Sprite.plante.create(1000,1000,3,7);
    //Popup.create('lampeinfo',1000,600);

    //Ajout du perso
    Sprite.louis.create();

    //  Create our Timer
    timer = game.time.create(false);
    //  Set a TimerEvent to occur after 1 seconds
    timer.loop(1000, Game.updateCounter, this);
    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();
  },

  update : function (){
    //Update des differents élements ajoutés dans le create
    Sprite.louis.update();
    Sprite.tv.update(Keys.T(),0);// Touche pour contôler l'objet et ID unique de cet objet
    Sprite.lampe.update(Keys.L(),1);
    Sprite.evier.update(Keys.E(),2);
    Sprite.microonde.update(Keys.M(),3);
    Sprite.radio.update(Keys.R(),4);
    Sprite.fenetre.update(Keys.F(),6);
    Sprite.plante.update(7);

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
    game.debug.body(spriteStorage[3]);
  },

}

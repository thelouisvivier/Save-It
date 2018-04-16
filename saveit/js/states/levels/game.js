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
    game.load.spritesheet('tv', 'assets/sprites/objects/appliances/tv.png', 100, 100);
    game.load.spritesheet('lampeB', 'assets/sprites/objects/appliances/lampeB.png', 100, 256);
    game.load.spritesheet('lampeJ', 'assets/sprites/objects/appliances/lampeJ.png', 100, 256);
    game.load.spritesheet('evier', 'assets/sprites/objects/appliances/evier.png', 200, 158);
    game.load.spritesheet('radiateur', 'assets/sprites/objects/appliances/radiateur.png', 240, 150);
    game.load.spritesheet('fenetre', 'assets/sprites/objects/appliances/fenetre.png', 200, 162);
    game.load.spritesheet('radio', 'assets/sprites/objects/appliances/radio.png', 200, 56);
    game.load.spritesheet('tv2', 'assets/sprites/objects/appliances/tv2.png', 100, 100);
    game.load.spritesheet('ordinateur', 'assets/sprites/objects/appliances/ordi.png', 200, 176);
    game.load.spritesheet('machinealaver', 'assets/sprites/objects/appliances/machinealaver.png', 600, 564);
    game.load.spritesheet('microonde', 'assets/sprites/objects/appliances/micro-onde.png', 880, 612);
    game.load.image('plante', 'assets/sprites/objects/decorations/plante.png');
    game.load.image('plante1', 'assets/sprites/objects/decorations/plante1.png');
    game.load.image('plante2', 'assets/sprites/objects/decorations/plante2.png');
  },

  create : function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');
    game.world.setBounds(0, 0, 1920, 1920);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();

    //Ajout des sprite
    Appliances.tv.create(1200,800,'beige',0/*id UNIQUE de l'objet*/);
    Appliances.lampe.create(1000,600,'jaune',1);
    Appliances.evier.create(1300,700,2);
    Appliances.microonde.create(1400,800,3);
    Appliances.radio.create(900,800,4);
    Appliances.fenetre.create(600,600,1/*model de fenetre*/,6);
    Decorations.plante.create(1000,1000,3,7);
    //Popup.create('lampeinfo',1000,600);

    //Ajout du perso
    Perso.louis.create();

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
    Perso.louis.update();
    Appliances.tv.update(Keys.T(),0);// Touche pour contôler l'objet et ID unique de cet objet
    Appliances.lampe.update(Keys.L(),1);
    Appliances.evier.update(Keys.E(),2);
    Appliances.microonde.update(Keys.M(),3);
    Appliances.radio.update(Keys.R(),4);
    Appliances.fenetre.update(Keys.F(),6);
    Decorations.plante.update(7);

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

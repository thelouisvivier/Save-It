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
    Whattoload();
  },

  create : function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');
    game.world.setBounds(0, 0, 1920, 1920);


    //Ajout des sprite
    Appliances.tv.create(1200,800,'noir',0/*id UNIQUE de l'objet*/);
    Appliances.lampe.create(1000,600,'jaune',1);
    Appliances.radiateur.create(1300,700,2);
    Appliances.microonde.create(1400,800,3);
    Appliances.radio.create(900,800,4);
    Appliances.fenetre.create(600,600,1/*model de fenetre*/,6);
    Furnitures.canape.create(1000,1000,'gauche',7);
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
    Appliances.radiateur.update(Keys.R(),2);
    Appliances.microonde.update(Keys.M(),3);
    Appliances.radio.update(Keys.R(),4);
    Appliances.fenetre.update(Keys.F(),6);
    Furnitures.armoire.update(7);

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
    game.debug.body(spriteStorage[7]);
  },

}

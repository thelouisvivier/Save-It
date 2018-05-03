//Pour le joueur
var louis;
var cursors;
var nbobj;
//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];
var turnon;
var coutobjprecedent;
coutobjprecedent=0
//Compteur

var total;

var Game = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    total=100;
    nbobj=0;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');
    game.world.setBounds(0, 0, 1920, 1920);
    timers.create();

    //Ajout des sprite
    Appliances.tv.create(1200,800,'noir',0/*id UNIQUE de l'objet*/);
    Appliances.lampe.create(1000,600,'jaune',1);
    Appliances.radiateur.create(1300,700,2);
    //Appliances.microonde.create(1400,800,3);
    Appliances.radio.create(900,800,3);
    Appliances.fenetre.create(600,600,1/*model de fenetre*/,4);
    Appliances.ventilateur.create(1000,1000,5);
    //Popup.create('lampeinfo',1000,600);

    //Ajout du perso
    Perso.louis.create();



    console.log(spriteStorage[0].key);
    console.log(spriteStorage[0]);
    console.log(spriteStorage[1]);
    console.log(spriteStorage[2]);

//<<<<<<< HEAD
    for (o of stateStorage){
    nbobj++;};

    //Menu Pause
    menuPause('GameState');
  },


  update : function (){
    //Update des differents élements ajoutés dans le create
    Perso.louis.update();
    Appliances.tv.update(Keys.T(),0);// Touche pour contôler l'objet et ID unique de cet objet
    Appliances.lampe.update(Keys.L(),1);
    Appliances.radiateur.update(Keys.R(),2);
  //  Appliances.microonde.update(Keys.M(),3);
    Appliances.radio.update(Keys.R(),3);
    Appliances.fenetre.update(Keys.F(),4);
    Appliances.ventilateur.update(Keys.V(),5);

    if(total==0){
      timer.stop();
    };
  },


  render :function () {
    game.debug.text('Argent restant: ' + total.toFixed(2) + '€', 1000 , 64);

  },

}

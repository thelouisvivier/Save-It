//Pour le joueur
var louis;
var cursors;

//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];
var spriteOnMap = [];

//Pour les murs
var wallStorage = [];

//Pour Timer
var turnon;
var coutobjprecedent;
coutobjprecedent=0;
var total;

var Level1 = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    total=20;
    tempsrestant=50;


    //Definition du monde
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 2000, 1500);

    //Creation de la map
    MapGen.couloir.create();
    MapGen.salon.create();
    Walls.vertical.create(0,0,'noir',910,1000,31);//gauche
    Walls.vertical.create(1100,0,'noir',910,1000,32);//droite

    //Ajout du perso
    Perso.louis.create(1400,1200);

    //Recherche Objets Actifs
    for (let i of spriteStorage){
      if (typeof i !== 'undefined' && i.custCtrl == true){
        spriteOnMap.push(i.custId);
      }
      else{}
    };

    //Popup
    setTimeout(function () {Popup.create('tvinfo',1600,1100);}, 1000);

    menuPause('Level1State');

    //Debut du jeu
    timers.create();
  },
  update : function (){
    timers.updateText();

    //Update du perso
    Perso.louis.update();

    //Update de la Map
    MapGen.couloir.update();
    MapGen.salon.update();
    Walls.vertical.update(31);
    Walls.vertical.update(32);

    gameOver('Level1State', tempsrestant, total);
  }
}

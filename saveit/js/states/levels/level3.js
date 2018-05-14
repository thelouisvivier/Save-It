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

var Level3 = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    total=60;
    tempsrestant=80;

    //Definition du monde
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 2000, 1500);

    //Creation de la map
    MapGen.couloir.create();
    MapGen.cuisine.create();
    MapGen.chambre.create();
    MapGen.salon.create();
    Walls.vertical.create(0,0,'noir',910,500,31);//gauche
    Walls.vertical.create(1100,0,'noir',910,500,32);//droite

    //Ajout du perso
    Perso.louis.create(1170,550);

    //Recherche Objets Actifs
    for (let i of spriteStorage){
      if (typeof i !== 'undefined' && i.custCtrl == true){
        spriteOnMap.push(i.custId);
      }
      else{}
    };

    //Popup
    setTimeout(function () {Popup.create('lampeinfo',1150,350);}, 3000);

    menuPause('Level3State');

    //Debut du jeu
    timers.create();
  },
  update : function (){
    timers.updateText();

    //Update du perso
    Perso.louis.update();

    //Update de la Map
    MapGen.chambre.update();
    MapGen.cuisine.update();
    MapGen.couloir.update();
    MapGen.salon.update();
    Walls.vertical.update(31);
    Walls.vertical.update(32);

    gameOver('Level3State', tempsrestant, total);
  }
}

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
var total;

var Level5 = {

  create : function() {
    //Reinitialisation des variables
    spriteStorage = [];
    stateStorage = [];
    flipFlop =[];
    spriteOnMap = [];
    wallStorage = [];
    turnon = 0;
    coutobjprecedent=0;

    //Definition des difficultées
    total=150;
    tempsrestant=120;

    //Definition du monde
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 2000, 1500);

    //Creation de la map
    MapGen.couloir.create();
    MapGen.bureau.create();
    MapGen.salledebain.create();
    MapGen.cuisine.create();
    MapGen.chambre.create();
    MapGen.salon.create();

    //Ajout du perso
    Perso.louis.create(1800,300);

    //Recherche Objets Actifs
    for (let i of spriteStorage){
      if (typeof i !== 'undefined' && i.custCtrl == true){
        spriteOnMap.push(i.custId);
      }
      else{}
    };

    //Popup
    setTimeout(function () {Popup.create('baignoireinfo',1600,100);}, 1000);

    menuPause('Level5State');

    //Debut du jeu
    timers.create();
  },
  update : function (){
    timers.updateText();

    //Update du perso
    Perso.louis.update();

    //Update de la Map
    MapGen.salledebain.update();
    MapGen.bureau.update();
    MapGen.chambre.update();
    MapGen.cuisine.update();
    MapGen.couloir.update();
    MapGen.salon.update();

    gameOver('Level5State', tempsrestant, total);
  }
}

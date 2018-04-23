//Pour le joueur
var louis;
var cursors;

//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];

//Pour les murs
var wallStorage = [];

var Level1 = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    //Definition du monde
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 2000, 1500);

    //Creation de la map
    MapGen.create();

    //Ajout des élements
    Appliances.fenetre.create(200,0,2,0);
    Appliances.ordinateur.create(500,0,1);

    //Ajout du perso
    Perso.louis.create();


  },
  update : function (){
    //Update du perso
    Perso.louis.update();

    MapGen.update();

    Appliances.fenetre.update(Keys.F(),0);
    Appliances.ordinateur.update(Keys.O(),1);


  },
  render :function() {
    //Debug
    game.debug.cameraInfo(game.camera, 32, 32);

  }
}

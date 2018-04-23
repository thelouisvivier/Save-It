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
    Appliances.fenetre.create(400,0,2,0);
    Appliances.ordinateur.create(100,60,1);
    Appliances.radiateur.create(375,70,2);
    Appliances.lampe.create(800,350,'jaune',3);
    Furnitures.armoire.create(600,-20,'facelivre',4);
    Decorations.plante.create(300,60,'4',5);

    //Ajout du perso
    Perso.louis.create();


  },
  update : function (){
    //Update du perso
    Perso.louis.update();

    MapGen.update();

    Appliances.fenetre.update(Keys.F(),0);
    Appliances.ordinateur.update(Keys.O(),1);
    Appliances.radiateur.update(Keys.R(),2);
    Appliances.lampe.update(Keys.L(),3);
    Furnitures.armoire.update(4);
    Decorations.plante.update(5);


  },
  render :function() {
    //Debug
    //game.debug.cameraInfo(game.camera, 32, 32);

  }
}

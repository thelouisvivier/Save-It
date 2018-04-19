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
    game.add.tileSprite(0, 0, 3100, 3075, 'sol');
    game.world.setBounds(0, 0, 3100, 3075);

    //Ajout des sprite
    MapGen.create();

    //Ajout du perso
    Perso.louis.create();


  },
  update : function (){
    //Update du perso
    Perso.louis.update();

    MapGen.update();



  },
  render :function() {
    //Debug
    game.debug.cameraInfo(game.camera, 32, 32);

  }
}

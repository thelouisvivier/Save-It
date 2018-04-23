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

var Game2 = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');
    game.world.setBounds(0, 0, 1920, 1920);
    //Full screen mode
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setShowAll();

    //Ajout des sprite
    Furnitures.tables_chaises.create(1200,800,'table+chaises','beige','cote',0);
    Appliances.lampe.create(1000,600,'vert',1);
    Appliances.lavabo.create(1300,700,2);

    //Ajout du perso
    Perso.louis.create();
  },

  update : function (){
    //Update des differents élements ajoutés dans le create
    Perso.louis.update();
    Furnitures.tables_chaises.update(0);
    Appliances.lampe.update(Keys.L(),1);// Touche pour contôler l'objet et ID unique de cet objet
    Appliances.lavabo.update(Keys.L(),2);
  },

  render :function () {
    game.debug.text('Argent restant: ' + total + '€', 1000 , 64);
    game.debug.body(spriteStorage[0]);
  },

}

//Pour le joueur
var louis;
var cursors;

//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];

//Pour les murs
var wallStorage = [];
var increment;

var Level1 = {

  preload: function (){
    game.load.image('sol','assets/textures/sol.png');
    game.load.image('popupportrait', 'assets/popup/popupportrait.png');
    game.load.image('wall-noir', 'assets/textures/wall-noir.png');
    game.load.spritesheet('louis', 'assets/sprites/perso/louis.png', 100, 95);
    game.load.spritesheet('tv', 'assets/sprites/objects/tv.png', 100, 100);
    game.load.spritesheet('lampeB', 'assets/sprites/objects/lampeB.png', 100, 256);
    game.load.spritesheet('lampeJ', 'assets/sprites/objects/lampeJ.png', 100, 256);
    game.load.spritesheet('evier', 'assets/sprites/objects/evier.png', 200, 158);
    game.load.spritesheet('radiateur', 'assets/sprites/objects/radiateur.png', 240, 150);
    game.load.spritesheet('fenetre', 'assets/sprites/objects/fenetre.png', 200, 162);
    game.load.spritesheet('radio', 'assets/sprites/objects/radio.png', 200, 56);
    game.load.spritesheet('tv2', 'assets/sprites/objects/tv2.png', 100, 100);
    game.load.image('plante', 'assets/sprites/objects/plante.png');
  },

  create : function() {
    //Definition du monde
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1440, 900, 'sol');
    game.world.setBounds(0, 0, 1440, 900);

    //Ajout des sprite
    Sprite.tv.create(1200,800,'beige',0/*id UNIQUE de l'objet*/);

    //Ajout du perso
    Sprite.louis.create();


  },
  update : function (){
    //Update du perso
    Sprite.louis.update();

    //Update des objets
    Sprite.tv.update(Keys.T(),0);// Touche pour contôler l'objet et ID unique de cet objet

  },
  render :function() {
    //Debug
    game.debug.cameraInfo(game.camera, 32, 32);
  }
}

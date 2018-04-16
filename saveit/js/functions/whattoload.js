//Tout de dont vous avez besoin dans le preload

var Whattoload = function() {
  //Textures
  game.load.image('sol','assets/textures/sol.png');

  //Popup
  game.load.image('popupportrait', 'assets/popup/popupportrait.png');

  //Perso
  game.load.spritesheet('louis', 'assets/sprites/perso/louis.png', 100, 95);

  //Appliances
  game.load.spritesheet('tv', 'assets/sprites/objects/appliances/tv.png', 100, 100);
  game.load.spritesheet('lampeB', 'assets/sprites/objects/appliances/lampeB.png', 100, 256);
  game.load.spritesheet('lampeJ', 'assets/sprites/objects/appliances/lampeJ.png', 100, 256);
  game.load.spritesheet('evier', 'assets/sprites/objects/appliances/evier.png', 200, 158);
  game.load.spritesheet('radiateur', 'assets/sprites/objects/appliances/radiateur.png', 240,150);
  game.load.spritesheet('fenetre', 'assets/sprites/objects/appliances/fenetre.png', 200,162);
  game.load.spritesheet('radio', 'assets/sprites/objects/appliances/radio.png', 200,56);
  game.load.spritesheet('tv2', 'assets/sprites/objects/appliances/tv2.png', 100,100);
  game.load.spritesheet('ordinateur', 'assets/sprites/objects/appliances/ordi.png', 200,176);
  game.load.spritesheet('machinealaver', 'assets/sprites/objects/appliances/machinealaver.png', 600,564);
  game.load.spritesheet('microonde', 'assets/sprites/objects/appliances/micro-onde.png', 880,612);
  game.load.spritesheet('frigo', 'assets/sprites/objects/appliances/frigo.png', 800,1000);
  game.load.spritesheet('gaz', 'assets/sprites/objects/appliances/gaz.png', 300,322);

  //Furnitures
  game.load.spritesheet('armoire', 'assets/sprites/objects/furnitures/armoire.png', 400,376);

  //Decorations
  game.load.image('plante1', 'assets/sprites/objects/decorations/plante1.png');
  game.load.image('plante2', 'assets/sprites/objects/decorations/plante2.png');
  game.load.image('plante3', 'assets/sprites/objects/decorations/plante3.png');
  game.load.image('plante4', 'assets/sprites/objects/decorations/plante4.png');
  game.load.image('cadre', 'assets/sprites/objects/decorations/cadre.png');
  game.load.image('tapisbleu', 'assets/sprites/objects/decorations/tapis bleu.jpg');
  game.load.image('tapisvert', 'assets/sprites/objects/decorations/tapis vert.jpg');
};

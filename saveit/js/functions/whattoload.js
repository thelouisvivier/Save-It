//Tout de dont vous avez besoin dans le preload

var Whattoload = function() {
  //Textures
  game.load.image('sol','assets/textures/sol.png');
  game.load.image('parquet','assets/textures/parquet.png');
  game.load.image('parquet2','assets/textures/parquet2.png');
  game.load.image('carrelage','assets/textures/carrelage.png');
  game.load.image('moquette','assets/textures/moquette.png');

  //Popup
  game.load.image('popupportrait', 'assets/popup/popupportrait.png');

  //Perso
  game.load.spritesheet('louis', 'assets/sprites/perso/louis.png', 100, 95);

  //Appliances
  game.load.spritesheet('baignoire', 'assets/sprites/objects/appliances/baignoire.png', 300,300);
  game.load.spritesheet('evier', 'assets/sprites/objects/appliances/evier.png', 200, 158);
  game.load.spritesheet('fenetre', 'assets/sprites/objects/appliances/fenetre.png', 200,162);
  game.load.spritesheet('frigo', 'assets/sprites/objects/appliances/frigo.png', 800,1000);
  game.load.spritesheet('gaz', 'assets/sprites/objects/appliances/gaz.png', 300,322);
  game.load.spritesheet('lampe_bleue', 'assets/sprites/objects/appliances/lampe_bleue.png', 100, 256);
  game.load.spritesheet('lampe_jaune', 'assets/sprites/objects/appliances/lampe_jaune.png', 100, 256);
  game.load.spritesheet('lampe_verte', 'assets/sprites/objects/appliances/lampe_verte.png', 100, 256);
  game.load.spritesheet('lavabo', 'assets/sprites/objects/appliances/lavabo.png', 200,200);
  game.load.spritesheet('machinealaver', 'assets/sprites/objects/appliances/machinealaver.png', 600,564);
  game.load.spritesheet('microonde', 'assets/sprites/objects/appliances/microonde.png', 200,200);
  game.load.spritesheet('ordinateur', 'assets/sprites/objects/appliances/ordinateur.png', 200,176);
  game.load.spritesheet('radiateur', 'assets/sprites/objects/appliances/radiateur.png', 240,150);
  game.load.spritesheet('radio', 'assets/sprites/objects/appliances/radio.png', 200,56);
  game.load.spritesheet('tv', 'assets/sprites/objects/appliances/tv.png', 100, 100);
  game.load.spritesheet('tv2', 'assets/sprites/objects/appliances/tv2.png', 100,100);
  game.load.spritesheet('ventilateur', 'assets/sprites/objects/appliances/ventilateur.png', 200,500);

  //Furnitures
  game.load.spritesheet('armoire', 'assets/sprites/objects/furnitures/armoire.png', 400,376);
  game.load.spritesheet('canape', 'assets/sprites/objects/furnitures/canapé.png', 1280,958);
  game.load.spritesheet('fauteuil', 'assets/sprites/objects/furnitures/fauteuil.png', 83,84);
  game.load.image('table basse', 'assets/sprites/objects/furnitures/table basse.png');
  game.load.spritesheet('tables+chaises', 'assets/sprites/objects/furnitures/tables_chaises.png', 200,200);

  //Decorations
  game.load.image('cadre', 'assets/sprites/objects/decorations/cadre.png');
  game.load.image('plante1', 'assets/sprites/objects/decorations/plante1.png');
  game.load.image('plante2', 'assets/sprites/objects/decorations/plante2.png');
  game.load.image('plante3', 'assets/sprites/objects/decorations/plante3.png');
  game.load.image('plante4', 'assets/sprites/objects/decorations/plante4.png');
  game.load.image('tapisbleu', 'assets/sprites/objects/decorations/tapis bleu.jpg');
  game.load.image('tapisvert', 'assets/sprites/objects/decorations/tapis vert.jpg');

  //walls
  game.load.image('wall-beigeclair', 'assets/textures/wall-beigeclair.png');
  game.load.image('wall-beigefonce', 'assets/textures/wall-beigefonce.png');
  game.load.image('wall-bleu', 'assets/textures/wall-bleu.png');
  game.load.image('wall-cacadoie', 'assets/textures/wall-cacadoie.png');
  game.load.image('wall-gris', 'assets/textures/wall-gris.png');
  game.load.image('wall-grisclair', 'assets/textures/wall-grisclair.png');
  game.load.image('wall-marron', 'assets/textures/wall-marron.png');
  game.load.image('wall-noir', 'assets/textures/wall-noir.png');
  game.load.image('wall-orange', 'assets/textures/wall-orange.png');
  game.load.image('wall-rose', 'assets/textures/wall-rose.png');
  game.load.image('wall-vert', 'assets/textures/wall-vert.png');

  //pause
  game.load.spritesheet('fondPause', 'assets/textures/pause.png');
  game.load.spritesheet('b_demarrer','./assets/buttons/demarrer.png', 0, 357);
  game.load.spritesheet('b_continuer','./assets/buttons/continuer.png', 0, 357);
  game.load.spritesheet('b_credits','./assets/buttons/credits.png', 0, 357);
};

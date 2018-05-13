var Furnitures = {
  armoire : {
    create:function(posx,posy,version,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'armoire');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].custId = id;
      spriteStorage[id].custType= 'armoire';
      spriteStorage[id].custCtrl= false;
      spriteStorage[id].scale.setTo(0.6, 0.6);
      spriteStorage[id].animations.add('facelivre', [0], 1, true);
      spriteStorage[id].animations.add('facecommode', [1], 1, true);
      spriteStorage[id].animations.add('cotelivre', [2], 1, true);
      spriteStorage[id].animations.add('cotecommode', [3], 1, true);
      if (version == 'facelivre'){
        spriteStorage[id].body.setSize(196,140,100,50); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'facecommode'){
        spriteStorage[id].body.setSize(196,40,100,150); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'cotelivre'){
        spriteStorage[id].body.setSize(85,180,160,0); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'cotecommode'){
        spriteStorage[id].body.setSize(85,130,160,50); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      spriteStorage[id].animations.play(version);
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  },
  canape : {
    create:function(posx,posy,version,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'canape');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].custId = id;
      spriteStorage[id].custType= 'canape';
      spriteStorage[id].custCtrl= false;
      spriteStorage[id].scale.setTo(0.15, 0.15);
      spriteStorage[id].animations.add('face', [0], 1, true);
      spriteStorage[id].animations.add('dos', [1], 1, true);
      spriteStorage[id].animations.add('droite', [2], 1, true);
      spriteStorage[id].animations.add('gauche', [3], 1, true);
      if (version == 'face'){
        spriteStorage[id].body.setSize(1273,200,0,100); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'dos'){
        spriteStorage[id].body.setSize(1273,50,0,200); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'droite'){
        spriteStorage[id].body.setSize(505,400,400,0); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'gauche'){
        spriteStorage[id].body.setSize(505,400,400,0); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      spriteStorage[id].animations.play(version);
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  },
  cuisine : {
    create:function(posx,posy,model,color,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'cuisine');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].custId = id;
      spriteStorage[id].custType= 'furniturescuisine';
      spriteStorage[id].custCtrl= false;
      spriteStorage[id].scale.setTo(0.1, 0.1);
      spriteStorage[id].animations.add('meubleblanc', [0], 1, true);
      spriteStorage[id].animations.add('meublemarron', [1], 1, true);
      spriteStorage[id].animations.add('meublebeige', [2], 1, true);
      spriteStorage[id].animations.add('armoireblanche', [3], 1, true);
      spriteStorage[id].animations.add('armoiremarron', [4], 1, true);
      spriteStorage[id].animations.add('armoirebeige', [5], 1, true);
      if (model == 'meuble'){
        spriteStorage[id].body.setSize(1600,800,200,200); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (model == 'armoire'){
        spriteStorage[id].body.setSize(750,400,600,300); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      spriteStorage[id].animations.play(model+color);
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  },
  fauteuil : {
    create:function(posx,posy,version,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'fauteuil');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].custId = id;
      spriteStorage[id].custType= 'fauteuil';
      spriteStorage[id].custCtrl= false;
      spriteStorage[id].scale.setTo(1.1,1.1);
      spriteStorage[id].animations.add('face', [0], 1, true);
      spriteStorage[id].animations.add('droite', [2], 1, true);
      spriteStorage[id].animations.add('gauche', [1], 1, true);
      if (version == 'face'){
        spriteStorage[id].body.setSize(82,5,0,5); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'droite'){
        spriteStorage[id].body.setSize(82,5,0,0); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'gauche'){
        spriteStorage[id].body.setSize(82,5,0,0); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      spriteStorage[id].animations.play(version);
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    },
  },
  lit : {
    create:function(posx,posy,version,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'lit');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].custId = id;
      spriteStorage[id].custType= 'lit';
      spriteStorage[id].custCtrl= false;
      spriteStorage[id].scale.setTo(0.7, 0.8);
      spriteStorage[id].animations.add('gauche', [0], 1, true);
      spriteStorage[id].animations.add('droite', [1], 1, true);
      spriteStorage[id].animations.add('face', [2], 1, true);
      if (version == 'gauche'){
        spriteStorage[id].body.setSize(230,50,10,50); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'droite'){
        spriteStorage[id].body.setSize(230,50,0,50); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'face'){
        spriteStorage[id].body.setSize(180,60,30,40); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      spriteStorage[id].animations.play(version);
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  },
  tables_chaises : {
    create:function(posx,posy,version,color,orientation,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'tables+chaises');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].custId = id;
      spriteStorage[id].custType= 'tables/chaises';
      spriteStorage[id].custCtrl= false;
      //spriteStorage[id].scale.setTo(0.6, 0.6);
      spriteStorage[id].animations.add('tablemarronface', [0], 1, true);
      spriteStorage[id].animations.add('tablegrisface', [1], 1, true);
      spriteStorage[id].animations.add('tabletaupeface', [2], 1, true);
      spriteStorage[id].animations.add('tablebeigeface', [3], 1, true);
      spriteStorage[id].animations.add('table+chaisesmarronface', [4], 1, true);
      spriteStorage[id].animations.add('table+chaisesgrisface', [5], 1, true);
      spriteStorage[id].animations.add('table+chaisestaupeface', [6], 1, true);
      spriteStorage[id].animations.add('table+chaisesbeigeface', [7], 1, true);
      spriteStorage[id].animations.add('tablemarroncote', [8], 1, true);
      spriteStorage[id].animations.add('tablegriscote', [9], 1, true);
      spriteStorage[id].animations.add('tabletaupecote', [10], 1, true);
      spriteStorage[id].animations.add('tablebeigecote', [11], 1, true);
      spriteStorage[id].animations.add('table+chaisesmarroncote', [12], 1, true);
      spriteStorage[id].animations.add('table+chaisesgriscote', [13], 1, true);
      spriteStorage[id].animations.add('table+chaisestaupecote', [14], 1, true);
      spriteStorage[id].animations.add('table+chaisesbeigecote', [15], 1, true);
      if (version == 'table' && orientation == 'face'){
        spriteStorage[id].body.setSize(155,10,25,65); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'table+chaises' && orientation == 'face'){
        spriteStorage[id].body.setSize(155,50,25,40); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'table' && orientation == 'cote'){
        spriteStorage[id].body.setSize(110,70,50,30); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (version == 'table+chaises' && orientation == 'cote'){
        spriteStorage[id].body.setSize(150,65,30,35); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      spriteStorage[id].animations.play(version+color+orientation);
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  },
  tablebasse : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'table basse');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].custId = id;
      spriteStorage[id].custType= 'tablebasse';
      spriteStorage[id].custCtrl= false;
      spriteStorage[id].scale.setTo(0.2,0.2);
      //spriteStorage[id].body.setSize(640,237,0,0); //largeur,hauteur,decalage largeur,décalage hauteur
    },
    update:function(id){
      //game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  }
};

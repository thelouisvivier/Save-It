var Furnitures = {
  armoire : {
    create:function(posx,posy,version,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'armoire');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
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
};

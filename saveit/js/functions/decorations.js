var Decorations = {
  plante : {
    create:function(posx,posy,model,id) {
      stateStorage[id]=true;
      if (model == 1){
        spriteStorage[id]=game.add.sprite(posx,posy,'plante');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].body.setSize(5,-40,25,0); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (model == 2){
        spriteStorage[id]=game.add.sprite(posx,posy,'plante1');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].scale.setTo(0.25,0.25);
        spriteStorage[id].body.setSize(40,1,180,20); //largeur,hauteur,decalage largeur,décalage hauteur
      }
      else if (model == 3){
        spriteStorage[id]=game.add.sprite(posx,posy,'plante2');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].scale.setTo(0.25,0.25);
        spriteStorage[id].body.setSize(-5,1,200,20); //largeur,hauteur,decalage largeur,décalage hauteur
      };
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  }
};

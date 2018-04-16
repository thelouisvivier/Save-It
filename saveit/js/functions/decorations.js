var Decorations = {
  cadre : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'cadre');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.2,0.2);
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  },
  plante : {
    create:function(posx,posy,model,id) {
      stateStorage[id]=true;
      if (model == 1){
        spriteStorage[id]=game.add.sprite(posx,posy,'plante');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
      }
      else if (model == 2){
        spriteStorage[id]=game.add.sprite(posx,posy,'plante1');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].scale.setTo(0.2,0.2);
      }
      else if (model == 3){
        spriteStorage[id]=game.add.sprite(posx,posy,'plante2');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].scale.setTo(0.2,0.2);
      }
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  }
};

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
        spriteStorage[id]=game.add.sprite(posx,posy,'plante1');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
      }
      else if (model == 2){
        spriteStorage[id]=game.add.sprite(posx,posy,'plante2');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].scale.setTo(0.2,0.2);
      }
      else if (model == 3){
        spriteStorage[id]=game.add.sprite(posx,posy,'plante3');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].scale.setTo(0.2,0.2);
      }
      else if (model == 4){
        spriteStorage[id]=game.add.sprite(posx,posy,'plante4');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].scale.setTo(0.15,0.15);
      }
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  },
  tapis : {
    create:function(posx,posy,model,l,h,id) {
      stateStorage[id]=true;
      if (model == 'bleu'){
        spriteStorage[id]=game.add.sprite(posx,posy,'tapisbleu');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].scale.setTo(l/500,h/375);
      }
      else if (model =='vert'){
        spriteStorage[id]=game.add.sprite(posx,posy,'tapisvert');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].scale.setTo(l/500,h/375);
      }
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
    }
  }
};

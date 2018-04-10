/*******************************************************************************************
Notice d'utilisation :

Cette fonction permet d'ajouter les differents objets au jeu.
Dans la partie "create" du jeu : Sprite.tv.create(#position en x#,#position en y#,#identifiant unique de l'objet#);
Dans la partie "update" du jeu : Sprite.tv.update(#identifiant unique de l'objet#);


***********************************************************************************************/
var Sprite = {
  louis : {
    create:function() {
      louis = game.add.sprite(game.world.centerX, game.world.centerY, 'louis');
      //louis.scale.setTo(0.5, 0.5);
      //louis.body.collideWorldBounds = true;
      game.physics.enable(louis, Phaser.Physics.ARCADE);
      cursors = game.input.keyboard.createCursorKeys();
      game.camera.follow(louis, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
      louis.animations.add('up', [9, 10, 11], 10, true);
      louis.animations.add('down', [12, 13, 14], 10, true);
      louis.animations.add('left', [0, 1, 2, 3], 10, true);
      louis.animations.add('right', [5, 6, 7, 8], 10, true);
    },
    update:function(){
      if (cursors.up.isDown){
        //louis.body.moveUp(300)
        louis.body.velocity.y = -300;
        louis.body.velocity.x=0;
        louis.animations.play('up');
      }
      else if (cursors.down.isDown){
        //louis.body.moveDown(300);
        louis.body.velocity.y = 300;
        louis.body.velocity.x=0;
        louis.animations.play('down');
      }
      else if (cursors.left.isDown){
        louis.body.velocity.x = -300;
        louis.body.velocity.y=0;
        louis.animations.play('left');
      }
      else if (cursors.right.isDown){
        louis.body.velocity.x =300;
        louis.body.velocity.y=0;
        louis.animations.play('right');
      }
      else {
        //Stand still
        louis.animations.stop();
        louis.body.velocity.y=0;
        louis.body.velocity.x=0;
        louis.frame = 4;
      }
    }
  },
  tv : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'tv');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].body.setSize(70, 20, 10); //droite,bas,décalage
      spriteStorage[id].animations.add('tvON', [0, 1, 2, 3, 4, 5, 6], 5, true);
      spriteStorage[id].animations.add('tvOFF', [7], 5, true);
    },
    update:function(id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (keyT.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^=true;
            flipFlop[id] = true;
          }
        }
        if (keyT.isUp) {
          flipFlop[id] = false;
        }
      }
      if (stateStorage[id]==true){
        spriteStorage[id].animations.play('tvON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('tvOFF')
      }
    }
  },
  lampe : {
    create : function(posx,posy,color,id) {
      stateStorage[id]=true;
      if (color == 'bleu') {
        spriteStorage[id]=game.add.sprite(posx,posy,'lampeB');
        spriteStorage[id].animations.add('lampeON', [0], 5, true);
        spriteStorage[id].animations.add('lampeOFF', [1], 5, true);
      };
      spriteStorage[id].scale.setTo(0.5, 0.5);
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].body.setSize(60, 40,10,220);//lampe par derrière
      //changer les parametres si on veut passer devant la lampe.
    },
    update : function(id) {
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (keyL.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^= true;
            flipFlop[id] = true;
          }
        }
        if (keyL.isUp) {
          flipFlop[id] = false;
        }
      }
      if (stateStorage[id]==true){
        spriteStorage[id].animations.play('lampeON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('lampeOFF');
      }
    }
  },
  evier : {
    create : function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'evier');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.5, 0.5);
      spriteStorage[id].body.setSize(180,0);
      spriteStorage[id].animations.add('evierON', [0,1,2], 5, true);
      spriteStorage[id].animations.add('evierOFF', [3], 5, true);
    },
    update : function(id) {
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (keyL.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^=true;
            flipFlop[id] = true;
          }
        }
        if (keyL.isUp) {
          flipFlop[id] = false;
        }
      }
      if (stateStorage[id]==true){
        spriteStorage[id].animations.play('evierON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('evierOFF');
      }
    }
  },
  radiateur : {
    create : function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'radiateur');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.7,0.7);
      spriteStorage[id].body.setSize(180,0);
      spriteStorage[id].animations.add('radiateurON', [1,2,3,4,5], 5, true);
      spriteStorage[id].animations.add('radiateurOFF', [0], 5, true);
    },
    update : function(id) {
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (keyT.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^=true;
            flipFlop[id] = true;
          }
        }
        if (keyT.isUp) {
          flipFlop[id] = false;
        }
      }
      if (stateStorage[id]==true){
        spriteStorage[id].animations.play('radiateurON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('radiateurOFF')
      }
    }
  }
};


//Lien pour les tests de distance : /https://stackoverflow.com/questions/29922024/how-to-set-keyboard-key-pressed-event-only-once-after-pressed-but-not-continousl

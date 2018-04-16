/*******************************************************************************************
Notice d'utilisation :

Cette fonction permet d'ajouter les differents objets au jeu.
Dans la partie "create" du jeu : Sprite.tv.create(#position en x#,#position en y#,#identifiant unique de l'objet#);
Dans la partie "update" du jeu : Sprite.tv.update(#Touche contrôle objet, cf keys.js#,#identifiant unique de l'objet#);


***********************************************************************************************/
var Sprite = {
  louis : {
    create:function() {
      louis = game.add.sprite(game.world.centerX, game.world.centerY, 'louis');
      //louis.scale.setTo(1.5,2);
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
    create:function(posx,posy,model,id) {
      stateStorage[id]=true;
      if (model == 'beige'){
        spriteStorage[id]=game.add.sprite(posx,posy,'tv');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].body.setSize(60,20,20,0); //largeur,hauteur,decalage largeur,décalage hauteur
        spriteStorage[id].animations.add('tvON', [0, 1, 2, 3, 4, 5, 6], 5, true);
        spriteStorage[id].animations.add('tvOFF', [7], 5, true);
      }
      else if (model == 'noir'){
        spriteStorage[id]=game.add.sprite(posx,posy,'tv2');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].body.setSize(60,20,20,0); //largeur,hauteur,decalage largeur,décalage hauteur
        spriteStorage[id].animations.add('tvON', [0, 1, 2], 5, true);
        spriteStorage[id].animations.add('tvOFF', [3], 5, true);
      }
    },
    update:function(key,id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (key.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^=true;
            flipFlop[id] = true;
          }
        }
        if (key.isUp) {
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
      }
      else if (color = 'jaune'){
        spriteStorage[id]=game.add.sprite(posx,posy,'lampeJ');
      };
      spriteStorage[id].animations.add('lampeON', [0], 5, true);
      spriteStorage[id].animations.add('lampeOFF', [1], 5, true);
      spriteStorage[id].scale.setTo(0.5, 0.5);
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].body.setSize(20,60,40,0); //largeur,hauteur,decalage largeur,décalage hauteur
    },
    update : function(key,id) {
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (key.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^= true;
            flipFlop[id] = true;
          }
        }
        if (key.isUp) {
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
      spriteStorage[id].body.setSize(120,-20,40,0); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('evierON', [0,1,2], 5, true);
      spriteStorage[id].animations.add('evierOFF', [3], 5, true);
    },
    update : function(key,id) {
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (key.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^=true;
            flipFlop[id] = true;
          }
        }
        if (key.isUp) {
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
      spriteStorage[id].body.setSize(100,0,70,0); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('radiateurON', [1,2,3,4,5], 5, true);
      spriteStorage[id].animations.add('radiateurOFF', [0], 5, true);
    },
    update : function(key,id) {
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (key.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^=true;
            flipFlop[id] = true;
          }
        }
        if (key.isUp) {
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
  },
  radio : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'radio');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].body.setSize(60,0,70,0); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('radioON', [0,1,2], 5, true);
      spriteStorage[id].animations.add('radioOFF', [3], 5, true);
    },
    update:function(key,id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (key.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^=true;
            flipFlop[id] = true;
          }
        }
        if (key.isUp) {
          flipFlop[id] = false;
        }
      }
      if (stateStorage[id]==true){
        spriteStorage[id].animations.play('radioON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('radioOFF')
      }
    }
  },
  fenetre : {
    create:function(posx,posy,version,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'fenetre');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.7, 0.7);
      spriteStorage[id].body.setSize(110,100,50,0); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('fenetreON', [0], 5, true);
      spriteStorage[id].animations.add('fenetreOFF', [version], 5, true);
    },
    update:function(key,id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (key.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^=true;
            flipFlop[id] = true;
          }
        }
        if (key.isUp) {
          flipFlop[id] = false;
        }
      }
      if (stateStorage[id]==true){
        spriteStorage[id].animations.play('fenetreON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('fenetreOFF')
      }
    }
  },
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
  },
  ordinateur : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'ordinateur');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.6, 0.7);
      spriteStorage[id].body.setSize(100,10,50,5); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('ordinateurON', [0], 1, true);
      spriteStorage[id].animations.add('ordinateurOFF', [1], 1, true);
    },
    update:function(key,id){
      game.physics.arcade.collide(louis, spriteStorage[id]);
      if(louis.body.x-spriteStorage[id].body.x<=100 && spriteStorage[id].body.x-louis.body.x<=100 && louis.body.y-spriteStorage[id].body.y<=100 && spriteStorage[id].body.y-louis.body.y<=100){
        if (key.isDown){
          if (!flipFlop[id]) {
            stateStorage[id]^=true;
            flipFlop[id] = true;
          }
        }
        if (key.isUp) {
          flipFlop[id] = false;
        }
      }
      if (stateStorage[id]==true){
        spriteStorage[id].animations.play('ordinateurON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('ordinateurOFF')
      }
    }
  }
};


//Lien pour les tests de distance : /https://stackoverflow.com/questions/29922024/how-to-set-keyboard-key-pressed-event-only-once-after-pressed-but-not-continousl

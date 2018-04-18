/*******************************************************************************************
Notice d'utilisation :

Cette fonction permet d'ajouter les differents objets au jeu.
Dans la partie "create" du jeu : Objects.tv.create(#position en x#,#position en y#,#identifiant unique de l'objet#);
Dans la partie "update" du jeu : Objects.tv.update(#Touche contrôle objet, cf keys.js#,#identifiant unique de l'objet#);


***********************************************************************************************/
var Appliances = {
  baignoire : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'baignoire');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.6, 0.6);
      spriteStorage[id].body.setSize(254,5,25,125); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('baignoireON', [1,2,3], 5, true);
      spriteStorage[id].animations.add('baignoireOFF', [0], 1, true);
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
        spriteStorage[id].animations.play('baignoireON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('baignoireOFF')
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
      spriteStorage[id].body.setSize(196,10,0,-20); //largeur,hauteur,decalage largeur,décalage hauteur
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
  fenetre : {
    create:function(posx,posy,version,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'fenetre');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.7, 0.7);
      spriteStorage[id].body.setSize(162,100,25,0); //largeur,hauteur,decalage largeur,décalage hauteur
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
  frigo : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'frigo');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.3, 0.3);
      spriteStorage[id].body.setSize(280,200,260,260); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('frigoON', [1], 1, true);
      spriteStorage[id].animations.add('frigoOFF', [0], 1, true);
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
        spriteStorage[id].animations.play('frigoON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('frigoOFF')
      }
    }
  },
  gaz : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'gaz');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.3, 0.3);
      spriteStorage[id].body.setSize(300,50,0,0); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('gazON', [1,2], 5, true);
      spriteStorage[id].animations.add('fourON', [3], 5, true);
      spriteStorage[id].animations.add('gazOFF', [0], 5, true);
    },
    update:function(key,state,id){
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
        if (state == 'four'){
          spriteStorage[id].animations.play('fourON');
        }
        else if (state == 'gaz'){
          spriteStorage[id].animations.play('gazON');
        }
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('gazOFF')
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
      spriteStorage[id].body.setSize(100,80,0,0); //largeur,hauteur,decalage largeur,décalage hauteur
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
  machinealaver : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'machinealaver');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.3, 0.3);
      spriteStorage[id].body.setSize(196,50,200,100); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('machineON', [0,1,2,3], 5, true);
      spriteStorage[id].animations.add('machineOFF', [4], 1, true);
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
        spriteStorage[id].animations.play('machineON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('machineOFF')
      }
    }
  },
  microonde : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'microonde');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.1, 0.1);
      spriteStorage[id].body.setSize(559,100,100,100); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('microondeON', [0], 5, true);
      spriteStorage[id].animations.add('microondeOFF', [1], 1, true);
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
        spriteStorage[id].animations.play('microondeON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('microondeOFF')
      }
    }
  },
  ordinateur : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'ordinateur');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.6, 0.7);
      spriteStorage[id].body.setSize(182,50,8,0); //largeur,hauteur,decalage largeur,décalage hauteur
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
  },
  radiateur : {
    create : function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id] = game.add.sprite(posx,posy,'radiateur');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.7,0.7);
      spriteStorage[id].body.setSize(160,20,40,0); //largeur,hauteur,decalage largeur,décalage hauteur
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
      spriteStorage[id].body.setSize(100,5,50,0); //largeur,hauteur,decalage largeur,décalage hauteur
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
  tv : {
    create:function(posx,posy,model,id) {
      stateStorage[id]=true;
      if (model == 'beige'){
        spriteStorage[id]=game.add.sprite(posx,posy,'tv');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].body.setSize(96,20,1,0); //largeur,hauteur,decalage largeur,décalage hauteur
        spriteStorage[id].animations.add('tvON', [0, 1, 2, 3, 4, 5, 6], 5, true);
        spriteStorage[id].animations.add('tvOFF', [7], 5, true);
      }
      else if (model == 'noir'){
        spriteStorage[id]=game.add.sprite(posx,posy,'tv2');
        game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
        spriteStorage[id].body.immovable = true;
        spriteStorage[id].body.setSize(96,20,1,0); //largeur,hauteur,decalage largeur,décalage hauteur
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
  ventilateur : {
    create:function(posx,posy,id) {
      stateStorage[id]=true;
      spriteStorage[id]=game.add.sprite(posx,posy,'ventilateur');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].scale.setTo(0.45, 0.45);
      spriteStorage[id].body.setSize(90,70,55,180); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('ventilateurON', [0,1], 5, true);
      spriteStorage[id].animations.add('ventilateurOFF', [2], 1, true);
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
        spriteStorage[id].animations.play('ventilateurON');
      }
      else if (stateStorage[id]==false) {
        spriteStorage[id].animations.play('ventilateurOFF')
      }
    }
  }
};


//Lien pour les tests de distance : /https://stackoverflow.com/questions/29922024/how-to-set-keyboard-key-pressed-event-only-once-after-pressed-but-not-continousl

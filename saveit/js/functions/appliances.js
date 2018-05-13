/*******************************************************************************************
Notice d'utilisation :

Cette fonction permet d'ajouter les differents objets au jeu.
Dans la partie "create" du jeu : Objects.tv.create(#position en x#,#position en y#,#identifiant unique de l'objet#);
Dans la partie "update" du jeu : Objects.tv.update(#Touche contrôle objet, cf keys.js#,#identifiant unique de l'objet#);


***********************************************************************************************/
var Appliances = {
baignoire : {
  create:function(posx,posy,id) {
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'baignoire');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'baignoire';
    spriteStorage[id].custCtrl= true;
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
  create : function(posx,posy,color,id) {
    stateStorage[id]=false;
    spriteStorage[id] = game.add.sprite(posx,posy,'cuisine');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'evier';
    spriteStorage[id].custCtrl= true;
    spriteStorage[id].scale.setTo(0.1, 0.1);
    spriteStorage[id].body.setSize(1300,600,350,350); //largeur,hauteur,decalage largeur,décalage hauteur
    if (color == 'blanc'){
      spriteStorage[id].animations.add('evierON', [7,8,9], 5, true);
      spriteStorage[id].animations.add('evierOFF', [6], 5, true);
    }
    else if (color =='marron'){
      spriteStorage[id].animations.add('evierON', [11,12,13], 5, true);
      spriteStorage[id].animations.add('evierOFF', [10], 5, true);
    }
    else if (color == 'beige'){
      spriteStorage[id].animations.add('evierON', [15,16,17], 5, true);
      spriteStorage[id].animations.add('evierOFF', [14], 5, true);
    }
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
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'fenetre');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'fenetre';
    spriteStorage[id].custCtrl= true;
    spriteStorage[id].scale.setTo(0.6, 0.6);
    spriteStorage[id].body.setSize(162,60,25,0); //largeur,hauteur,decalage largeur,décalage hauteur
    spriteStorage[id].animations.add('fenetreOFF', [0], 5, true);
    spriteStorage[id].animations.add('fenetreON', [version], 5, true);
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
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'frigo');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'frigo';
    spriteStorage[id].custCtrl= true;
    spriteStorage[id].scale.setTo(0.28, 0.28);
    spriteStorage[id].body.setSize(280,160,260,260); //largeur,hauteur,decalage largeur,décalage hauteur
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
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'gaz');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'gaz';
    spriteStorage[id].custCtrl= true;
    spriteStorage[id].scale.setTo(0.3, 0.3);
    spriteStorage[id].body.setSize(300,50,0,-50); //largeur,hauteur,decalage largeur,décalage hauteur
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
    stateStorage[id]=false;
    if (color == 'bleu') {
      spriteStorage[id]=game.add.sprite(posx,posy,'lampe_bleue');
    }
    else if (color == 'jaune'){
      spriteStorage[id]=game.add.sprite(posx,posy,'lampe_jaune');
    }
    else if (color == 'vert'){
      spriteStorage[id]=game.add.sprite(posx,posy,'lampe_verte');
    };
    spriteStorage[id].animations.add('lampeON', [0], 5, true);
    spriteStorage[id].animations.add('lampeOFF', [1], 5, true);
    spriteStorage[id].scale.setTo(0.5, 0.5);
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'lampe';
    spriteStorage[id].custCtrl= true;
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
lavabo : {
  create:function(posx,posy,id) {
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'lavabo');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'lavabo';
    spriteStorage[id].custCtrl= true;
    spriteStorage[id].scale.setTo(0.6, 0.6);
    spriteStorage[id].body.setSize(115,10,40,40); //largeur,hauteur,decalage largeur,décalage hauteur
    spriteStorage[id].animations.add('lavaboOFF', [0], 1, true);
    spriteStorage[id].animations.add('lavaboON', [1,2,3,4,5],5, true);
  },
  update:function(key,id){
    game.physics.arcade.collide(louis, spriteStorage[id]);
    if(louis.body.x-spriteStorage[id].body.x<=50 && spriteStorage[id].body.x-louis.body.x<=50 && louis.body.y-spriteStorage[id].body.y<=50 && spriteStorage[id].body.y-louis.body.y<=50){
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
      spriteStorage[id].animations.play('lavaboON');
    }
    else if (stateStorage[id]==false) {
      spriteStorage[id].animations.play('lavaboOFF');
    }
  }
},
lumiere : {
  create:function(posxApp,posyApp,posxInt,posyInt,color,forme,idApp,idInt) {
    if (typeof idApp == 'object'){
      for (let icr of idApp){
        stateStorage[icr]=false;
        spriteStorage[icr]=game.add.sprite(posxApp[idApp.indexOf(icr)],posyApp[idApp.indexOf(icr)],'appliques');
        game.physics.enable(spriteStorage[icr], Phaser.Physics.ARCADE);
        spriteStorage[icr].body.immovable = true;
        spriteStorage[icr].custId = icr;
        spriteStorage[icr].custType= 'applique';
        spriteStorage[icr].scale.setTo(0.4, 0.4);
        if (color == 'blanc'&& forme =='rectangulaire'){
          spriteStorage[icr].animations.add('lumièreOFF', [0], 1, true);
          spriteStorage[icr].animations.add('lumièreON', [1],1, true);
        }
        else if (color =='marron' && forme =='rectangulaire'){
          spriteStorage[icr].animations.add('lumièreOFF', [2], 1, true);
          spriteStorage[icr].animations.add('lumièreON', [3],1, true);
        }
        else if (color =='noir' && forme =='rectangulaire'){
          spriteStorage[icr].animations.add('lumièreOFF', [4], 1, true);
          spriteStorage[icr].animations.add('lumièreON', [5],1, true);
        }
        else if (color =='blanc' && forme =='rond'){
          spriteStorage[icr].animations.add('lumièreOFF', [6], 1, true);
          spriteStorage[icr].animations.add('lumièreON', [7],1, true);
        }
        else if (color =='marron' && forme =='rond'){
          spriteStorage[icr].animations.add('lumièreOFF', [8], 1, true);
          spriteStorage[icr].animations.add('lumièreON', [9],1, true);
        }
        else if (color =='noir' && forme =='rond'){
          spriteStorage[icr].animations.add('lumièreOFF', [10], 1, true);
          spriteStorage[icr].animations.add('lumièreON', [11],1, true);
        }
      }
    }
    else {
      stateStorage[idApp]=false;
      spriteStorage[idApp]=game.add.sprite(posxApp,posyApp,'appliques');
      game.physics.enable(spriteStorage[idApp], Phaser.Physics.ARCADE);
      spriteStorage[idApp].body.immovable = true;
      spriteStorage[idApp].custId = idApp;
      spriteStorage[idApp].custType= 'applique';
      spriteStorage[idApp].scale.setTo(0.4, 0.4);
      if (color == 'blanc'&& forme =='rectangulaire'){
        spriteStorage[idApp].animations.add('lumièreOFF', [0], 1, true);
        spriteStorage[idApp].animations.add('lumièreON', [1],1, true);
      }
      else if (color =='marron' && forme =='rectangulaire'){
        spriteStorage[idApp].animations.add('lumièreOFF', [2], 1, true);
        spriteStorage[idApp].animations.add('lumièreON', [3],1, true);
      }
      else if (color =='noir' && forme =='rectangulaire'){
        spriteStorage[idApp].animations.add('lumièreOFF', [4], 1, true);
        spriteStorage[idApp].animations.add('lumièreON', [5],1, true);
      }
      else if (color =='blanc' && forme =='rond'){
        spriteStorage[idApp].animations.add('lumièreOFF', [6], 1, true);
        spriteStorage[idApp].animations.add('lumièreON', [7],1, true);
      }
      else if (color =='marron' && forme =='rond'){
        spriteStorage[idApp].animations.add('lumièreOFF', [8], 1, true);
        spriteStorage[idApp].animations.add('lumièreON', [9],1, true);
      }
      else if (color =='noir' && forme =='rond'){
        spriteStorage[idApp].animations.add('lumièreOFF', [10], 1, true);
        spriteStorage[idApp].animations.add('lumièreON', [11],1, true);
      }
    }
    stateStorage[idInt]=false;
    spriteStorage[idInt]=game.add.sprite(posxInt,posyInt,'interrupteur');
    game.physics.enable(spriteStorage[idInt], Phaser.Physics.ARCADE);
    spriteStorage[idInt].body.immovable = true;
    spriteStorage[idInt].custId = idInt;
    spriteStorage[idInt].custType= 'interrupteur';
    spriteStorage[idInt].custCrtl= true;
    spriteStorage[idInt].scale.setTo(0.5, 0.5);
  },
  update:function(key,idApp,idInt){
    if(louis.body.x-spriteStorage[idInt].body.x<=60 && spriteStorage[idInt].body.x-louis.body.x<=60 && louis.body.y-spriteStorage[idInt].body.y<=60 && spriteStorage[idInt].body.y-louis.body.y<=60){
      if (key.isDown){
        if (!flipFlop[idInt]) {
          stateStorage[idInt]^=true;
          flipFlop[idInt] = true;
        }
      }
      if (key.isUp) {
        flipFlop[idInt] = false;
      }
    }
    if (stateStorage[idInt]==true){
      if (typeof idApp  == 'object'){
        for (let itr of idApp){
          spriteStorage[itr].animations.play('lumièreON');
        }
      }
      else {
        spriteStorage[idApp].animations.play('lumièreON');
      }
    }
    else if (stateStorage[idInt]==false) {
      if (typeof idApp  == 'object'){
        for (let ifa of idApp){
          spriteStorage[ifa].animations.play('lumièreOFF');
        }
      }
      else {
        spriteStorage[idApp].animations.play('lumièreOFF');
      }
    }
  }
},
machinealaver : {
  create:function(posx,posy,id) {
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'machinealaver');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'machinealaver';
    spriteStorage[id].custCtrl= true;
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
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'microonde');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'microonde';
    spriteStorage[id].custCtrl= true;
    spriteStorage[id].scale.setTo(0.4, 0.4);
    spriteStorage[id].body.setSize(165,30,15,30); //largeur,hauteur,decalage largeur,décalage hauteur
    spriteStorage[id].animations.add('microondeON', [0], 1, true);
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
miroir : {
  create : function(posx,posy,id) {
    stateStorage[id]=false;
    spriteStorage[id] = game.add.sprite(posx,posy,'miroir');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'miroir';
    spriteStorage[id].custCtrl= true;
    spriteStorage[id].scale.setTo(0.2,0.2);
    //spriteStorage[id].body.setSize(160,20,40,0); //largeur,hauteur,decalage largeur,décalage hauteur
    spriteStorage[id].animations.add('miroirON', [2], 5, true);
    spriteStorage[id].animations.add('miroirOFF', [1], 5, true);
  },
  update : function(key,id) {
    //game.physics.arcade.collide(louis, spriteStorage[id]);
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
      spriteStorage[id].animations.play('miroirON');
    }
    else if (stateStorage[id]==false) {
      spriteStorage[id].animations.play('miroirOFF')
    }
  }
},
ordinateur : {
  create:function(posx,posy,id) {
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'ordinateur');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'ordinateur';
    spriteStorage[id].custCtrl= true;
    spriteStorage[id].scale.setTo(0.8, 0.9);
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
    stateStorage[id]=false;
    spriteStorage[id] = game.add.sprite(posx,posy,'radiateur');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'radiateur';
    spriteStorage[id].custCtrl= true;
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
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'radio');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'radio';
    spriteStorage[id].custCtrl= true;
    spriteStorage[id].scale.setTo(0.8,0.8);
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
    stateStorage[id]=false;
    if (model == 'beige'){
      spriteStorage[id]=game.add.sprite(posx,posy,'tv');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].custId = id;
      spriteStorage[id].custType= 'tv';
      spriteStorage[id].custCtrl= true;
      spriteStorage[id].body.setSize(96,20,1,0); //largeur,hauteur,decalage largeur,décalage hauteur
      spriteStorage[id].animations.add('tvON', [0, 1, 2, 3, 4, 5, 6], 5, true);
      spriteStorage[id].animations.add('tvOFF', [7], 5, true);
    }
    else if (model == 'noir'){
      spriteStorage[id]=game.add.sprite(posx,posy,'tv2');
      game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
      spriteStorage[id].body.immovable = true;
      spriteStorage[id].custId = id;
      spriteStorage[id].custType= 'tv';
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
    stateStorage[id]=false;
    spriteStorage[id]=game.add.sprite(posx,posy,'ventilateur');
    game.physics.enable(spriteStorage[id], Phaser.Physics.ARCADE);
    spriteStorage[id].body.immovable = true;
    spriteStorage[id].custId = id;
    spriteStorage[id].custType= 'ventilateur';
    spriteStorage[id].custCtrl= true;
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

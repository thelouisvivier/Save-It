var Walls = {
  horizontal : {
    create:function(posx,posy,color,id) {
      wallStorage[id]=game.add.sprite(posx,posy,'wall-'+color);
      game.physics.enable(wallStorage[id], Phaser.Physics.ARCADE);
      wallStorage[id].body.immovable = true;
      if (color == "noir"){
        wallStorage[id].body.setSize(27,30,2,0); //largeur,hauteur,decalage largeur,décalage hauteur
        wallStorage[id].scale.setTo(10,3);
      }
      else {
        //wallStorage[id].body.setSize(25,20,20,0); //largeur,hauteur,decalage largeur,décalage hauteur
      }
    },
    update:function(id){
      game.physics.arcade.collide(louis, wallStorage[id]);
    }
  },
  vertical : {
    create:function(posx,posy,id) {
      wallStorage[id]=game.add.sprite(posx,posy,'wall-noir');
      game.physics.enable(wallStorage[id], Phaser.Physics.ARCADE);
      wallStorage[id].body.immovable = true;
      wallStorage[id].body.setSize(20,30,5,0); //largeur,hauteur,decalage largeur,décalage hauteur
      wallStorage[id].scale.setTo(3,10);
    },
    update:function(id){
      game.physics.arcade.collide(louis, wallStorage[id]);
    }
  }
}

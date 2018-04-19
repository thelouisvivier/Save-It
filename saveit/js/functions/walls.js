var Walls = {
  vertical : {
    create:function(posx,posy,color,l,h,id) {
      wallStorage[id]=game.add.sprite(posx,posy,'wall-'+color);
      game.physics.enable(wallStorage[id], Phaser.Physics.ARCADE);
      wallStorage[id].body.immovable = true;
      wallStorage[id].scale.setTo(l/31,h/31);
    },
    update:function(id){
      game.physics.arcade.collide(louis, wallStorage[id]);
    }
  },
  horizontal : {
    create:function(posx,posy,color,l,h,id) {
      wallStorage[id]=game.add.sprite(posx,posy,'wall-'+color);
      game.physics.enable(wallStorage[id], Phaser.Physics.ARCADE);
      wallStorage[id].body.immovable = true;
      wallStorage[id].body.setSize(31,10,0,0); //largeur,hauteur,decalage largeur,décalage hauteur
      wallStorage[id].scale.setTo(l/31,h/31);
    },
    update:function(id){
      game.physics.arcade.collide(louis, wallStorage[id]);
    }
  }
}

var Perso = {
  louis : {
    create:function(posx,posy) {//game.paused = true; et game.world.centerY pour le milieu du jeu
      louis = game.add.sprite(posx, posy, 'louis');
      //louis.body.collideWorldBounds = true;
      game.physics.enable(louis, Phaser.Physics.ARCADE);
      louis.body.setSize(60,95,20,0); //largeur,hauteur,decalage largeur,décalage hauteur
      louis.scale.setTo(1,1.1);
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
        louis.body.velocity.y = -600;
        louis.body.velocity.x=0;
        louis.animations.play('up');
      }
      else if (cursors.down.isDown){
        //louis.body.moveDown(300);
        louis.body.velocity.y = 600;
        louis.body.velocity.x=0;
        louis.animations.play('down');
      }
      else if (cursors.left.isDown){
        louis.body.velocity.x = -600;
        louis.body.velocity.y=0;
        louis.animations.play('left');
      }
      else if (cursors.right.isDown){
        louis.body.velocity.x =600;
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
  }
};

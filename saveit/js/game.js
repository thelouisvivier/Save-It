var dude;
var cursors;
var timer;
var total = 3;

var Game = {
  preload: function (){
  game.load.image('dude', 'assets/dude.png');
  game.load.image('carrelage','assets/carrelage.png');
	game.load.image('Game Over', 'assets/GameOver.png');
},


create : function() {
game.add.tileSprite(0, 0, 1920, 1920, 'carrelage');

game.world.setBounds(0, 0, 1920, 1920);

dude = game.add.sprite(game.world.centerX, game.world.centerY, 'dude');

game.physics.startSystem(Phaser.Physics.P2JS);

game.physics.p2.enable(dude);

dude.body.fixedRotation = true;

cursors = game.input.keyboard.createCursorKeys();


    game.camera.follow(dude, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

		//  Create our Timer
timer = game.time.create(false);

//  Set a TimerEvent to occur after 1 seconds
timer.loop(1000, Game.updateCounter, this);

//  Start the timer running - this is important!
//  It won't start automatically, allowing you to hook it to button events and the like.
timer.start();


},

update : function () {

      dude.body.setZeroVelocity();

      if (cursors.up.isDown)
      {
          dude.body.moveUp(300)
      }
      else if (cursors.down.isDown)
      {
          dude.body.moveDown(300);
      }

      if (cursors.left.isDown)
      {
          dude.body.velocity.x = -300;
      }
      else if (cursors.right.isDown)
      {
          dude.body.moveRight(300);
      }


			if(total==0){

				timer.stop();}


},

updateCounter : function (){
	game.add.tileSprite(400, 300, 200, 200, 'Game Over');
	total--;
},


render :function () {
	game.debug.text('Argent restant: ' + total + '€', 600 , 64);
    game.debug.cameraInfo(game.camera, 32, 32);


}
}

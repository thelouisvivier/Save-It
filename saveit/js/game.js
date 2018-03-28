var louis;
var tvgroup;
var tv;
var cursors;
var timer;
var total = 3;
var keyA;
var keyAdown=false;
var tvstate=true;
var flipFlop;
var Game = {
  preload: function (){
    game.load.image('sol','assets/sol.png');
    game.load.image('Game Over', 'assets/GameOver.png');
    game.load.spritesheet('louis', 'assets/louis.png', 100, 95);
    game.load.spritesheet('tv', 'assets/tv.png', 100, 100);
  },


  create : function() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');

    game.world.setBounds(0, 0, 1920, 1920);

    louis = game.add.sprite(game.world.centerX, game.world.centerY, 'louis');
    //louis.scale.setTo(0.5, 0.5);

    tv=game.add.sprite(1000,800,'tv')

    /*
    tvgroup= game.add.group();
    var tv = game.add.sprite(1000,800, 'tv');
    tvgroup.add(tv);
    //tvgroup.create(1000, 800, 'tv');
    //tv.scale.setTo(0.5, 0.5);
    */


    game.physics.enable(louis, Phaser.Physics.ARCADE);
    game.physics.enable(tv, Phaser.Physics.ARCADE);
    tv.body.immovable = true;
    louis.body.collideWorldBounds = true;



    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(louis, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    //  Create our Timer
    timer = game.time.create(false);
    //  Set a TimerEvent to occur after 1 seconds
    timer.loop(1000, Game.updateCounter, this);
    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();
    //  We will enable physics for any star that is created in this group
    //  Here we'll create 12 of them evenly spaced apart
    //  Create a star inside of the 'stars' group
    louis.animations.add('up', [9, 10, 11], 10, true);
    louis.animations.add('down', [12, 13, 14], 10, true);
    louis.animations.add('left', [0, 1, 2, 3], 10, true);
    louis.animations.add('right', [5, 6, 7, 8], 10, true);
    tv.animations.add('on', [0, 1, 2, 3, 4, 5, 6], 5, true);
    tv.animations.add('off', [7], 5, true);

    keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
  },

  update : function ()
  {
    this.game.physics.arcade.collide(louis, tv);

    //Test de la distance entre le joueur et la télé, à reformuler
    //https://stackoverflow.com/questions/29922024/how-to-set-keyboard-key-pressed-event-only-once-after-pressed-but-not-continousl
    if(louis.body.x-tv.body.x<=100){
      if(tv.body.x-louis.body.x<=100){
        if(louis.body.y-tv.body.y<=100){
          if(tv.body.y-louis.body.y<=100){
            if (keyA.isDown){
              if (!flipFlop) {
                tvstate^=true
                flipFlop = true;
              }
            }
            if (keyA.isUp) {
              flipFlop = false;
            }
          }
        }}}
        if (tvstate==true){
          tv.animations.play('on');
        }
        else if (tvstate==false) {
          tv.animations.play('off')
        }
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
          //  Stand still
          louis.animations.stop();
          louis.body.velocity.y=0;
          louis.body.velocity.x=0;
          louis.frame = 4;
        }
        if(total==0){
          timer.stop();}
        },

        updateCounter : function (){
          game.add.tileSprite(400, 300, 200, 200, 'Game Over');
          if(tvstate==true){
            total--;
          };
        },

        render :function () {
          game.debug.text('Argent restant: ' + total + '€', 1000 , 64);
        },

      }

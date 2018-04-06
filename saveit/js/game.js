var louis;
var tvgroup;
var tv;
var lampeB;
var evier;
var radiateur;
var cursors;
var timer;
var total = 3;
var keyT;
var keyTdown=false;
var keyL;
var keyLdown=false;
var tvstate=true;
var lampeBstate=true;
var evierstate=true;
var radiateurstate=true;
var flipFlop;
var Game = {
  preload: function (){
    game.load.image('sol','assets/textures/sol.png');
    game.load.image('popup', 'assets/popup/popupwindow.png');
    game.load.spritesheet('louis', 'assets/sprites/perso/louis.png', 100, 95);
    game.load.spritesheet('tv', 'assets/sprites/objects/tv.png', 100, 100);
    game.load.spritesheet('lampeB', 'assets/sprites/objects/lampeB.png', 100, 256);
    game.load.spritesheet('evier', 'assets/sprites/objects/evier.png', 200, 158);
    game.load.spritesheet('radiateur', 'assets/sprites/objects/radiateur.png', 240, 150);
  },


  create : function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');
    Popup.create('tvinfo');
    game.world.setBounds(0, 0, 1920, 1920);
    tv=game.add.sprite(1200,800,'tv')
    evier=game.add.sprite(1400,800,'evier')
    radiateur=game.add.sprite(1100,1100,'radiateur')
    game.physics.enable(tv, Phaser.Physics.ARCADE);
    game.physics.enable(evier, Phaser.Physics.ARCADE);
    game.physics.enable(radiateur, Phaser.Physics.ARCADE);
    tv.body.immovable = true;
    evier.body.immovable = true;
    radiateur.body.immovable = true;
    louis = game.add.sprite(game.world.centerX, game.world.centerY, 'louis');
    //louis.scale.setTo(0.5, 0.5);
    //louis.body.collideWorldBounds = true;
    game.physics.enable(louis, Phaser.Physics.ARCADE);

    tv.body.setSize(70, 20, 10); //droite,bas,décalage

    lampeB=game.add.sprite(1000,800,'lampeB')
    lampeB.scale.setTo(0.5, 0.5);
    game.physics.enable(lampeB, Phaser.Physics.ARCADE);
    lampeB.body.immovable = true;
    lampeB.body.setSize(60, 40,10,220);//lampe par derrière
    //changer les parametres si on veut passer devant la lampe.



    evier.scale.setTo(0.5, 0.5);
    evier.body.setSize(180,0);
    radiateur.scale.setTo(0.7,0.7);
    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(louis, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    //  Create our Timer
    timer = game.time.create(false);
    //  Set a TimerEvent to occur after 1 seconds
    timer.loop(1000, Game.updateCounter, this);
    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();

    louis.animations.add('up', [9, 10, 11], 10, true);
    louis.animations.add('down', [12, 13, 14], 10, true);
    louis.animations.add('left', [0, 1, 2, 3], 10, true);
    louis.animations.add('right', [5, 6, 7, 8], 10, true);
    tv.animations.add('tvon', [0, 1, 2, 3, 4, 5, 6], 5, true);
    tv.animations.add('tvoff', [7], 5, true);
    lampeB.animations.add('lampeBon', [0], 5, true);
    lampeB.animations.add('lampeBoff', [1], 5, true);
    evier.animations.add('evieron', [0,1,2], 5, true);
    evier.animations.add('evieroff', [3], 5, true);
    radiateur.animations.add('radiateuron', [1,2,3,4,5], 5, true);
    radiateur.animations.add('radiateuroff', [0], 5, true);

    keyT = game.input.keyboard.addKey(Phaser.Keyboard.T);
    keyL = game.input.keyboard.addKey(Phaser.Keyboard.L);
  },

  update : function ()
  {
    this.game.physics.arcade.collide(louis, tv);
    this.game.physics.arcade.collide(louis, lampeB);
    this.game.physics.arcade.collide(louis, evier);
    this.game.physics.arcade.collide(louis, radiateur);
    //Test de la distance entre le joueur et la télé, à reformuler
    //https://stackoverflow.com/questions/29922024/how-to-set-keyboard-key-pressed-event-only-once-after-pressed-but-not-continousl
    if(louis.body.x-tv.body.x<=100 && tv.body.x-louis.body.x<=100 && louis.body.y-tv.body.y<=100 && tv.body.y-louis.body.y<=100){
      if (keyT.isDown){
        if (!flipFlop) {
          tvstate^=true
          flipFlop = true;
        }
      }
      if (keyT.isUp) {
        flipFlop = false;
      }
    }


        if (tvstate==true){
          tv.animations.play('tvon');
        }
        else if (tvstate==false) {
          tv.animations.play('tvoff')
        }


        if(louis.body.x-lampeB.body.x<=100 && lampeB.body.x-louis.body.x<=100 && louis.body.y-lampeB.body.y<=100 && lampeB.body.y-louis.body.y<=100){
          if (keyL.isDown){
            if (!flipFlop) {
              lampeBstate^=true
              flipFlop = true;
            }
          }
          if (keyL.isUp) {
            flipFlop = false;
          }
        }


            if (lampeBstate==true){
              lampeB.animations.play('lampeBon');
            }
            else if (lampeBstate==false) {
              lampeB.animations.play('lampeBoff')
            }


            if(louis.body.x-evier.body.x<=100 && evier.body.x-louis.body.x<=100 && louis.body.y-evier.body.y<=100 && evier.body.y-louis.body.y<=100){
              if (keyL.isDown){
                if (!flipFlop) {
                  evierstate^=true
                  flipFlop = true;
                }
              }
              if (keyL.isUp) {
                flipFlop = false;
              }
            }


                if (evierstate==true){
                  evier.animations.play('evieron');
                }
                else if (evierstate==false) {
                  evier.animations.play('evieroff')
                }

                if(louis.body.x-radiateur.body.x<=100 && radiateur.body.x-louis.body.x<=100 && louis.body.y-radiateur.body.y<=100 && radiateur.body.y-louis.body.y<=100){
                  if (keyT.isDown){
                    if (!flipFlop) {
                      radiateurstate^=true
                      flipFlop = true;
                    }
                  }
                  if (keyT.isUp) {
                    flipFlop = false;
                  }
                }


                    if (radiateurstate==true){
                      radiateur.animations.play('radiateuron');
                    }
                    else if (radiateurstate==false) {
                      radiateur.animations.play('radiateuroff')
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
          if(tvstate==true){
            total--;
          };
        },

        render :function () {
          game.debug.text('Argent restant: ' + total + '€', 1000 , 64);
        },

      }

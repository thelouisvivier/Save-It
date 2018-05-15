var timer;
var tempsrestant;
var timers = {
  create : function() {
    //  Create our Timer
    timer = game.time.create(false);
    //  Set a TimerEvent to occur after 1 seconds

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();

    timer.loop(1000, timers.updateCounter, this);
    timer.loop(1000, timers.whattimeisit, this);
    timer.loop(1500, gamerule.countobjon,this);
    timer.loop(3000, gamerule.allumeobj,this);
    window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio
    texttime = game.add.bitmapText( 20, 20, 'ObelixPro', 'Temps restant: ' + tempsrestant + ' s', 25);
    texttime.anchor.x = 0;
    texttime.fixedToCamera = true;
    //textime.cameraOffset.setTo(200, 500);
    textmonney = game.add.bitmapText( window.innerWidth * window.devicePixelRatio - 20, 20, 'ObelixPro', 'Argent restant: ' + total.toFixed(2) + '€', 25);
    textmonney.anchor.x = 1;
    textmonney.fixedToCamera = true;
  },
  updateText : function () {
    if(total>0){
      textmonney.setText('Argent restant: ' + total.toFixed(2) + '€');
    }
    else{
      textmonney.setText('Argent restant: 0 €');
    }
    texttime.setText('Temps restant: ' + tempsrestant + ' s');
  },

  updateCounter : function (){
    total;
  },
  whattimeisit : function(){
    tempsrestant--;
  }
}

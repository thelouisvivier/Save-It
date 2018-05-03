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
  timer.loop(1000, gamerule.countobjon,this);
  timer.loop(3000, gamerule.allumeobj,this);
},


updateCounter : function (){
    total;
  },
  whattimeisit : function(){
    tempsrestant--;
  }
}

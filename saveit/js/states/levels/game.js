//Pour le joueur
var louis;
var cursors;
var nbobj;
//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];
var turnon;
var coutobjprecedent;
coutobjprecedent=0
//Compteur
var timer;
var total;

var Game = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    total=100;
    nbobj=0;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');
    game.world.setBounds(0, 0, 1920, 1920);


    //Ajout des sprite
    Appliances.tv.create(1200,800,'noir',0/*id UNIQUE de l'objet*/);
    Appliances.lampe.create(1000,600,'jaune',1);
    Appliances.radiateur.create(1300,700,2);
    //Appliances.microonde.create(1400,800,3);
    Appliances.radio.create(900,800,3);
    Appliances.fenetre.create(600,600,1/*model de fenetre*/,4);
    Appliances.ventilateur.create(1000,1000,5);
    //Popup.create('lampeinfo',1000,600);

    //Ajout du perso
    Perso.louis.create();

    //  Create our Timer
    timer = game.time.create(false);
    //  Set a TimerEvent to occur after 1 seconds
    timer.loop(1000, Game.updateCounter, this);
    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();
    timer.loop(1000, Game.countobjon,this);
    timer.loop(2000, Game.allumeobj,this);

    console.log(spriteStorage[0].key);
    console.log(spriteStorage[0]);
    console.log(spriteStorage[1]);
    console.log(spriteStorage[2]);

//<<<<<<< HEAD
    for (o of stateStorage){
    nbobj++;};

    //Menu Pause
    menuPause('GameState');
  },


  update : function (){
    //Update des differents élements ajoutés dans le create
    Perso.louis.update();
    Appliances.tv.update(Keys.T(),0);// Touche pour contôler l'objet et ID unique de cet objet
    Appliances.lampe.update(Keys.L(),1);
    Appliances.radiateur.update(Keys.R(),2);
  //  Appliances.microonde.update(Keys.M(),3);
    Appliances.radio.update(Keys.R(),3);
    Appliances.fenetre.update(Keys.F(),4);
    Appliances.ventilateur.update(Keys.V(),5);

    if(total==0){
      timer.stop();
    };
  },

  updateCounter : function (){
    total;
  },

  render :function () {
    game.debug.text('Argent restant: ' + total.toFixed(2) + '€', 1000 , 64);

  },
  countobjon :function ()
  {
    var i=0;
    for(var i of spriteStorage){
      console.log(i);

      if(i.key=='tv2' && stateStorage[i.z-1]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'tv2'){
            total -= objectcost[index].cost;
          }
        });
   };
      if(i.key=='radio' && stateStorage[i.z-1])
      {
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'radio'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='lampe' && stateStorage[i.z-1])
      {
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'lampe'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.key=='ventilateur' && stateStorage[i.z-1])
      {
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'ventilateur'){
            total -= objectcost[index].cost;
          }
        });
      };
    }
},
allumeobj :function()
{
  if(coutobjprecedent <= 1.75)
  {
    turnon = Math.random() * (nbobj);
    turnon=Math.trunc(turnon);
    stateStorage[turnon]=true;
    objectcost.forEach(function(element)
      {
        index = objectcost.indexOf(element);
        if (objectcost[index].name == spriteStorage[turnon].key)
        {
          coutobjprecedent= objectcost[index].cost;
          console.log(coutobjprecedent);
        }
      });
}
else {
  coutobjprecedent=coutobjprecedent-1;
}

},
}

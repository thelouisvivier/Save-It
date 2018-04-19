//Pour le joueur
var louis;
var cursors;
var nbobjon;
//Pour les objets
var spriteStorage = [];
var stateStorage = [];
var flipFlop = [];

//Compteur
var timer;
var total;

var Game = {

  preload: function (){
    Whattoload();
  },

  create : function() {
    total=100;
    nbobjon=0;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, 1920, 1920, 'sol');
    game.world.setBounds(0, 0, 1920, 1920);


    //Ajout des sprite
    Appliances.tv.create(1200,800,'noir',0/*id UNIQUE de l'objet*/);
    Appliances.lampe.create(1000,600,'jaune',1);
    Appliances.radiateur.create(1300,700,2);
    Appliances.microonde.create(1400,800,3);
    Appliances.radio.create(900,800,4);
    Appliances.fenetre.create(600,600,1/*model de fenetre*/,5);
    Appliances.ventilateur.create(1000,1000,6);
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
    console.log(spriteStorage[0].key);
    console.log(spriteStorage[0]);
    console.log(spriteStorage[1]);
    console.log(spriteStorage[2]);

  },

  update : function (){
    //Update des differents élements ajoutés dans le create
    Perso.louis.update();
    Appliances.tv.update(Keys.T(),0);// Touche pour contôler l'objet et ID unique de cet objet
    Appliances.lampe.update(Keys.L(),1);
    Appliances.radiateur.update(Keys.R(),2);
    Appliances.microonde.update(Keys.M(),3);
    Appliances.radio.update(Keys.R(),4);
    Appliances.fenetre.update(Keys.F(),5);
    Appliances.ventilateur.update(Keys.V(),6);

    if(total==0){
      timer.stop();
    };
  },

  updateCounter : function (){
    total
  },

  render :function () {
    game.debug.text('Argent restant: ' + total.toFixed(2) + '€', 1000 , 64);

  },
  countobjon :function ()
  {
    for(i of spriteStorage){
      if(i.key=='tv2' && stateStorage[i.z-1]){
     total-=2;
   };
      if(i.key=='radio' && stateStorage[i.z-1])
      {
        total-=1.5;
      };
      if(i.key=='lampe' && stateStorage[i.z-1])
      {
        total-=1;
      };
      if(i.key=='ventilateur' && stateStorage[i.z-1])
      {
        total-=1.3;
      };
    }
}
}

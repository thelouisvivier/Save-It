//Lors de l'appel de la fonction il faut bien mettre le nom du state
//afin que le bouton "recommencer fonctionne correctement"
var menuPause = function(nameState){
  var groupePause = game.add.group();
  var touchePause = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
  var scaleBoutonX = 0.55;
  var scaleBoutonY = 0.55;
  touchePause.onDown.add(()=>{
    console.log("Start Pause");
    var posMenuPauseX = game.camera.x + 270;
    var posMenuPauseY = game.camera.y + 145;
    if(game.paused){
      groupePause.removeAll(true, true);
      game.paused = false;
    }else{
      //La fenêtre qui va s'ouvrir
      var spritePause = game.add.sprite(posMenuPauseX, posMenuPauseY, 'fondPause');
      spritePause.scale.setTo(0.55,0.55);
      groupePause.add(spritePause);
      game.paused = true;

      //Bouton continuer
      var continuerPause = game.add.button(posMenuPauseX + 20, posMenuPauseY + 360, 'b_reprendre', ()=>{
        console.log("Stop Pause");
        groupePause.removeAll(true, true);
        game.paused = false;
      }, this, 0, 0, 1);
      continuerPause.scale.setTo(scaleBoutonX, scaleBoutonY);
      groupePause.add(continuerPause);

      //Bouton recommencer
      var recommencerPause = game.add.button(posMenuPauseX + 280, posMenuPauseY + 360, 'b_recommencer', ()=>{
        console.log("Restart Level");
        groupePause.removeAll(true, true);
        game.paused = false;
        game.state.start(nameState);
      }, this, 0, 0, 1);
      recommencerPause.scale.setTo(scaleBoutonX, scaleBoutonY);
      groupePause.add(recommencerPause);

      //Bouton sortie
      var sortiePause = game.add.button(posMenuPauseX + 540, posMenuPauseY + 360, 'b_ecranTitre', ()=>{
        console.log("Start Menu");
        groupePause.removeAll(true, true);
        game.paused = false;
        game.state.start('MenuState');
      }, this, 0, 0, 1);
      sortiePause.scale.setTo(scaleBoutonX, scaleBoutonY);
      groupePause.add(sortiePause);
    }
  }, this);
};

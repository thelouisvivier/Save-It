//Lors de l'appel de la fonction il faut bien mettre le nom du state
//afin que le bouton "recommencer fonctionne correctement"
var menuPause = function(nameState){
  var groupePause = game.add.group();
  var touchePause = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
  var scaleBoutonX = 0.65;
  var scaleBoutonY = 0.65;
  touchePause.onDown.add(()=>{
    var posMenuPauseX = game.camera.x + 250;
    var posMenuPauseY = game.camera.y + 200;
    if(game.paused){
      groupePause.removeAll(true, true);
      game.paused = false;
    }else{
      //La fenêtre qui va s'ouvrir
      var spritePause = game.add.sprite(posMenuPauseX, posMenuPauseY, 'fondPause');
      groupePause.add(spritePause);
      game.paused = true;

      //Bouton continuer
      var continuerPause = game.add.button(posMenuPauseX + 20, posMenuPauseY + 300, 'b_reprendre', ()=>{
        groupePause.removeAll(true, true);
        game.paused = false;
      }, this, 1, 0, 2);
      continuerPause.scale.setTo(scaleBoutonX, scaleBoutonY);
      groupePause.add(continuerPause);

      //Bouton recommencer
      var recommencerPause = game.add.button(posMenuPauseX + 290, posMenuPauseY + 300, 'b_recommencer', ()=>{
        groupePause.removeAll(true, true);
        game.paused = false;
        game.state.start(nameState);
      }, this, 1, 0, 2);
      recommencerPause.scale.setTo(scaleBoutonX, scaleBoutonY);
      groupePause.add(recommencerPause);

      //Bouton sortie
      var sortiePause = game.add.button(posMenuPauseX + 570, posMenuPauseY + 300, 'b_ecranTitre', ()=>{
        groupePause.removeAll(true, true);
        game.paused = false;
        game.state.start('MenuState');
      }, this, 1, 0, 2);
      sortiePause.scale.setTo(scaleBoutonX, scaleBoutonY);
      groupePause.add(sortiePause);
    }
  }, this);
};

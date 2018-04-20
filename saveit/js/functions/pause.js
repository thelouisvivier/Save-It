var menuPause = function(){
  var groupePause = game.add.group();
  var touchePause = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
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
      var continuerPause = game.add.button(posMenuPauseX + 20, posMenuPauseY + 300, 'b_demarrer', ()=>{
        groupePause.removeAll(true, true);
        game.paused = false;
      }, this, 1, 0, 2);
      continuerPause.scale.setTo(0.25,0.25);
      groupePause.add(continuerPause);

      //Bouton recommencer
      var recommencerPause = game.add.button(posMenuPauseX + 220, posMenuPauseY + 300, 'b_continuer', ()=>{
        groupePause.removeAll(true, true);
        game.paused = false;
        game.state.start('GameState');
      }, this, 1, 0, 2);
      recommencerPause.scale.setTo(0.25,0.25);
      groupePause.add(recommencerPause);

      //Bouton sortie
      var sortiePause = game.add.button(posMenuPauseX + 400, posMenuPauseY + 300, 'b_credits', ()=>{
        groupePause.removeAll(true, true);
        game.paused = false;
        game.state.start('MenuState');
      }, this, 1, 0, 2);
      sortiePause.scale.setTo(0.25,0.25);
      groupePause.add(sortiePause);
    }
  }, this);
};

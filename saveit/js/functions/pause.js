//Lors de l'appel de la fonction il faut bien mettre le nom du state
//afin que le bouton "recommencer fonctionne correctement"
var menuPause = function(nameState){
  var groupePause = game.add.group();
  var touchePause = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
  var scaleBouton = game.width/2450;
  touchePause.onDown.add(()=>{
    var posMenuPauseX = game.camera.x + 270;
    var posMenuPauseY = game.camera.y + 145;
    if(game.paused){
      groupePause.removeAll(true, true);
      game.paused = false;
    }else{
      //La fenêtre qui va s'ouvrir
      var spritePause = game.add.sprite(game.camera.x + (game.width/4.50), game.camera.y + (game.height/4.20), 'fondPause');
      spritePause.scale.setTo(game.width/2500);
      groupePause.add(spritePause);
      game.paused = true;

      //Bouton continuer
      var continuerPause = game.add.button(game.camera.x + (game.width/4.20), game.camera.y + (game.height/1.40), 'b_reprendre', ()=>{
        groupePause.removeAll(true, true);
        game.paused = false;
      }, this, 0, 0, 1);
      continuerPause.scale.setTo(scaleBouton);
      groupePause.add(continuerPause);

      //Bouton recommencer
      var recommencerPause = game.add.button(game.camera.x + (game.width/2.35), game.camera.y + (game.height/1.40), 'b_recommencer', ()=>{
        groupePause.removeAll(true, true);
        game.paused = false;
        game.state.start(nameState);
      }, this, 0, 0, 1);
      recommencerPause.scale.setTo(scaleBouton);
      groupePause.add(recommencerPause);

      //Bouton sortie
      var sortiePause = game.add.button(game.camera.x + (game.width/1.63), game.camera.y + (game.height/1.40), 'b_ecranTitre', ()=>{
        groupePause.removeAll(true, true);
        game.paused = false;
        game.state.start('MenuState');
      }, this, 0, 0, 1);
      sortiePause.scale.setTo(scaleBouton);
      groupePause.add(sortiePause);
    }
  }, this);
};

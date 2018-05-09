var gameOver = function(nameState, temps, argent) {
  var posMenuPerduX = game.camera.x + 270;
  var posMenuPerduY = game.camera.y + 145;
  var scaleBoutonX = 0.75;
  var scaleBoutonY = 0.75;
  if(temps == 0 || argent <= 0){
    //On a perdu
    console.log("Start Game Over");
    var groupPerdu = game.add.group();
    var spritePerdu = game.add.sprite(posMenuPerduX, posMenuPerduY, 'fondPerdu');
    spritePerdu.scale.setTo(0.55, 0.55);
    groupPerdu.add(spritePerdu);
    game.paused = true;
    //Bouton recommencer
    var recommencerPerdu = game.add.button(posMenuPerduX + 20, posMenuPerduY + 310, 'b_recommencer', ()=>{
      console.log("Restart Level");
      groupPerdu.removeAll(true, true);
      game.paused = false;
      game.state.start(nameState);
    }, this, 0, 0, 1);
    recommencerPerdu.scale.setTo(scaleBoutonX, scaleBoutonY);
    groupPerdu.add(recommencerPerdu);

    //Bouton sortie
    var sortiePerdu = game.add.button(posMenuPerduX + 470, posMenuPerduY + 310, 'b_ecranTitre', ()=>{
      console.log("Start Menu");
      groupPerdu.removeAll(true, true);
      game.paused = false;
      game.state.start('MenuState');
    }, this, 0, 0, 1);
    sortiePerdu.scale.setTo(scaleBoutonX, scaleBoutonY);
    groupPerdu.add(sortiePerdu);
  }
}

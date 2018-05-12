//La fonction qui permet la gestion de fin de niveau
var gameOver = function(nameState, temps, argent) {
  var posMenuPerduX = game.camera.x + 270;
  var posMenuPerduY = game.camera.y + 145;
  var scaleBoutonX = 0.75;
  var scaleBoutonY = 0.75;
  var scaleBoutonX1 = 0.55  //Pour le menu avec 3 boutons
  var scaleBoutonY1 = 0.55;
  if(temps == 0 && argent >= 0){
    if(nameState == 'Level5State'){
      //On a Gagné le jeu
      console.log("Start game Succes");
      var groupGameSucces = game.add.group();
      var spriteGameSucces = game.add.sprite(posMenuPerduX, posMenuPerduY, 'fondGameSucces');
      spriteGameSucces.scale.setTo(0.55, 0.55);
      groupGameSucces.add(spriteGameSucces);
      game.paused = true;
      //Bouton recommencer
      var recommencerNiveau = game.add.button(posMenuPerduX + 20, posMenuPerduY + 350, 'b_recommencer', ()=>{
        console.log("Restart Level");
        groupGameSucces.removeAll(true, true);
        game.paused = false;
        game.state.start(nameState);
      }, this, 1, 0, 0);
      recommencerNiveau.scale.setTo(scaleBoutonX, scaleBoutonY);
      groupGameSucces.add(recommencerNiveau);

      //Bouton sortie
      var sortieNiveau = game.add.button(posMenuPerduX + 470, posMenuPerduY + 350, 'b_ecranTitre', ()=>{
        console.log("Start Menu");
        groupGameSucces.removeAll(true, true);
        game.paused = false;
        game.state.start('MenuState');
      }, this, 1, 0, 0);
      sortieNiveau.scale.setTo(scaleBoutonX, scaleBoutonY);
      groupGameSucces.add(sortieNiveau);
    }else{
      //On a Gagné le niveau
      console.log("Start Level Succes");
      var groupLevelSucces = game.add.group();
      var spriteLevelSucces = game.add.sprite(posMenuPerduX, posMenuPerduY, 'fondLevelSucces');
      spriteLevelSucces.scale.setTo(0.55, 0.55);
      groupLevelSucces.add(spriteLevelSucces);
      game.paused = true;
      //Bouton recommencer
      var recommencerNiveau1 = game.add.button(posMenuPerduX + 20, posMenuPerduY + 360, 'b_recommencer', ()=>{
        console.log("Restart Level");
        groupLevelSucces.removeAll(true, true);
        game.paused = false;
        game.state.start(nameState);
      }, this, 1, 0, 0);
      recommencerNiveau1.scale.setTo(scaleBoutonX1, scaleBoutonY1);
      groupLevelSucces.add(recommencerNiveau1);

      //Bouton niveau suivant
      var niveauSuivant = game.add.button(posMenuPerduX + 265, posMenuPerduY + 360, 'b_suivant', ()=>{
        console.log("Start Next Level");
        groupLevelSucces.removeAll(true, true);
        game.paused = false;
        var nextNiveau = nextLevel(nameState);
        game.state.start(nextNiveau);
      }, this, 0, 0, 0);
      niveauSuivant.scale.setTo(0.19, 0.19);
      groupLevelSucces.add(niveauSuivant);

      //Bouton sortie
      var sortieNiveau1 = game.add.button(posMenuPerduX + 540, posMenuPerduY + 360, 'b_ecranTitre', ()=>{
        console.log("Start Menu");
        groupLevelSucces.removeAll(true, true);
        game.paused = false;
        game.state.start('MenuState');
      }, this, 1, 0, 0);
      sortieNiveau1.scale.setTo(scaleBoutonX1, scaleBoutonY1);
      groupLevelSucces.add(sortieNiveau1);
    }
  }else if(argent <= 0){
    //On a perdu
    console.log("Start Game Over");
    var groupPerdu = game.add.group();
    var spritePerdu = game.add.sprite(posMenuPerduX, posMenuPerduY, 'fondPerdu');
    spritePerdu.scale.setTo(0.55, 0.55);
    groupPerdu.add(spritePerdu);
    game.paused = true;
    //Bouton recommencer
    var recommencerPerdu = game.add.button(posMenuPerduX + 20, posMenuPerduY + 360, 'b_recommencer', ()=>{
      console.log("Restart Level");
      groupPerdu.removeAll(true, true);
      game.paused = false;
      game.state.start(nameState);
    }, this, 1, 0, 0);
    recommencerPerdu.scale.setTo(scaleBoutonX, scaleBoutonY);
    groupPerdu.add(recommencerPerdu);

    //Bouton sortie
    var sortiePerdu = game.add.button(posMenuPerduX + 470, posMenuPerduY + 360, 'b_ecranTitre', ()=>{
      console.log("Start Menu");
      groupPerdu.removeAll(true, true);
      game.paused = false;
      game.state.start('MenuState');
    }, this, 1, 0, 0);
    sortiePerdu.scale.setTo(scaleBoutonX, scaleBoutonY);
    groupPerdu.add(sortiePerdu);
  }
};

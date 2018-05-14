//La fonction qui permet la gestion de fin de niveau
var gameOver = function(nameState, temps, argent) {
  var posMenuPerduX = game.camera.x + 270;
  var posMenuPerduY = game.camera.y + 145;
  var scaleBouton = game.width/2000;
  var scaleBouton1 = game.width/2450;  //Pour le menu avec 3 boutons

  if(temps == 0 && argent >= 0){
    if(nameState == 'Level5State'){
      //On a Gagné le jeu
      var groupGameSucces = game.add.group();
      var spriteGameSucces = game.add.sprite(game.camera.x + (game.width/4.50), game.camera.y + (game.height/4.20), 'fondGameSucces');
      spriteGameSucces.scale.setTo(game.width/2500);
      groupGameSucces.add(spriteGameSucces);
      game.paused = true;
      //Bouton recommencer
      var recommencerNiveau = game.add.button(game.camera.x + (game.width/4.20), game.camera.y + (game.height/1.40), 'b_recommencer', ()=>{
        groupGameSucces.removeAll(true, true);
        game.paused = false;
        game.state.start(nameState);
      }, this, 1, 0, 0);
      recommencerNiveau.scale.setTo(scaleBouton);
      groupGameSucces.add(recommencerNiveau);

      //Bouton sortie
      var sortieNiveau = game.add.button(posMenuPerduX + 470, game.camera.y + (game.height/1.40), 'b_ecranTitre', ()=>{
        groupGameSucces.removeAll(true, true);
        game.paused = false;
        game.state.start('MenuState');
      }, this, 1, 0, 0);
      sortieNiveau.scale.setTo(scaleBouton);
      groupGameSucces.add(sortieNiveau);
    }else{
      //On a Gagné le niveau
      var groupLevelSucces = game.add.group();
      var spriteLevelSucces = game.add.sprite(game.camera.x + (game.width/4.50), game.camera.y + (game.height/4.20), 'fondLevelSucces');
      spriteLevelSucces.scale.setTo(game.width/2500);
      groupLevelSucces.add(spriteLevelSucces);
      game.paused = true;
      //Bouton recommencer
      var recommencerNiveau1 = game.add.button(game.camera.x + (game.width/4.20), game.camera.y + (game.height/1.40), 'b_recommencer', ()=>{
        groupLevelSucces.removeAll(true, true);
        game.paused = false;
        game.state.start(nameState);
      }, this, 1, 0, 0);
      recommencerNiveau1.scale.setTo(scaleBouton1);
      groupLevelSucces.add(recommencerNiveau1);

      //Bouton niveau suivant
      var niveauSuivant = game.add.button(game.camera.x + (game.width/2.40), game.camera.y + (game.height/1.40), 'b_suivant', ()=>{
        groupLevelSucces.removeAll(true, true);
        game.paused = false;
        var nextNiveau = nextLevel(nameState);
        game.state.start(nextNiveau);
      }, this, 0, 0, 0);
      niveauSuivant.scale.setTo(game.width/7100);
      groupLevelSucces.add(niveauSuivant);

      //Bouton sortie
      var sortieNiveau1 = game.add.button(game.camera.x + (game.width/1.63), game.camera.y + (game.height/1.40), 'b_ecranTitre', ()=>{
        groupLevelSucces.removeAll(true, true);
        game.paused = false;
        game.state.start('MenuState');
      }, this, 1, 0, 0);
      sortieNiveau1.scale.setTo(scaleBouton1);
      groupLevelSucces.add(sortieNiveau1);
    }
  }else if(argent <= 0){
    //On a perdu
    var groupPerdu = game.add.group();
    var spritePerdu = game.add.sprite(game.camera.x + (game.width/4.50), game.camera.y + (game.height/4.20), 'fondPerdu');
    spritePerdu.scale.setTo(game.width/2500);
    groupPerdu.add(spritePerdu);
    game.paused = true;
    //Bouton recommencer
    var recommencerPerdu = game.add.button(game.camera.x + (game.width/4.20), game.camera.y + (game.height/1.40), 'b_recommencer', ()=>{
      groupPerdu.removeAll(true, true);
      game.paused = false;
      game.state.start(nameState);
    }, this, 1, 0, 0);
    recommencerPerdu.scale.setTo(scaleBouton);
    groupPerdu.add(recommencerPerdu);

    //Bouton sortie
    var sortiePerdu = game.add.button(game.camera.x + (game.width/1.73), game.camera.y + (game.height/1.40), 'b_ecranTitre', ()=>{
      groupPerdu.removeAll(true, true);
      game.paused = false;
      game.state.start('MenuState');
    }, this, 1, 0, 0);
    sortiePerdu.scale.setTo(scaleBouton);
    groupPerdu.add(sortiePerdu);
  }
};

/*******************************************************************************************
Notice d'utilisation :

Cette fonction permet d'ajouter des fenêtres popup où il faut cliquer pour la supprimer
Elle s'appelle de cette manière : Popup.create('#nom du message#',#position en x#,#position en y#);
Elle est à inserer dans la partie "create" du jeu.

Vous trouverer le nom des messages dans le fichier /data/messages.js

***********************************************************************************************/
var popupsprite;
var textpopup;
var returntext;

function selectMessages (name){
  for (let i of datamessages){
    if (i.name == name){
      returntext = i.text;
    }
  }
};

var Popup = {
  create:function(selmsg,posx,posy) {
    popupsprite = game.add.sprite(posx, posy, 'popupportrait');
    popupsprite.scale.setTo(0.4, 0.4);
    popupsprite.inputEnabled = true;
    popupsprite.input.useHandCursor = true;
    popupsprite.events.onInputDown.add(removePopup, this);
    selectMessages(selmsg);
    textpopup = game.add.text(25,75, returntext, { font: "40px Exo2", fill: "#000000", align: "left" });
    popupsprite.addChild(textpopup);
    game.paused = true;
  }
};

function removePopup() {
  popupsprite.destroy();
  game.paused = false;
};

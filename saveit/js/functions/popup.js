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
  datamessages.forEach(function(element) {
    index = datamessages.indexOf(element);
    if (datamessages[index].name == name){
      returntext = datamessages[index].text;
    }
  });
};

var Popup = {
  create:function(selmsg,posx,posy) {
    popupsprite = game.add.sprite(posx, posy, 'popupportrait');
    popupsprite.scale.setTo(0.4, 0.4);
    popupsprite.inputEnabled = true;
    popupsprite.input.useHandCursor = true;
    popupsprite.events.onInputDown.add(removePopup, this);
    selectMessages(selmsg);
    textpopup = game.add.text(400,300, returntext, { font: "32px Arial", fill: "#000000", align: "left" });
    popupsprite.addChild(textpopup);
  }
};

function removePopup() {
  popupsprite.destroy();
};

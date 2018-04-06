var popup;
var text;
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
  create:function(selmsg) {
    popup = game.add.sprite(1200, 800, 'popup');
    popup.scale.setTo(0.4, 0.4);
    popup.inputEnabled = true;
    popup.input.useHandCursor = true;
    popup.events.onInputDown.add(removePopup, this);
    selectMessages(selmsg);
    text = game.add.text(400,300, returntext, { font: "32px Arial", fill: "#000000", align: "left" });
    popup.addChild(text);
  }
};

function removePopup() {
  popup.destroy();
};

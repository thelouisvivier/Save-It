//La fonction nécessaire pour déteminer le nom du state du niveau b_suivant
var nextLevel = function(nameState){
  if(nameState == 'Level1State'){
    return 'Level2State';
  }else if (nameState == 'Level2State') {
    return 'Level3State';
  }else if (nameState == 'Level3State') {
    return 'Level4State';
  }else if (nameState == 'Level4State') {
    return 'Level5State';
  }
};

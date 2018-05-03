var gamerule = {
  countobjon :function (){
    for(var i of spriteStorage){


      if(i.custType=='tv' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'tv'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='radio' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'radio'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='lampe' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'lampe'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='ventilateur' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'ventilateur'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='baignoire' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'baignoire'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='evier' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'evier'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='fenetre' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'fenetre'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='frigo' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'frigo'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='lavabo' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'lavabo'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='machinealaver' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'machinealaver'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='microonde' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'microonde'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='ordinateur' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'ordinateur'){
            total -= objectcost[index].cost;
          }
        });
      };
      if(i.custType=='radiateur' && stateStorage[i.custId]){
        objectcost.forEach(function(element) {
          index = objectcost.indexOf(element);
          if (objectcost[index].name == 'radiateur'){
            total -= objectcost[index].cost;
          }
        });
      };
    }
  },


  allumeobj :function(){
    if(coutobjprecedent <= 1){
      turnon = Math.random() * (nbobj);
      turnon=Math.trunc(turnon);
      stateStorage[turnon]=true;
      objectcost.forEach(function(element){
        index = objectcost.indexOf(element);
        if (objectcost[index].name == spriteStorage[turnon].custType){
          coutobjprecedent= objectcost[index].cost;
          console.log(index);
        }
      });
    }
    else {
      coutobjprecedent=coutobjprecedent-1;
    }

  }
};

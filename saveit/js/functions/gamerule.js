var gamerule = {
  countobjon :function (){
    for(let i of spriteStorage){
      if(i.custType=='tv' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'tv'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='radio' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'radio'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='lampe' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'lampe'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='ventilateur' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'ventilateur'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='baignoire' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'baignoire'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='evier' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'evier'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='fenetre' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'fenetre'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='frigo' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'frigo'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='lavabo' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'lavabo'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='machinealaver' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'machinealaver'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='microonde' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'microonde'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='ordinateur' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'ordinateur'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='radiateur' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'radiateur'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='interrupteur' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'interrupteur'){
            total -= r.cost;
          }
        }
      };
      if(i.custType=='miroir' && stateStorage[i.custId]){
        for(let r of objectcost){
          if (r.name == 'miroir'){
            total -= r.cost;
          }
        }
      };
    }
  },


  allumeobj :function(){
    if(coutobjprecedent <= 1){
      turnon = Math.random() * (nbobj);
      turnon=Math.trunc(turnon);
      stateStorage[turnon]=true;
      for(let j of objectcost){
        if (j.name == spriteStorage[turnon].custType){
          console.log(j.name);
          coutobjprecedent= j.cost;
        }
      }
    }
    else {
      coutobjprecedent=coutobjprecedent-1;
    }

  }
};

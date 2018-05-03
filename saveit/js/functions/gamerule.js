var gamerule = {
  countobjon :function ()
{
  for(var i of spriteStorage){
    console.log(i);

    if(i.key=='tv2' && stateStorage[i.z-1]){
      objectcost.forEach(function(element) {
        index = objectcost.indexOf(element);
        if (objectcost[index].name == 'tv2'){
          total -= objectcost[index].cost;
        }
      });
 };
    if(i.key=='radio' && stateStorage[i.z-1])
    {
      objectcost.forEach(function(element) {
        index = objectcost.indexOf(element);
        if (objectcost[index].name == 'radio'){
          total -= objectcost[index].cost;
        }
      });
    };
    if(i.key=='lampe' && stateStorage[i.z-1])
    {
      objectcost.forEach(function(element) {
        index = objectcost.indexOf(element);
        if (objectcost[index].name == 'lampe'){
          total -= objectcost[index].cost;
        }
      });
    };
    if(i.key=='ventilateur' && stateStorage[i.z-1])
    {
      objectcost.forEach(function(element) {
        index = objectcost.indexOf(element);
        if (objectcost[index].name == 'ventilateur'){
          total -= objectcost[index].cost;
        }
      });
    };
  }
},


allumeobj :function()
{
  if(coutobjprecedent <= 1.75)
  {
    turnon = Math.random() * (nbobj);
    turnon=Math.trunc(turnon);
    stateStorage[turnon]=true;
    objectcost.forEach(function(element)
      {
        index = objectcost.indexOf(element);
        if (objectcost[index].name == spriteStorage[turnon].key)
        {
          coutobjprecedent= objectcost[index].cost;
          console.log(coutobjprecedent);
        }
      });
}
else {
  coutobjprecedent=coutobjprecedent-1;
}

}
};

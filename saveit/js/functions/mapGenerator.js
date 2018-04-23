var MapGen = {
  create : function(){
    game.add.tileSprite(5, 0, 700, 412.5, 'parquet'); //Bureau
    game.add.tileSprite(5, 412.5, 700, 562.5, 'carrelage'); //Cuisine
    game.add.tileSprite(855, 62.5, 700, 425, 'carrelage'); //SDB
    game.add.tileSprite(855, 550, 700, 425, 'moquette'); //Chambre
    game.add.tileSprite(0, 1037.5, 1550, 562.5, 'parquet2'); //Salon
    game.add.tileSprite(705, 0, 150, 1037.5, 'parquet2'); //Couloir

    Walls.horizontal.create(0,0,'beigeclair',700,62.5,0);//Bureau fond
    Walls.horizontal.create(0,0,'noir',700,10,1);//Bureau fond
    Walls.vertical.create(0,0,'noir',25,412.5,2);//Bureau gauche
    Walls.vertical.create(700,0,'noir',10,175,3);//Bureau part1
    Walls.vertical.create(700,237.5,'noir',10,175,4);//Bureau part2 --- Attention, laisser 125 d'ouverture pour louis

    Walls.horizontal.create(0,412.5,'cacadoie',700,62.5,5);//Cuisine fond
    Walls.horizontal.create(0,412.5,'noir',700,10,6);//Cuisine fond
    Walls.vertical.create(0,412.5,'noir',25,562.5,7);//Cusine gauche
    Walls.vertical.create(700,412.5,'noir',10,250,8);//Cuisine part1
    Walls.vertical.create(700,725,'noir',10,250,9);//Cuisine part2

    Walls.horizontal.create(850,0,'vert',700,62.5,10);//SDB fond
    Walls.horizontal.create(850,0,'noir',700,10,11);//SDB fond
    Walls.vertical.create(1525,0,'noir',25,487.5,12);//SDB gauche
    Walls.vertical.create(850,0,'noir',10,212.5,13);//SDB part1
    Walls.vertical.create(850,275,'noir',10,212.5,14);//SDB part2

    Walls.horizontal.create(850,487.5,'orange',700,62.5,15);//Chambre fond
    Walls.horizontal.create(850,487.5,'noir',700,10,16);//Chambre fond
    Walls.vertical.create(1525,487.5,'noir',25,487.5,17);//Chambre gauche
    Walls.vertical.create(850,487.5,'noir',10,212.5,18);//Chambre part1
    Walls.vertical.create(700,762.5,'noir',10,215.5,19);//Chambre part2

    Walls.horizontal.create(0,975,'rose',710,62.5,20);//Salon fond part1
    Walls.horizontal.create(850,975,'rose',700,62.5,21);//Salon fond part2
    Walls.horizontal.create(0,975,'noir',710,10,22);//Salon fond part1
    Walls.horizontal.create(850,975,'noir',700,10,23);//Salon fond part2
    Walls.vertical.create(0,975,'noir',25,562.5,24);//Salon gauche
    Walls.vertical.create(1525,975,'noir',25,562.5,25);//Salon droite
    Walls.horizontal.create(0,1512.5,'noir',1550,25,26);//Salon bas

    Walls.horizontal.create(710,0,'marron',140,62.5,27);//couloir fond
    Walls.horizontal.create(710,0,'noir',140,10,28);//couloir fond
    Walls.vertical.create(700,975,'noir',10,62.5,29);//Couloir bas gauche
    Walls.vertical.create(700,975,'noir',10,62.5,30);//Couloir bas droite
  },
  update : function(){
    Walls.horizontal.update(0);
    Walls.horizontal.update(1);
    Walls.vertical.update(2);
    Walls.vertical.update(3);
    Walls.vertical.update(4);

    Walls.horizontal.update(5);
    Walls.horizontal.update(6);
    Walls.vertical.update(7);
    Walls.vertical.update(8);
    Walls.vertical.update(9);

    Walls.horizontal.update(10);
    Walls.horizontal.update(11);
    Walls.vertical.update(12);
    Walls.vertical.update(13);
    Walls.vertical.update(14);

    Walls.horizontal.update(15);
    Walls.horizontal.update(16);
    Walls.vertical.update(17);
    Walls.vertical.update(18);
    Walls.vertical.update(19);

    Walls.horizontal.update(20);
    Walls.horizontal.update(21);
    Walls.horizontal.update(22);
    Walls.horizontal.update(23);
    Walls.vertical.update(24);
    Walls.vertical.update(25);
    Walls.horizontal.update(26);

    Walls.horizontal.update(27);
    Walls.horizontal.update(28);
    Walls.vertical.update(29);
    Walls.vertical.update(30);
  }
}

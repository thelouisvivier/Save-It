var MapGen = {
  create : function(){
    game.add.tileSprite(6.6, 0, 933.3, 550, 'parquet'); //Bureau
    game.add.tileSprite(6.6, 550, 933.3, 750, 'carrelage'); //Cuisine
    game.add.tileSprite(1140, 83.3, 933.3, 566.6, 'carrelage'); //SDB
    game.add.tileSprite(1140, 733.3, 933.3, 566.6, 'moquette'); //Chambre
    game.add.tileSprite(0, 1383.3, 2066.6, 750, 'parquet2'); //Salon
    game.add.tileSprite(940, 0, 200, 1983.33, 'parquet2'); //Couloir

    Walls.horizontal.create(0,0,'beigeclair',933.3,83.3,0);//Bureau fond
    Walls.horizontal.create(0,0,'noir',933.3,13.3,1);//Bureau fond
    Walls.vertical.create(0,0,'noir',33.3,550,2);//Bureau gauche
    Walls.vertical.create(933.3,0,'noir',13.3,233.3,3);//Bureau part1
    Walls.vertical.create(933.3,316.6,'noir',13.3,233.3,4);//Bureau part2 --- Attention, laisser 125 d'ouverture pour louis

    Walls.horizontal.create(0,550,'cacadoie',933.3,83.3,5);//Cuisine fond
    Walls.horizontal.create(0,550,'noir',933.3,13.3,6);//Cuisine fond
    Walls.vertical.create(0,550,'noir',33.3,750,7);//Cusine gauche
    Walls.vertical.create(933.3,550,'noir',13.3,333.3,8);//Cuisine part1
    Walls.vertical.create(933.3,966.6,'noir',13.3,333.3,9);//Cuisine part2

    Walls.horizontal.create(1133.3,0,'vert',933.3,83.3,10);//SDB fond
    Walls.horizontal.create(1133.3,0,'noir',933.3,13.3,11);//SDB fond
    Walls.vertical.create(2033.3,0,'noir',33.3,650,12);//SDB gauche
    Walls.vertical.create(1133.3,0,'noir',13.3,283.3,13);//SDB part1
    Walls.vertical.create(1133.3,366.6,'noir',13.3,283.3,14);//SDB part2

    Walls.horizontal.create(1133.3,650,'orange',933.3,83.3,15);//Chambre fond
    Walls.horizontal.create(1133.3,650,'noir',933.3,13.3,16);//Chambre fond
    Walls.vertical.create(2033.3,650,'noir',33.3,650,17);//Chambre gauche
    Walls.vertical.create(1133.3,650,'noir',13.3,283.3,18);//Chambre part1
    Walls.vertical.create(1133.3,1016.6,'noir',13.3,283.3,19);//Chambre part2

    Walls.horizontal.create(0,1300,'rose',946.6,83.33,20);//Salon fond part1
    Walls.horizontal.create(1133.3,1300,'rose',933.3,83.3,21);//Salon fond part2
    Walls.horizontal.create(0,1300,'noir',946.6,13.3,22);//Salon fond part1
    Walls.horizontal.create(1133.3,1300,'noir',933.3,13.3,23);//Salon fond part2
    Walls.vertical.create(0,1300,'noir',33.3,750,24);//Salon gauche
    Walls.vertical.create(2033.3,1300,'noir',33.3,750,25);//Salon droite
    Walls.horizontal.create(0,2016.6,'noir',2066.6,33.3,26);//Salon bas

    Walls.horizontal.create(946.6,0,'marron',186.6,83.3,27);//couloir fond
    Walls.horizontal.create(946.6,0,'noir',186.6,13.3,28);//couloir fond
    Walls.vertical.create(933.3,1300,'noir',13.3,83.3,29);//Couloir bas gauche
    Walls.vertical.create(1133.3,1300,'noir',13.3,83.3,30);//Couloir bas droite

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

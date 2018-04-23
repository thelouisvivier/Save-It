var MapGen = {
  create : function(){
    game.add.tileSprite(10, 0, 900, 500, 'parquet'); //Bureau
    game.add.tileSprite(10, 500, 900, 1125, 'carrelage'); //Cuisine
    game.add.tileSprite(1100, 125, 900, 850, 'carrelage'); //SDB
    game.add.tileSprite(1100, 500, 900, 850, 'moquette'); //Chambre
    game.add.tileSprite(0, 1000, 2000, 500, 'parquet2'); //Salon
    game.add.tileSprite(905, 0, 200, 1000, 'parquet2'); //Couloir

    Walls.horizontal.create(0,0,'beigeclair',900,125,0);//Bureau fond
    Walls.horizontal.create(0,0,'noir',900,10,1);//Bureau fond
    Walls.vertical.create(0,0,'noir',30,500,2);//Bureau gauche
    Walls.vertical.create(900,0,'noir',10,185,3);//Bureau part1
    Walls.vertical.create(900,315,'noir',10,185,4);//Bureau part2 --- Attention, laisser 130 d'ouverture pour louis

    Walls.horizontal.create(0,500,'cacadoie',900,125,5);//Cuisine fond
    Walls.horizontal.create(0,500,'noir',900,10,6);//Cuisine fond
    Walls.vertical.create(0,500,'noir',30,500,7);//Cusine gauche
    Walls.vertical.create(900,500,'noir',10,185,8);//Cuisine part1
    Walls.vertical.create(900,815,'noir',10,185,9);//Cuisine part2

    Walls.horizontal.create(1100,0,'vert',900,125,10);//SDB fond
    Walls.horizontal.create(1100,0,'noir',900,10,11);//SDB fond
    Walls.vertical.create(1970,0,'noir',30,975,12);//SDB droite
    Walls.vertical.create(1100,0,'noir',10,185,13);//SDB part1
    Walls.vertical.create(1100,315,'noir',10,185,14);//SDB part2

    Walls.horizontal.create(1100,500,'orange',900,125,15);//Chambre fond
    Walls.horizontal.create(1100,500,'noir',900,10,16);//Chambre fond
    Walls.vertical.create(1970,500,'noir',30,975,17);//Chambre gauche
    Walls.vertical.create(1100,500,'noir',10,185,18);//Chambre part1
    Walls.vertical.create(1100,815,'noir',10,185,19);//Chambre part2

    Walls.horizontal.create(0,1000,'rose',910,125,20);//Salon fond part1
    Walls.horizontal.create(1100,1000,'rose',1100,125,21);//Salon fond part2
    Walls.horizontal.create(0,1000,'noir',910,10,22);//Salon fond part1
    Walls.horizontal.create(1100,1000,'noir',1100,10,23);//Salon fond part2
    Walls.vertical.create(0,1000,'noir',30,500,24);//Salon gauche
    Walls.vertical.create(1970,1000,'noir',30,500,25);//Salon droite
    Walls.horizontal.create(0,1470,'noir',2000,30,26);//Salon bas

    Walls.horizontal.create(910,0,'marron',190,125,27);//couloir fond
    Walls.horizontal.create(910,0,'noir',190,20,28);//couloir fond
    Walls.vertical.create(900,1000,'noir',10,125,29);//Couloir bas gauche
    Walls.vertical.create(1100,1000,'noir',10,125,30);//Couloir bas droite

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

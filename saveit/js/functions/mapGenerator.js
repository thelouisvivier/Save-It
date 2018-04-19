var MapGen = {
  create : function(){
    game.add.tileSprite(0, 0, 1400, 825, 'parquet');
    Walls.horizontal.create(0,0,'beigeclair',1400,125,0);//Bureau fond
    Walls.horizontal.create(0,0,'noir',1400,20,1);//Bureau fond
    Walls.vertical.create(0,0,'noir',50,825,2);//Bureau gauche
    Walls.vertical.create(1400,0,'noir',20,350,3);//Bureau part1
    Walls.vertical.create(1400,475,'noir',20,350,4);//Bureau part2 --- Attention, laisser 125 d'ouverture pour louis

    game.add.tileSprite(0, 825, 1400, 1125, 'carrelage');
    Walls.horizontal.create(0,825,'cacadoie',1400,125,5);//Cuisine fond
    Walls.horizontal.create(0,825,'noir',1400,20,6);//Cuisine fond
    Walls.vertical.create(0,825,'noir',50,1125,7);//Cusine gauche
    Walls.vertical.create(1400,825,'noir',20,500,8);//Cuisine part1
    Walls.vertical.create(1400,1450,'noir',20,500,9);//Cuisine part2

    game.add.tileSprite(1700, 0, 1400, 850, 'carrelage');
    Walls.horizontal.create(1700,0,'vert',1400,125,10);//SDB fond
    Walls.horizontal.create(1700,0,'noir',1400,20,11);//SDB fond
    Walls.vertical.create(3050,0,'noir',50,975,12);//SDB gauche
    Walls.vertical.create(1700,0,'noir',20,425,13);//SDB part1
    Walls.vertical.create(1700,550,'noir',20,425,14);//SDB part2

    Walls.horizontal.create(1700,975,'orange',1400,125,15);//Chambre fond
    Walls.horizontal.create(1700,975,'noir',1400,20,16);//Chambre fond
    Walls.vertical.create(3050,975,'noir',50,975,17);//Chambre gauche
    Walls.vertical.create(1700,975,'noir',20,425,18);//Chambre part1
    Walls.vertical.create(1700,1525,'noir',20,425,19);//Chambre part2

    Walls.horizontal.create(0,1950,'rose',1420,125,20);//Salon fond part1
    Walls.horizontal.create(1700,1950,'rose',1400,125,21);//Salon fond part2
    Walls.horizontal.create(0,1950,'noir',1420,20,22);//Salon fond part1
    Walls.horizontal.create(1700,1950,'noir',1400,20,23);//Salon fond part2
    Walls.vertical.create(0,1950,'noir',50,1125,24);//Salon gauche
    Walls.vertical.create(3050,1950,'noir',50,1125,25);//Salon droite
    Walls.horizontal.create(0,3025,'noir',3100,50,26);//Salon bas

    Walls.horizontal.create(1420,0,'marron',280,125,27);//couloir fond
    Walls.horizontal.create(1420,0,'noir',280,20,28);//couloir fond
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
  }
}

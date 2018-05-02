var MapGen = {
  bureau : {
    create:function(){
      game.add.tileSprite(10, 0, 900, 500, 'parquet'); //Bureau

      Walls.horizontal.create(0,0,'beigeclair',900,125,0);//Bureau fond
      Walls.horizontal.create(0,0,'noir',900,10,1);//Bureau fond
      Walls.vertical.create(0,0,'noir',30,500,2);//Bureau gauche
      Walls.vertical.create(900,0,'noir',10,185,3);//Bureau part1
      Walls.vertical.create(900,315,'noir',10,185,4);//Bureau part2 --- Attention, laisser 130 d'ouverture pour louis

      Appliances.fenetre.create(100,0,2,0);
      Appliances.fenetre.create(500,0,4,1);
      Appliances.radiateur.create(475,70,2);
      Appliances.radiateur.create(75,70,3);
      Appliances.ordinateur.create(275,60,4);
      Appliances.lampe.create(800,350,'jaune',5);
      Furnitures.armoire.create(650,-20,'facelivre',6);
      Decorations.plante.create(50,400,'4',7);
    },
    update : function(){
      Walls.horizontal.update(0);
      Walls.horizontal.update(1);
      Walls.vertical.update(2);
      Walls.vertical.update(3);
      Walls.vertical.update(4);

      Appliances.fenetre.update(Keys.F(),0);
      Appliances.fenetre.update(Keys.F(),1);
      Appliances.radiateur.update(Keys.R(),2);
      Appliances.radiateur.update(Keys.R(),3);
      Appliances.ordinateur.update(Keys.O(),4);
      Appliances.lampe.update(Keys.L(),5);
      Furnitures.armoire.update(6);
      //Decorations.plante.update(7);
    }
  },
  salledebain : {
    create : function(){
      game.add.tileSprite(1100, 125, 900, 850, 'carrelage'); //SDB

      Walls.horizontal.create(1100,0,'vert',900,125,5);//SDB fond
      Walls.horizontal.create(1100,0,'noir',900,10,6);//SDB fond
      Walls.vertical.create(1970,0,'noir',30,975,7);//SDB droite
      Walls.vertical.create(1100,0,'noir',10,185,8);//SDB part1
      Walls.vertical.create(1100,315,'noir',10,185,9);//SDB part2

      Appliances.fenetre.create(1200,0,1,8);
      Appliances.fenetre.create(1750,0,3,9);
      Appliances.radiateur.create(1175,70,10);
      Appliances.radiateur.create(1725,70,11);
      Appliances.lavabo.create(1475,30,12);
      Appliances.baignoire.create(1800,200,13);
      Appliances.machinealaver.create(1050,300,14);
      Decorations.plante.create(1910,310,'1',15);
      Decorations.tapis.create(1400,200,'beige',300,200,16);
    },
    update : function(){
      Walls.horizontal.update(5);
      Walls.horizontal.update(6);
      Walls.vertical.update(7);
      Walls.vertical.update(8);
      Walls.vertical.update(9);

      Appliances.fenetre.update(Keys.F(),8);
      Appliances.fenetre.update(Keys.F(),9);
      Appliances.radiateur.update(Keys.R(),10);
      Appliances.radiateur.update(Keys.R(),11);
      Appliances.lavabo.update(Keys.L(),12);
      Appliances.baignoire.update(Keys.B(),13);
      Appliances.machinealaver.update(Keys.M(),14);
      //Decorations.plante.update(15);
      Decorations.tapis.update(16);
    }
  },
  cuisine : {
    create : function(){
      game.add.tileSprite(10, 500, 900, 1125, 'carrelage'); //Cuisine

      Walls.horizontal.create(0,500,'cacadoie',900,125,10);//Cuisine fond
      Walls.horizontal.create(0,500,'noir',900,10,11);//Cuisine fond
      Walls.vertical.create(0,500,'noir',30,500,12);//Cusine gauche
      Walls.vertical.create(900,500,'noir',10,185,13);//Cuisine part1
      Walls.vertical.create(900,815,'noir',10,185,14);//Cuisine part2

      Appliances.evier.create(300,490,'beige',17);
      Appliances.frigo.create(80,470,18);
      Furnitures.cuisine.create(175,503,'armoire','beige',19);
      Furnitures.cuisine.create(448,490,'meuble','beige',20);
      Appliances.gaz.create(645,584,21);
      Appliances.microonde.create(480,555,22);
      Furnitures.tables_chaises.create(350,770,'table+chaises','gris','face',23);
    },
    update : function(){
      Walls.horizontal.update(10);
      Walls.horizontal.update(11);
      Walls.vertical.update(12);
      Walls.vertical.update(13);
      Walls.vertical.update(14);

      Appliances.evier.update(Keys.E(),17);
      Appliances.frigo.update(Keys.F(),18);
      Furnitures.cuisine.update(19);
      Furnitures.cuisine.update(20);
      Appliances.gaz.update(Keys.G(),'gaz',21);
      Appliances.microonde.update(Keys.M(),22);
      Furnitures.tables_chaises.update(23);
    }
  },
  chambre : {
    create : function(){
      game.add.tileSprite(1100, 500, 900, 850, 'moquette'); //Chambre

      Walls.horizontal.create(1100,500,'orange',900,125,15);//Chambre fond
      Walls.horizontal.create(1100,500,'noir',900,10,16);//Chambre fond
      Walls.vertical.create(1970,500,'noir',30,975,17);//Chambre gauche
      Walls.vertical.create(1100,500,'noir',10,185,18);//Chambre part1
      Walls.vertical.create(1100,815,'noir',10,185,19);//Chambre part2

      Appliances.radiateur.create(1250,550,24);
      Appliances.lampe.create(1150,540,'bleu',25);
      Appliances.tv.create(1780,850,'noir',26);
      Furnitures.lit.create(1750,565,'face',27);
      Furnitures.armoire.create(1450,460,'facecommode',28);
      Appliances.radio.create(1490,530,29);
    },
    update : function(){
      Walls.horizontal.update(15);
      Walls.horizontal.update(16);
      Walls.vertical.update(17);
      Walls.vertical.update(18);
      Walls.vertical.update(19);

      Appliances.radiateur.update(Keys.R(),24);
      Appliances.lampe.update(Keys.L(),25);
      Appliances.tv.update(Keys.T(),26);
      Furnitures.lit.update(27);
      Furnitures.armoire.update(28);
      Appliances.radio.update(Keys.R(),29);
    }
  },
  salon : {
    create : function(){
      game.add.tileSprite(0, 1000, 2000, 500, 'parquet2'); //Salon

      Walls.horizontal.create(0,1000,'rose',910,125,20);//Salon fond part1
      Walls.horizontal.create(1100,1000,'rose',1100,125,21);//Salon fond part2
      Walls.horizontal.create(0,1000,'noir',910,10,22);//Salon fond part1
      Walls.horizontal.create(1100,1000,'noir',1100,10,23);//Salon fond part2
      Walls.vertical.create(0,1000,'noir',30,500,24);//Salon gauche
      Walls.vertical.create(1970,1000,'noir',30,500,25);//Salon droite
      Walls.horizontal.create(0,1470,'noir',2000,30,26);//Salon bas
    },
    update : function(){
      Walls.horizontal.update(20);
      Walls.horizontal.update(21);
      Walls.horizontal.update(22);
      Walls.horizontal.update(23);
      Walls.vertical.update(24);
      Walls.vertical.update(25);
      Walls.horizontal.update(26);
    }
  },
  couloir : {
    create : function(){
      game.add.tileSprite(905, 0, 200, 1000, 'parquet2'); //Couloir

      Walls.horizontal.create(910,0,'marron',190,125,27);//couloir fond
      Walls.horizontal.create(910,0,'noir',190,10,28);//couloir fond
      Walls.vertical.create(900,1000,'noir',10,125,29);//Couloir bas gauche
      Walls.vertical.create(1100,1000,'noir',10,125,30);//Couloir bas droite
    },
    update : function(){
      Walls.horizontal.update(27);
      Walls.horizontal.update(28);
      Walls.vertical.update(29);
      Walls.vertical.update(30);
    }
  }
};

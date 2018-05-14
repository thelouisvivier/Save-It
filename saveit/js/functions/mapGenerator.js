var MapGen = {
  bureau : {
    create:function(){
      game.add.tileSprite(10, 0, 900, 500, 'parquet'); //Bureau

      Walls.horizontal.create(0,0,'beigeclair',900,125,0);//Bureau fond
      Walls.horizontal.create(0,0,'noir',900,10,1);//Bureau fond
      Walls.vertical.create(0,0,'noir',30,500,2);//Bureau gauche
      Walls.vertical.create(900,0,'noir',10,175,3);//Bureau part1
      Walls.vertical.create(900,325,'noir',10,175,4);//Bureau part2 --- Attention, laisser 150 d'ouverture pour louis

      Appliances.fenetre.create(100,0,2,0);
      Appliances.fenetre.create(500,0,4,1);
      Appliances.radiateur.create(475,70,2);
      Appliances.radiateur.create(75,70,3);
      Appliances.ordinateur.create(290,60,4);
      Appliances.lampe.create(800,350,'jaune',5);
      Furnitures.armoire.create(650,-20,'facelivre',6);
      Decorations.plante.create(50,400,'4',7);
      Appliances.lumiere.create([190,390,590],[-30,-30,-30],825,50,'marron','rectangulaire',[8,9,10],11);
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
      Appliances.lumiere.update(Keys.L(),[8,9,10],11);
    }
  },
  salledebain : {
    create : function(){
      game.add.tileSprite(1100, 125, 900, 850, 'carrelage'); //SDB

      Walls.horizontal.create(1100,0,'vert',900,125,5);//SDB fond
      Walls.horizontal.create(1100,0,'noir',900,10,6);//SDB fond
      Walls.vertical.create(1970,0,'noir',30,975,7);//SDB droite
      Walls.vertical.create(1100,0,'noir',10,175,8);//SDB part1
      Walls.vertical.create(1100,325,'noir',10,175,9);//SDB part2

      Appliances.fenetre.create(1200,0,1,12);
      Appliances.fenetre.create(1750,0,3,13);
      Appliances.radiateur.create(1175,70,14);
      Appliances.radiateur.create(1725,70,15);
      Appliances.miroir.create(1482,-5,16);
      Appliances.lavabo.create(1475,30,17);
      Appliances.baignoire.create(1800,200,18);
      Appliances.machinealaver.create(1050,300,19);
      Decorations.plante.create(1910,310,'1',20);
      Decorations.tapis.create(1400,200,'beige',300,200,21);
      Appliances.lumiere.create([1300,1620],[-30,-30],1125,50,'blanc','rond',[22,23],24);
    },
    update : function(){
      Walls.horizontal.update(5);
      Walls.horizontal.update(6);
      Walls.vertical.update(7);
      Walls.vertical.update(8);
      Walls.vertical.update(9);

      Appliances.fenetre.update(Keys.F(),12);
      Appliances.fenetre.update(Keys.F(),13);
      Appliances.radiateur.update(Keys.R(),14);
      Appliances.radiateur.update(Keys.R(),15);
      Appliances.miroir.update(Keys.M(),16);
      Appliances.lavabo.update(Keys.L(),17);
      Appliances.baignoire.update(Keys.B(),18);
      Appliances.machinealaver.update(Keys.M(),19);
      //Decorations.plante.update(20);
      Decorations.tapis.update(21);
      Appliances.lumiere.update(Keys.L(),[22,23],24);
    }
  },
  cuisine : {
    create : function(){
      game.add.tileSprite(10, 500, 900, 1125, 'carrelage'); //Cuisine

      Walls.horizontal.create(0,500,'cacadoie',900,125,10);//Cuisine fond
      Walls.horizontal.create(0,500,'noir',900,10,11);//Cuisine fond
      Walls.vertical.create(0,500,'noir',30,500,12);//Cusine gauche
      Walls.vertical.create(900,500,'noir',10,170,13);//Cuisine part1
      Walls.vertical.create(900,830,'noir',10,170,14);//Cuisine part2

      Appliances.evier.create(300,490,'beige',25);
      Appliances.frigo.create(80,470,26);
      Furnitures.cuisine.create(175,503,'armoire','beige',27);
      Furnitures.cuisine.create(448,490,'meuble','beige',28);
      Appliances.gaz.create(645,584,29);
      Appliances.microonde.create(480,555,30);
      Furnitures.tables_chaises.create(350,770,'table+chaises','gris','face',31);
      Appliances.lumiere.create([20,760],[470,470],797,550,'noir','rectangulaire',[32,33],34);
      Appliances.lumiere.create(615,470,675,533,'noir','rond',35,36);
    },
    update : function(){
      Walls.horizontal.update(10);
      Walls.horizontal.update(11);
      Walls.vertical.update(12);
      Walls.vertical.update(13);
      Walls.vertical.update(14);

      Appliances.evier.update(Keys.E(),25);
      Appliances.frigo.update(Keys.F(),26);
      Furnitures.cuisine.update(27);
      Furnitures.cuisine.update(28);
      Appliances.gaz.update(Keys.G(),'gaz',29);
      Appliances.microonde.update(Keys.M(),30);
      Furnitures.tables_chaises.update(31);
      Appliances.lumiere.update(Keys.L(),[32,33],34);
      Appliances.lumiere.update(Keys.L(),35,36);
    }
  },
  chambre : {
    create : function(){
      game.add.tileSprite(1100, 500, 900, 850, 'moquette'); //Chambre

      Walls.horizontal.create(1100,500,'orange',900,125,15);//Chambre fond
      Walls.horizontal.create(1100,500,'noir',900,10,16);//Chambre fond
      Walls.vertical.create(1970,500,'noir',30,975,17);//Chambre gauche
      Walls.vertical.create(1100,500,'noir',10,170,18);//Chambre part1
      Walls.vertical.create(1100,830,'noir',10,170,19);//Chambre part2

      Appliances.radiateur.create(1250,550,37);
      Appliances.lampe.create(1150,540,'bleu',38);
      Appliances.tv.create(1780,850,'noir',39);
      Furnitures.lit.create(1750,565,'face',40);
      Furnitures.armoire.create(1450,460,'facecommode',41);
      Appliances.radio.create(1490,530,42);
      Appliances.lumiere.create(1670,470,1707,550,'noir','rectangulaire',43,44);
      Appliances.lumiere.create(1830,470,1867,550,'noir','rectangulaire',45,46);
    },
    update : function(){
      Walls.horizontal.update(15);
      Walls.horizontal.update(16);
      Walls.vertical.update(17);
      Walls.vertical.update(18);
      Walls.vertical.update(19);

      Appliances.radiateur.update(Keys.R(),37);
      Appliances.lampe.update(Keys.L(),38);
      Appliances.tv.update(Keys.T(),39);
      Furnitures.lit.update(40);
      Furnitures.armoire.update(41);
      Appliances.radio.update(Keys.R(),42);
      Appliances.lumiere.update(Keys.L(),43,44);
      Appliances.lumiere.update(Keys.L(),45,46);
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

      Appliances.radiateur.create(175,1050,47);
      Appliances.radiateur.create(575,1050,48);
      Appliances.radiateur.create(1275,1050,49);
      Appliances.radiateur.create(1675,1050,50);
      Decorations.tapis.create(1400,1270,'beige',370,200,51);
      Appliances.lumiere.create([1150,1490,1810],[980,980,980],1100,1030,'noir','rectangulaire',[52,53,54],55);
      Appliances.lumiere.create([50,390,710],[980,980,980],830,1030,'noir','rectangulaire',[56,57,58],59);
      Furnitures.canape.create(1490,1360,'dos',60);
      Appliances.tv.create(1530,1250,'beige',61);
      Furnitures.tables_chaises.create(360,1230,'table+chaises','taupe','cote',62);
      Decorations.plante.create(420,1250,2,63);
      Appliances.lampe.create(1420,1340,'bleu',64);
      Decorations.tapis.create(800,1200,'bleu',400,200,65);
      Furnitures.fauteuil.create(1730,1320,'droite',66);
      Furnitures.armoire.create(-60,1200,'cotelivre',67);
      Furnitures.armoire.create(345,980,'facecommode',68);
      Appliances.ventilateur.create(200,1250,69);

    },
    update : function(){
      Walls.horizontal.update(20);
      Walls.horizontal.update(21);
      Walls.horizontal.update(22);
      Walls.horizontal.update(23);
      Walls.vertical.update(24);
      Walls.vertical.update(25);
      Walls.horizontal.update(26);

      Appliances.radiateur.update(Keys.R(),47);
      Appliances.radiateur.update(Keys.R(),48);
      Appliances.radiateur.update(Keys.R(),49);
      Appliances.radiateur.update(Keys.R(),50);
      Decorations.tapis.update(51);
      Appliances.lumiere.update(Keys.L(),[52,53,54],55);
      Appliances.lumiere.update(Keys.L(),[56,57,58],59);
      Furnitures.canape.update(60);
      Appliances.tv.update(Keys.T(),61);
      Furnitures.tables_chaises.update(62);
      //Decorations.plante.update(63);
      Appliances.lampe.update(Keys.L(),64);
      Decorations.tapis.update(65);
      Furnitures.fauteuil.update(66);
      Furnitures.armoire.update(67);
      Furnitures.armoire.update(68);
      Appliances.ventilateur.update(Keys.V(),69);

    }
  },
  couloir : {
    create : function(){
      game.add.tileSprite(905, 0, 200, 1000, 'parquet2'); //Couloir

      Walls.horizontal.create(910,0,'marron',190,125,27);//couloir fond
      Walls.horizontal.create(910,0,'noir',190,10,28);//couloir fond
      //Walls.vertical.create(900,1000,'noir',10,125,29);//Couloir bas gauche
      //Walls.vertical.create(1100,1000,'noir',10,125,30);//Couloir bas droite
    },
    update : function(){
      Walls.horizontal.update(27);
      Walls.horizontal.update(28);
      //Walls.vertical.update(29);
      //Walls.vertical.update(30);
    }
  }
};

var a1;
var spider;
var city;
var cityImage;

var monster,wall;
var monsterImage;
var stone,stoneImage;
var wa;
var bulletfire,bulletfireImage;
var bullet,bulletImage;
var mon,mon1,mon2;
var group;

var PLAY=0;
var END=1;
var gameState=PLAY;
var spider1;
var game,game1;
var life1,life2,life3,life;
var score;
var life;
var backgroundSound;
var gameOut;
var point100;
var fire100;
var h1;
var roar;
var st;


function preload(){


a1=loadAnimation('photo1.png','photo2.png');
cityImage=loadImage('city.png');
monsterImage=loadImage('monster1.png');
stoneImage=loadImage('stone.png');
bulletfireImage=loadImage('fire.png');
bulletImage=loadImage('kuch.png');
mon1=loadAnimation('mon1.png','mon2.png');
mon2=loadAnimation('mons1.png','mons2.png');
spider1=loadAnimation('photo1.png');
game1=loadImage('gameover.png');
life=loadImage('life.png');
backgroundSound=loadSound('a.wav');
gameOut=loadSound('gameover.wav');
point100=loadSound('b.wav');
fire100=loadSound('efg.mp3','aaa.wav');
h1=loadSound('h1.mp3');
roar=loadSound('monster.wav');
st=loadSound('e.wav');
}


function setup() {
  createCanvas(800, 400);
  
   spider=createSprite(50,320,10,10);
  spider.addAnimation('run',a1);
  spider.scale=0.2
  spider.debug=false;
  spider.setCollider('rectangle',10,1,380,380);
  



  city=createSprite(width/2+360,height/2-100/2,10,10);
  city.addImage(cityImage);
  city.scale=0.8

monster=createSprite(790,100+50,10,10);
  monster.addImage(monsterImage);
  monster.scale=0.02
  monster.debug=false;

   wall=createSprite(780,150+25,100,10);



   stone=createSprite(750,100+50,10,10);
   stone.addImage(stoneImage);
   stone.scale=0.04
   stone.debug=false;
   stone.setCollider('circle',0,0,20);

   monster.depth=monster.depth+1;


   wa=createSprite(width/2,360,900,10);
   wa.visible=false;

   bulletfire=createSprite(width/2,50,01,01);
   bulletfire.addImage(bulletfireImage);
   bulletfire.scale=0.4

   bullet=createSprite(width/2-14,100,01,01);
   bullet.addImage(bulletImage);
   bullet.scale=0.3
   bullet.visible=false;
   bullet.debug=false;
   bullet.setCollider('rectangle',0,0,50,bullet.height);

   group=createGroup();


   game=createSprite(width/2,height/2,10,10);
   game.addImage(game1);
   game.visible=false;


   life1=createSprite(10,10,10,10);
   life1.addImage(life);
   life1.scale=0.1

   life2=createSprite(35,10,10,10);
   life2.addImage(life);
   life2.scale=0.1

   life3=createSprite(60,10,10,10);
   life3.addImage(life);
   life3.scale=0.1


   score=0;
   life=3;
   
   backgroundSound.loop();

}

function draw() {
  background(220);
   
   

  if(gameState===PLAY){



    if(score%300==0){
      point100.play();
      point100.setVolume(0.3);
    }

   backgroundSound.setVolume(0.8);

    if(getFrameRate()/1){

    score=score+1;
    }

    city.velocityX=-(4+score/100);

    if(city.x<100){
      city.x=width/2+360;
    }

    if(frameCount%150===0){

      monster.x=760
    }
    
  if(monster.isTouching(stone)){

    stone.velocityX=-5.9;
    stone.velocityY=1.5;
    st.play();
   st.setVolume(0.2);
  }




  if(frameCount%200===0){
    stone.velocityY=stone.velocityY-0.25;
    stone.velocityX=stone.velocityX+1;
  }

  if(stone.x<500){
    monster.x=790;
  }

  if(stone.y>400 || stone.x<0){
  
    stone.y=150;
    stone.x=750;
    stone.velocityX=0;
    stone.velocityY=0;
  }

  if(keyDown('space') && spider.y>290){
    spider.velocityY=-15;
   
  }

  if(frameCount%200===0){

    mon=createSprite(width+10,320,20,20);
    mon.velocityX=-(5+score/400);
    mon.debug=false;
    roar.play();
    mon.setCollider('circle',0,0,120)
    var rand=Math.round(random(1,2));
    switch(rand){

      case 1:mon.addAnimation('a',mon1);
      break;
      case 2:mon.addAnimation('a',mon2);
      break;
      default:break;
    }
    mon.scale=0.3
    group.add(mon);
    mon.lifetime=200;

  }


  

  
  if(keyDown('enter')){
    bullet.visible=true;
    bullet.velocityY=(10+score/200);
    fire100.play();
    fire100.setVolume(0.2);
  }

if(bullet.y>420){
  bullet.visible=false;
  bullet.velocityY=0;
  bullet.y=100;
}

if(group.isTouching(bullet)  ){
   bullet.velocityY=0;
   bullet.visible=false;
   bullet.y=100;
   group.destroyEach();
}

if(stone.isTouching(spider) && life===3){
  life=life-1;
  life3.visible=false;
  stone.x=750;
  stone.y=150;
  group.destroyEach();
  h1.play();
}

if(group.isTouching(spider) && life===3){
  life=life-1;
  life3.visible=false;
  stone.x=750;
  stone.y=150;
  group.destroyEach();
  h1.play();
 
}


if(stone.isTouching(spider) && life===3){
  life=life-1;
  life3.visible=false;
  stone.x=750;
  stone.y=150;
  group.destroyEach();
  h1.play();
}

if(group.isTouching(spider) && life===3){
  life=life-1;
  life3.visible=false;
  stone.x=750;
  stone.y=150;
  group.destroyEach();
  h1.play();

 
}

if(stone.isTouching(spider) && life===2){
  life=life-1;
  life2.visible=false;
  stone.x=750;
  stone.y=150;
  group.destroyEach();
  h1.play();
}

if(group.isTouching(spider) && life===2){
  life=life-1;
  life2.visible=false;
  stone.x=750;
  stone.y=150;
  group.destroyEach();
  h1.play();

 
}


if(stone.isTouching(spider) && life===1){
  life=life-1;
  life1.visible=false;
  stone.x=750;
  stone.y=150;
  group.destroyEach();
  gameState=END;
  gameOut.play();
  gameOut.setVolume(0.3);
  h1.play();

}

if(group.isTouching(spider) && life===1){
  life=life-1;
  life1.visible=false;
  stone.x=750;
  stone.y=150;
  group.destroyEach();
  gameState=END;
  gameOut.play();
  gameOut.setVolume(0.3);
  h1.play();
 
}



  }else if(gameState===END){

    
    backgroundSound.setVolume(0);
city.velocityX=0;
mon.velocityX=0;
stone.velocityX=0;
stone.velocityY=0;
spider.addAnimation('run',spider1);
mon.lifetime=(-1);
game.visible=true;
if(mousePressedOver(game)){
  reset();
  gameOut.setVolume(0);
}

}
  


bulletfire.depth=bulletfire.depth+1;

  spider.depth=city.depth;
  spider.depth=spider.depth+1;

  spider.velocityY=spider.velocityY+1;

  spider.collide(wa);
  
  drawSprites();
  

  
  fill ('white');
  text('SCORE:',650,10);
  text (score,700,10);
  text('LIFE:',200,10);
  text(life,230,10);
}

function reset(){
  gameState=PLAY;
  life1.visible=true;
  life2.visible=true;
  life3.visible=true;

  spider.addAnimation('run',a1);

  game.visible=false;

  life=3;
  score=0;
}
var backgroundImage,background1;
var startButton,startButtonImage;
var car,carImage;
var road,roadImage;
var reachHereSign,reachHereSignImage;
var gameState = 0;
var route = [];
var position = [];
var positionX = 0;
var positionY = 0;
function preload (){
  backgroundImage = loadImage ("background-1800x900.jpg");
startButtonImage = loadImage ("startButton.png") ;
roadImage = loadImage("Road-200x200.png");
carImage = loadImage("car-150x100.png");
reachHereSignImage = loadImage("ReachHereSign.png");
}
function setup() {
 createCanvas(1000,1000);
   background1 = createSprite(400,200,1000, 900);
   background1.addImage("backgroundImages",backgroundImage); 
   startButton = createSprite (400,300,100,100);
   startButton.addImage("startButton",startButtonImage);
   
road1 = createSprite(400,200,10,10);
road1.addImage("road",roadImage);
road2 = createSprite(400,200,10,10);
road2.addImage("road",roadImage);
road3 = createSprite(400,200,10,10);
road3.addImage("road",roadImage);
road4 = createSprite(400,200,10,10);
road4.addImage("road",roadImage);
road5 = createSprite(400,200,10,10);
road5.addImage("road",roadImage);
road6 = createSprite(400,200,10,10);
road6.addImage("road",roadImage);
road7 = createSprite(400,200,10,10);
road7.addImage("road",roadImage);
road8 = createSprite(400,200,10,10);
road8.addImage("road",roadImage);
reachHereSign=createSprite(400,200,10,10);
reachHereSign.addImage("sign",reachHereSignImage);
car = createSprite(400,200,10,10);
   car.addImage("car",carImage);
}

function draw() {
console.log(getFrameRate());
frameRate(10);
  background("white"); 
  
    
      
 if (gameState === 0) {
   startButtonImage.visible = true ;
   startButton.visible = true;
  car.visible = false;
  road1.visible = false;
  road2.visible = false;
  road3.visible = false;
  road4.visible = false;
  road5.visible = false;
  road6.visible = false;
  road7.visible = false;
  road8.visible = false;
  reachHereSign.visible=false;
if(mousePressedOver(startButton)){
  gameState=1;
}

} 

    if (gameState===1){
      if (keyDown(RIGHT_ARROW)){
        
        positionX = positionX + 10;
        positionY = positionY+0;
        position = [positionX,positionY];
        route.push(position);
        //console.log(route) ;
        
        } 
        if (keyDown(LEFT_ARROW)){
        
          positionX = positionX - 10;
          positionY = positionY+0;
          position = [positionX,positionY];
          route.push(position);
         // console.log(route) ;
          
          } 
          if (keyDown(UP_ARROW)){
        
            positionX = positionX + 0;
            positionY = positionY-10;
            position = [positionX,positionY];
            route.push(position);
            //console.log(route) ;
            
            } 
            
            if (keyDown(DOWN_ARROW)){
        
              positionX = positionX + 0;
              positionY = positionY+10;
              position = [positionX,positionY];
              route.push(position);
              //console.log(route) ;
              
              } 
              
  
      
      startButton.visible = false;
      road1.visible=true;
      road2.visible=true;
      road3.visible=true;
      road4.visible=true;
      road5.visible = true;
      road6.visible = true;
      road7.visible = true;
      road8.visible = true;
      
      car.visible=true;
      car.x=100;
      car.y = 550;
     /* road1.x=100;
      road1.y=550;
      road2.x=300;
      road2.y=550;
      road3.x=500;
      road3.y=550;
      road4.x=500;
      road4.y=350;
      road5.x=500;
      road5.y=150;
      road6.x = 700;
      road6.y=150;
      road7.x=900;
      road7.y=150;
road8.x=900;
road8.y=350;*/

//if (car.x===900 && car.y===350){
 // gameState=2;
//}

 // console.log(gameState);
  if(mousePressedOver(road1)){
    gameState="move";
  }
  if(gameState==="move"){
    
 for  (var i=0; i<route.length; i++) {
    car.x = car.x +route[i][0];
  car.y = car.y+route[i ][1];
  //console.log(car.x) ;
  //console.log(car.y) ;
  
 }   

  }

      
      
    }
    if (gameState === 2){
      road1.x=100;
      road1.y=150;
    }  
  drawSprites();
}
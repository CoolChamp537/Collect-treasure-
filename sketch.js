var path;
var end,endImg
var imgs,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg = loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 8;
  
end = createSprite(200,250)
end.addImage("ended",endImg)
end.visible = 0
  
//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 600 ){
    path.y = height/30;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection + 50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection + 1000
      treasureCollection.x = 300

      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection + 100

      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState = "over"
    }     
  }
    
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  
        if(gameState === "over"){
        
      background ("cyan") 
        
      end.visible = 1
      
      path.depth = boy.depth + 1
      path.depth = swordGroup.depth + 1
      path.depth = diamondsG + 1
      path.depth = jwelleryG + 1
      path.depth = cashG + 1
        
      path.velocityY = 0
      swordGroup.setVelocityYEach (0)
      diamondsG.setVelocityYEach(0)
      jwelleryG.setVelocityYEach(0)
      cashG.setVelocityYEach(0)
      boy.velocityY = 0
        
      path.visible = 0
      swordGroup.destroyEach()
      diamondsG.destroyEach()
      jwelleryG.destroyEach()
      cashG.destroyEach()
      boy.destroy()
        
      textSize(500)
      textAlign(CENTER)
      text("😭",200,475)
        
      textSize(25)
      fill("blue")
      textAlign(CENTER)
      text("Total money collected: $" + treasureCollection,200,200)
     
        textSize(35)
        fill("darkblue")
          textAlign(CENTER)
        text("Reward:",200,310)
          
    if(treasureCollection < 500){
    textSize(100)
    textAlign(CENTER)
    text("💸",200,440)
      
    textSize(25)
      fill("blue")
    text("(Money)",200,500)
  }
          
  if(treasureCollection > 500 && treasureCollection < 1000){
    textSize(100)
    textAlign(CENTER)
    text("💍",200,440)
      
    textSize(25)
    fill("blue")
    text("(Jewel)",200,500)
  }
          
  if(treasureCollection > 1000 && treasureCollection < 5000){
    textSize(100)
    textAlign(CENTER)
    text("📱",200,440)
      
    textSize(25)
      fill("blue")
    text("(smartphone)",200,500)
  }
          
  if(treasureCollection > 5000 && treasureCollection < 7500){
    textSize(100)
    textAlign(CENTER)
    text("💻",200,440)
      
    textSize(25)
    fill("blue")
    text("(laptop)",200,500)
  }
          
  if(treasureCollection > 7500 && treasureCollection < 10000){
    textSize(100)
    textAlign(CENTER)
    text("💎",200,440)
      
    textSize(25)
    fill("blue")
    text("(Diamond)",200,500)
  }
          
  if(treasureCollection > 10000){
    textSize(100)
    textAlign(CENTER)
    text("🤖",200,440)
      
    textSize(25)
    fill("blue")
    text("(Robot)",200,500)
  }
          
    }
  
}

function createCash() {
  if (World.frameCount % 100 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 8;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 220 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 8;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 150 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 8;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 170 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 8;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
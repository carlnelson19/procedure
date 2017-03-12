var player_char;
var sprite_player;


var player_x;
var player_y;


var object_mirror;
var object_pills;
var object_alch;
var object_spliff;

var object_divine;
var sprite_boss;

var object_cloud;
var sprite_cloud1;
var sprite_cloud2;
var sprite_cloud3;
var sprite_cloud4;

var move_clouds;
var cloud_speed;

var divine_x;
var divine_y



var level1_speed;
var level1_x;
var level1_y;

var level2_speed;
var level2_x;
var level2_y;

var level3_speed;
var level3_x;
var level3_y;

var level1;
var level2;
var level3;

var lives;
var hearts;




function preload(){
    
 player_char = loadAnimation("assets/asceticplayer_1.png", "assets/asceticplayer_2.png");
 object_mirror = loadAnimation("assets/vanity_1.png", "assets/vanity_3.png");
 object_divine = loadAnimation("assets/divine_1.png", "assets/divine_2.png", "assets/divine_4.png");   
 object_cloud = loadAnimation("assets/cloud_1.png", "assets/cloud_2.png");
 object_pills = loadAnimation("assets/drugs_1.png", "assets/drugs_4.png");
 object_alch = loadAnimation("assets/alch_1.png", "assets/alch_5.png");
 object_spliff = loadAnimation("assets/spliff_1.png", "assets/spliff_10.png");
  
}

function setup() {

      
  player_x = 30;
  player_y = 730;
    
  level1_speed = 2;
  level1_x = 30;
  level1_y = 600; 
    
  level2_speed = 3;
  level2_x = 30;
  level2_y = 400;
    
  level3_speed = 4;
  level3_x = 30;
  level3_y = 220; 
    
  divine_x = 270;
  divine_y = 50;
  cloud_speed = .5;
  
  lives = 3;
    
  createCanvas(500, 690);
    
  sprite_1 = createSprite(level1_x, level1_y);
  sprite_1.addAnimation("default", object_pills);
  sprite_1.setSpeed(-level1_speed, 0);  
  sprite_1.setCollider("rectangle", 0, 0, 30, 51);
    
  sprite_2 = createSprite(level1_x+60, level1_y);
  sprite_2.addAnimation("default", object_mirror);
  sprite_2.setSpeed(level1_speed, 0);  
  sprite_2.setCollider("rectangle", 0, 0, 35, 62);
   
  //sprite_3 = createSprite(level1_x+120, level1_y);
  //sprite_3.addAnimation("default", object_alch); 
  //sprite_3.setSpeed(-level1_speed, 0);
  
  sprite_4 = createSprite(level1_x+180, level1_y);
  sprite_4.addAnimation("default",  object_pills);
  sprite_4.setSpeed(level1_speed, 0);
  sprite_4.setCollider("rectangle", 0, 0, 30, 51);
    
  sprite_5 = createSprite(level1_x+240, level1_y);
  sprite_5.addAnimation("default", object_spliff); 
  sprite_5.setSpeed(-level1_speed, 0);
  sprite_5.setCollider("rectangle", 0, 0, 52, 43);
    
  sprite_6 = createSprite(level1_x+300, level1_y);
  sprite_6.addAnimation("default", object_mirror);
  sprite_6.setSpeed(level1_speed, 0);
  sprite_6.setCollider("rectangle", 0, 0, 35, 62);
    
  sprite_7 = createSprite(level1_x+360, level1_y);
  sprite_7.addAnimation("default", object_spliff); 
  sprite_7.setSpeed(-level1_speed, 0);
  sprite_7.setCollider("rectangle", 0, 0, 52, 43);
    
  sprite_8 = createSprite(level1_x+420, level1_y);
  sprite_8.addAnimation("default", object_alch); 
  sprite_8.setSpeed(level1_speed, 0);
  sprite_8.setCollider("rectangle", 0, 0, 23, 47);
    
  //level one array
  level1 = [sprite_1, sprite_2, sprite_4, sprite_5, sprite_6, sprite_7, sprite_8];
  
  sprite_9 = createSprite(level2_x, level2_y);
  sprite_9.addAnimation("default", object_mirror);
  sprite_9.setSpeed(level2_speed, 0);
  sprite_9.setCollider("rectangle", 0, 0, 35, 62);
    
  sprite_10 = createSprite(level2_x+60, level2_y);
  sprite_10.addAnimation("default", object_spliff);
  sprite_10.setSpeed(-level2_speed, 0);
  sprite_10.setCollider("rectangle", 0, 0, 52, 43);
    
  sprite_11 = createSprite(level2_x+120, level2_y);
  sprite_11.addAnimation("default", object_pills);
  sprite_11.setSpeed(level2_speed, 0);
  sprite_11.setCollider("rectangle", 0, 0, 30, 51);
    
  sprite_12 = createSprite(level2_x+180, level2_y);
  sprite_12.addAnimation("default", object_alch);
  sprite_12.setSpeed(random(-level2_speed, level2_speed), 0);
  sprite_12.setCollider("rectangle", 0, 0, 23, 47);
    
  //sprite_13 = createSprite(level2_x+240, level2_y);
  //sprite_13.addAnimation("default", object_mirror);
  //sprite_13.setSpeed(random(-level2_speed, level2_speed), 0);
    
  sprite_14 = createSprite(level2_x+300, level2_y);
  sprite_14.addAnimation("default", object_spliff);
  sprite_14.setSpeed(level2_speed, 0);
  sprite_14.setCollider("rectangle", 0, 0, 52, 43);
    
  sprite_15 = createSprite(level2_x+360, level2_y);
  sprite_15.addAnimation("default", object_pills);
  sprite_15.setSpeed(-level2_speed, 0);
  sprite_15.setCollider("rectangle", 0, 0, 30, 51);
    
  sprite_16 = createSprite(level2_x+420, level2_y);
  sprite_16.addAnimation("default", object_alch);
  sprite_16.setSpeed(level2_speed, 0);
  sprite_16.setCollider("rectangle", 0, 0, 23, 47);
 
  //level 2 array
  level2 = [sprite_9, sprite_10, sprite_11, sprite_12, sprite_14, sprite_15, sprite_16];
    
  sprite_17 = createSprite(level3_x, level3_y);
  sprite_17.addAnimation("default", object_pills);
  sprite_17.setSpeed(-level3_speed, 0);
  sprite_17.setCollider("rectangle", 0, 0, 30, 51);
    
  sprite_18 = createSprite(level3_x+60, level3_y);
  sprite_18.addAnimation("default", object_alch);
  sprite_18.setSpeed(level3_speed, 0);
  sprite_8.setCollider("rectangle", 0, 0, 23, 47);
    
  sprite_19 = createSprite(level3_x+120, level3_y);
  sprite_19.addAnimation("default", object_spliff);
  sprite_19.setSpeed(-level3_speed, 0);
  sprite_19.setCollider("rectangle", 0, 0, 52, 43);
    
  sprite_20 = createSprite(level3_x+180, level3_y);
  sprite_20.addAnimation("default", object_mirror);
  sprite_20.setSpeed(level3_speed, 0);
  sprite_20.setCollider("rectangle", 0, 0, 35, 62);
    
  sprite_21 = createSprite(level3_x+240, level3_y);
  sprite_21.addAnimation("default", object_pills);
  sprite_21.setSpeed(-level3_speed, 0);
  sprite_21.setCollider("rectangle", 0, 0, 30, 51);
    
  sprite_22 = createSprite(level3_x+300, level3_y);
  sprite_22.addAnimation("default", object_alch);
  sprite_22.setSpeed(level3_speed, 0);
  sprite_22.setCollider("rectangle", 0, 0, 23, 47);
    
  //sprite_23 = createSprite(level3_x+360, level3_y);
  //sprite_23.addAnimation("default", object_spliff);
  //sprite_23.setSpeed(random(-level3_speed, level3_speed), 0);
    
  sprite_24 = createSprite(level3_x+420, level3_y);
  sprite_24.addAnimation("default", object_mirror);
  sprite_24.setSpeed(-level3_speed, 0);
  sprite_24.setCollider("rectangle", 0, 0, 35, 62);
 
  level3 = [sprite_17, sprite_18, sprite_19, sprite_20, sprite_21, sprite_22, sprite_24];
    
  sprite_boss = createSprite(divine_x, divine_y);
  sprite_boss.addAnimation("default", object_divine);
   
  sprite_player = createSprite(player_x, player_y);
  sprite_player.addAnimation("default", player_char);
  sprite_player.setCollider("rectangle", 0, 6, 27, 93);
    
  sprite_cloud1 = createSprite(divine_x + 100, divine_y);
  sprite_cloud1.addAnimation("default", object_cloud);
  sprite_cloud1.setSpeed(random(-cloud_speed, cloud_speed), 0);
    
  sprite_cloud2 = createSprite(divine_x - 100, divine_y + 25);
  sprite_cloud2.addAnimation("default", object_cloud);
  sprite_cloud2.setSpeed(random(-cloud_speed, cloud_speed), 0);
    
  sprite_cloud3 = createSprite(divine_x + 175, divine_y + 25);
  sprite_cloud3.addAnimation("default", object_cloud);
  sprite_cloud3.setSpeed(random(-cloud_speed, cloud_speed), 0);
    
  sprite_cloud4 = createSprite(divine_x - 180, divine_y - 5);
  sprite_cloud4.addAnimation("default", object_cloud);
  sprite_cloud4.setSpeed(random(-cloud_speed, cloud_speed), 0);
  move_clouds = [sprite_cloud1, sprite_cloud2, sprite_cloud3, sprite_cloud4];    
      
  

}

function draw() {  
  scale(.85);
    
  background(49, 89, 150);
  imageMode(CENTER);   
  
  //moves level 1 items back and forth  
  for(var i = 0; i < level1.length; i=i+1){
      if(level1[i].position.x >= 580){
        level1[i].setSpeed(-level1_speed, 0);
        level1[i].mirrorX (-1);
      }
      else if(level1[i].position.x <= 0){
        level1[i].setSpeed(level1_speed, 0);
        level1[i].mirrorX (1);  
      }
  } 
  //moves level 2 items back and forth    
  for(var i = 0; i < level2.length; i=i+1){
      if(level2[i].position.x >= 580){
        level2[i].setSpeed(-level2_speed, 0);
        level2[i].mirrorX (-1);
      }
      else if(level2[i].position.x <= 0){
        level2[i].setSpeed(level2_speed, 0);
        level2[i].mirrorX (1);  
      }
  } 
    
  for(var i = 0; i < level3.length; i=i+1){
      if(level3[i].position.x >= 580){
        level3[i].setSpeed(-level3_speed, 0);
        level3[i].mirrorX (-1);
      }
      else if(level3[i].position.x <= 0){
        level3[i].setSpeed(level3_speed, 0);
        level3[i].mirrorX (1);  
      }
  } 
    
 //moves clouds back and forth  
 for(var i = 0; i < move_clouds.length; i=i+1){
     if(move_clouds[i].position.x >= 550){
         move_clouds[i].setSpeed(-cloud_speed, 0);
         move_clouds[i].mirrorX(-1);
     }
     else if(move_clouds[i].position.x <= 0){
         move_clouds[i].setSpeed(cloud_speed, 0);
         move_clouds[i].mirrorX (1);
     }
 }
    
 for(var i = 0; i < level1.length; i=i+1){
 if(sprite_player.collide(level1[i])){
     sprite_player.position.x = player_x;
    sprite_player.position.y = player_y;
    sprite_player.setSpeed(0, 0);
    lives = lives - 1;
 }
 }
    
for(var i = 0; i < level2.length; i=i+1){
 if(sprite_player.collide(level2[i])){
     sprite_player.position.x = player_x;
    sprite_player.position.y = player_y;
    sprite_player.setSpeed(0, 0);
    lives = lives - 1;
 }
 }
    
for(var i = 0; i < level3.length; i=i+1){
 if(sprite_player.collide(level3[i])){
     sprite_player.position.x = player_x;
    sprite_player.position.y = player_y;
    sprite_player.setSpeed(0, 0);
    lives = lives - 1;
 }
 }
    
 

    
  fill(255);
  textSize(20);
  
  text("lives: " + hearts, 10, 25);
  frameRate(45);
  drawSprites();
    
  if(lives == 3){
      hearts = "♥ ♥ ♥";
  }
    else if(lives == 2){
      hearts = "♥ ♥";
    }
    else if(lives == 1){
      hearts = "♥";
    }
    else if(lives == 0){
        hearts = " ";
    }
    else if(lives < 0){
        fill(255);
        stroke(0);
        strokeWeight(3);
        rect(120, 350, 300, 100);
        strokeWeight(.5);
        fill(0);
        text("you succumbed to sinful vices", 138, 405);
    }
  
    if (sprite_player.collide(sprite_boss)) {
        fill(255);
        stroke(0);
        strokeWeight(3);
        rect(120, 350, 300, 100);
        strokeWeight(.5);
        fill(0);
        text("✞ u fuckin won that shit ✞", 158, 405);
  }     
}


//controls player character
function keyPressed (){
    if (keyCode == RIGHT_ARROW) {
    sprite_player.setSpeed(2.5, 0);
    sprite_player.mirrorX (1);
  }
  else if (keyCode == DOWN_ARROW) {
    sprite_player.setSpeed(5, 90);  
  }
  else if (keyCode == LEFT_ARROW) {
    sprite_player.setSpeed(2.5, 180);
    sprite_player.mirrorX (-1);
  }
  else if (keyCode == UP_ARROW) {
    sprite_player.setSpeed(5, 270);
  }
  else if (key == ' ') {
    sprite_player.setSpeed(0, 0);
    
  }
  return false;
}

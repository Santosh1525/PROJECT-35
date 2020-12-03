var dog,happyDog,foodS,foodStack;
var dogImage1,dogImage2;

function preload()
{
  dogImage1 = loadImage("images/dogImage1.png");
  dogImage2 = loadImage("images/dogImage2.png");
}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(250,350,30,40);
  dog.addImage(dogImage1);
  dog.scale = 0.2;

  database = firebase.database();
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage2);
  }
  
  
    drawSprites();

  textSize(20);
  fill(255,255,25);
  strokeWeight(5);
  stroke("red");
  text("Note: Press UP_ ARROW  to  Feed  Drago  Milk!",30,20);
  
  }
  
  function readStock(data){
    foodS = data.val();
  }
  
  function writeStock(x){
  if(x<= 0){
    x =0;
  }else{
    x = x-1;
  }
  
  database.ref('/').update({
    Food: x,
  })
  }
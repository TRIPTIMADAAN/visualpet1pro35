
var dog,happyDog,database,foodS,foodStoke
function preload()
{

}

function setup() {
	var canvas=createCanvas(500,500);
  dog=createSprite(250,400,20,20)
  dog.loadImage("image/dogImg.png")
  dogHappy=createS(250,350,20,20)
  dogHappy.loadImage("image/dog1Img.png")
  foodStoke=database.ref("Food")
  foodStoke.on("value",readStock)
}


function draw() {  
  background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
    writeStoke(foodS)
    dogHappy.addImage("image/dog1Img.png")
  }
  
  text("PRESS UP_ARROW KEY TO FEED THE HUNGRY DOG ",60,250)
  textSize(25)
  stroke(3)
  fill("yellow")
  
  if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
}
else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1);
}
dog.addImage("image/dogImg.png")
drawSprites();
}

function changePosition(x,y){
database.ref('dog/position').set(
   {
       x:position.x+x,
       y:position.y+y
   }
)
  }
function readStock(data){
  foodS=data.val();
  }

  function writeStoke(x){
    database.ref('/').update({
      Food:x
    })
  }




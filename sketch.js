var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
    const Constraint = Matter.Constraint;
var obstacles = [];
var ball;

var count = 10;
var gameState = "play";
var wall1, wall2, wall3, wall4;
var cannon, sling;

function preload() {
  backgroundImg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1005, 700);
  
  engine = Engine.create();
  world = engine.world;
  
  for (var j = 40; j <=width-50; j=j+50) {
        obstacles.push(new Obstacles(j,200));
  }

  for (var j = 15; j <=width-10; j=j+50) {
          obstacles.push(new Obstacles(j,280));
  }

  for (var j = 40; j <=width-50; j=j+50) {
          obstacles.push(new Obstacles(j,360));
  }

  for (var j = 15; j <=width-10; j=j+50) {
      obstacles.push(new Obstacles(j,440));
  }

  for (var j = 40; j <=width-50; j=j+50) {
      obstacles.push(new Obstacles(j,520));
  }

 
  wall1 = new Edges(500,-1,1010,55);  
  wall2 = new Edges(500,703,1010,55);
  wall3 = new Edges(-15,350,45,705);
  wall4 = new Edges(1010,350,45,705);

  
  cannon = new Spawner(500,45,150,77);
  
  ball = new Ball(500,65,10);

  sling = new SlingShot(ball.body, cannon.body);
}
 
function draw() {
  background(backgroundImg);
  fill(0);
  textSize(25)
  text("Movimientos "+count,20,120);

  Engine.update(engine);

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  cannon.display();

  for (var i = 0; i < obstacles.length; i++) {
     obstacles[i].display();  
  } 

  ball.display();

  if (count === 0){
    sling.fly();
    count = 10;
  }
}

function keyPressed(){
  if(keyCode === 39){
    cannon.movingLeft();
    count--
    console.log(count);
  }

  if (keyCode === 37){
    cannon.movingRight();
    count--
    console.log(count);
  }

  if (keyCode === 32){
    sling.attach(ball.body);
  }
}
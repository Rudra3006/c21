
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,Left,Right
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = createSprite(400,690,800,20)
	Left = createSprite(780,650,20,100)
	Right = createSprite(730,650,20,100)
    
	var options = {
		isStatic:false
		restitution:0.3
		friction:0
		density:1.2
	}

	ball = Bodies.circle(10,100,10,options)
	World.add(world,ball)
	Engine.run(engine);
    rectrangleMode(RADIUS)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectrangle(ball.postition.x,ball.postition.y,10,10)
  ground.display()
  Left.display()


  
  Right.display()
  drawSprites();
 
}

Function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:20,y:-20});
	}
}
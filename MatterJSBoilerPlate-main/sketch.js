const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide,rightSide;

function setup() {
	createCanvas(1500, 1400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	ball=Bodies.circle(200,20,25,ball_options)
	World.add(world,ball)

	groundObj=new Ground(width/2,670,width,20)
	leftSide=new Ground(1100,600,20,120)
	RightSide=new Ground(900,600,20,120)


	upArrowKey.mouseClicked(hForce)

	
	Engine.run(engine);
  
}


function draw() {
background(0);
leftSide.show()
rightSide.show()
rectMode(CENTER);
groundObj.display();
Engine.update(engine);
drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.07,y:0})
}




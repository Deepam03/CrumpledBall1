
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var p;

function setup() {
	createCanvas(600, 500);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	p = new Paper(150,300,20,30);
	groundObject=new ground(300,480,600,100);
	dustbinObj=new dustbin(500,420);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  p.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(p.body, p.body.position, {x: 130 , y: -30})
	}
}
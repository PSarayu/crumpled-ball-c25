
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;
var world;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

  paper = new CrumpledBall(200,650,100)
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

  Engine.run(engine);

  console.log(paper.y)
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);

  groundObject.display();
  paper.display();
  dustbinObj.display();

}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:450,y:-750})
	
    console.log("not working")
}}


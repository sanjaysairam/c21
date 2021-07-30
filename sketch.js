
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(700, 400);
 
  

	engine = Engine.create();
	world = engine.world;
 // ground = new Ground(200,390,1000,20);
  left = new Ground(490,350,10,80);
  right = new Ground(650,350,10,80);
  ground=new Ground(200,390,1000,20);
	//Create the Bodies Here.
	var ball_options={
		isStatic : false,
		restitution:0.3,
		
	}



	Engine.run(engine);

 ball = Bodies.circle(100,200,20,ball_options);
 World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  left.show();
  right.show()
  Engine.update(engine)


}




function hForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
    }

function keyPressed(){
  if (keyCode === UP_ARROW){
    hForce();
    
}

  drawSprites();
 
}



  
  




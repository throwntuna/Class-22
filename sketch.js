const Engine = Matter.Engine; //Namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var G_options= 
{
  isStatic:true
}
var B_options=
{
  restitution: 0.6
}
function setup() {
  createCanvas(400,400);
 engine=Engine.create();// a 'world' is created by default
 world=engine.world;

 ground= Bodies.rectangle(200,390,400,10,G_options);
 World.add(world,ground);

 ball = Bodies.circle(200, 200, 15,B_options); 
 World.add(world,ball);
}


function draw() {
  background("black"); 
  Engine.update(engine);

  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 15, 15)
}


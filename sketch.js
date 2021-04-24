const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var engine,world;
var bg,boy,ball;

function preload(){
  bg=loadImage("bg.jpg");
  boy=loadImage("boy.png");
  ball=loadImage("ball.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;
 
  ball=new Ball(330,390,80);
  sling=new SlingShot(ball.body,{x:320,y:335});
  ground=new Ground(windowWidth/2,windowHeight,windowWidth,20);
}

function draw() {
  background(bg);  
  Engine.update(engine);
  ground.display();
  image(boy,150,260,200,400);
  text(mouseX+","+mouseY,mouseX,mouseY);
  sling.display();
  ball.display();
 
}
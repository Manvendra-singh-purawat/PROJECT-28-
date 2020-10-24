const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,boyImg,treeImg;
var rock,tree;
var M1,M2,M3,M4,M5;
var chain;

function preload()
{
	boyImg = loadImage("boy.png");
	tree = loadImage("tree.png");
	backgroundImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:320 , y:225});
	M1 = new mango(900,150,8);
	M2 = new mango(950,120,10);
	M3 = new mango(1000,100,7);
	M4 = new mango(950,60,9);
	M5 = new mango(1050,60,6);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}



function draw() {
	background(backgroundImg);
	rectMode(CENTER);
    rect(width/2,400,width,20);
	chain.display();
    
    
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	rock.display();
	M1.display();
	M2.display();
	M3.display();
	M4.display();
	M5.display();
	collision(rock,M1);
	collision(rock,M2);
	collision(rock,M3);
	collision(rock,M4);
	collision(rock,M5);

	drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}

function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}

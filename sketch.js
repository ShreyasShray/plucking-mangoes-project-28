
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, stone;
var slingshot;
var boy, tree;
var mango1, mango2, mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{
	boy = loadImage("images/boy.png");
	tree = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 497.5, 1000, 5);
	stone = new Stone(160, 370, 20);
	slingshot = new SlingShot(stone.body, {x:160, y:360});
	mango1 = new Mango(700, 200, 26);
	mango2 = new Mango(670, 140, 26);
	mango3 = new Mango(770, 100, 26);
	mango4 = new Mango(840, 90, 26);
	mango5 = new Mango(800, 180, 26);
	mango6 = new Mango(880, 180, 26);
	mango7 = new Mango(850, 140, 26);
	mango8 = new Mango(620, 170, 26);

	Engine.run(engine);
  
}


function draw() {
	background(255);
	image(boy, 120, 300, 200, 250);
	image(tree, 500, 0, 500, 500);
	ground.display();
	slingshot.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	detectcollision(stone, mango1);
	detectcollision(stone, mango2);
	detectcollision(stone, mango3);
	detectcollision(stone, mango4);
	detectcollision(stone, mango5);
	detectcollision(stone, mango6);
	detectcollision(stone, mango7);
	detectcollision(stone, mango8);
	console.log(mango1.r);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function detectcollision(Lstone, Lmango){
	mangobodyposition = Lmango.body.position;
	stonebodyposition = Lstone.body.position;
	var distance = dist(stonebodyposition.x, stonebodyposition.y, mangobodyposition.x, mangobodyposition.y);
	if (distance<=50){
		Matter.Body.setStatic(Lmango.body, false);
	}

}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:160, y:370});
		slingshot.attach(stone.body);
	}
}



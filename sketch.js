const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,20,100);
    box2 = new Box(780,320,20,100);
   // pig1 = new Pig(810, 350);
   // log1 = new Log(810,260,20, PI/2);

    box3 = new Box(740,380,100,20);
   // box4 = new Box(920,240,70,70);
   // pig3 = new Pig(810, 220);

   /* log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);*/

    bird = Bodies.circle(200,100,20);
    World.add(world, bird);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
   // pig1.display();
   // log1.display();
keypressed();
    box3.display();
    //box4.display();
   // pig3.display();
    //log3.display();

    //box5.display();
    //log4.display();
   //log5.display();
ellipseMode(RADIUS);
ellipse(bird.position.x, bird.position.y,20,20);
    //bird.display();
}

function keypressed() {
if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bird.body, bird.body.position,{x:85, y:-85});
}
}
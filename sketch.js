const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var bob1,bob2,bob3,bob4,bob5;

function setup(){
createCanvas(windowWidth/2,windowHeight/2+300);
engine=Engine.create();
world=engine.world;

ground=new Ground(450,200,380,20);

  pendulum1 = new Pendulum(340, 450, "purple");
  pendulum2 = new Pendulum(400, 450, "purple");
  pendulum3 = new Pendulum(460, 450, "purple");
  pendulum4 = new Pendulum(520, 450, "purple");
  pendulum5 = new Pendulum(580, 450, "purple");

  sling1 = new Sling(pendulum1.body, { x: 340, y: 200 });
  sling2 = new Sling(pendulum2.body, { x: 400, y: 200 });
  sling3 = new Sling(pendulum3.body, { x: 460, y: 200 });
  sling4 = new Sling(pendulum4.body, { x: 520, y: 200 });
  sling5 = new Sling(pendulum5.body, { x: 580, y: 200 });
}



function draw(){
background("black");
Engine.update(engine);
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
    ground.display();
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

}

function mouseDragged() {
    Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
  }



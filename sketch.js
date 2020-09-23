const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,division1,division2,division3,division4,division5,division6,division7,division8;
var particles = [];
var plinko = [];

function setup() {
  createCanvas(420,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,height,1200,20);
  division1 = new Division(3,540,05,300);
  division2 = new Division(60,540,05,300);
  division3 = new Division(120,540,05,300);
  division4 = new Division(180,540,05,300);
  division5 = new Division(240,540,05,300);
  division6 = new Division(300,540,05,300);
  division7 = new Division(360,540,05,300);
  division8 = new Division(417,540,05,300);
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  for(var j = 4; j <= width; j=j+50)
      {
        plinko.push(new Plinko(j,75,10));
      }
  for(var j = 15; j <= width-10; j=j+50)
      {
        plinko.push(new Plinko(j,175,10));
      }
  for(var j = 26; j <= width-20; j=j+50)
      {
        plinko.push(new Plinko(j,275,10));
      }
  for(var j = 37; j <= width-30; j=j+50)
      {
        plinko.push(new Plinko(j,375,10));
      }
  for(var j = 0;j < plinko.length; j++) {
  plinko[j].display();
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(200, 220),10,10))
  }
  for(var k = 0;k < particles.length; k++) {
    particles[k].display();
    }
  drawSprites();
}
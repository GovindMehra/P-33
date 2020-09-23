class Particle {
    constructor(x,y,radius) {
      var options = {
      'restitution':0.4,
      'density' : 0.8,
      'friction' : 0.8
      }
      this.radius=radius;
      this.body = Bodies.circle(x,y,this.radius,options);
      this.trajectory=[];
      World.add(world,this.body);
    }
    display(){
      push();
      noStroke();
      this.color=color(random(0,255),random(0,255),random(0,255));
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius);
      pop();
    }
  }

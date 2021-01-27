class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution: 0.4
      }
      this.body = Bodies.circle(x,y,10,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      circle(pos.x, pos.y, 10);
    }
  }
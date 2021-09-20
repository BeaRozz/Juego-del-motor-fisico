class Edges{
    constructor(x,y,width,heigth) {
      var options = {
          restitution: 1,
          friction: 0,
          isStatic: true
      }
      
      this.width = width; 
      this.heigth = heigth;
      this.body = Bodies.rectangle(x,y,width,heigth,options);
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      noStroke();
      fill(128, 0, 0);
      rect(pos.x, pos.y, this.width,this.heigth);
    }
  };
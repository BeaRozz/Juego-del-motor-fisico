class Spawner{
constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  
  movingLeft(){
    this.body.position.x = this.body.position.x +100;
  }

  movingRight(){
    this.body.position.x = this.body.position.x -100;
  }

  display(){
    var pos =this.body.position;

    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }        
}
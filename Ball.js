class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.image = loadImage("ball.png")
        World.add(world, this.body);

    }
    
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        scale(0.04);
        image(this.image, 0, 0, this.width, this.height);
        
        pop();
    }

};
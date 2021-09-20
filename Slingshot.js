class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            //stiffness: 0.04,
            length: 10
        }
        this.bodyB = bodyB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var bodyB = this.bodyB;
            stroke(0);
        }
    }
    
}
class Fireball{
    constructor(x,y,width,angle){
        var options = {
  
            friction: 0.01,
        }
        this.body = Bodies.circle(x, y, width, options);
        this.width = width;
        this.image = loadImage("sprites/FireballSP.png");
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        push();
        rotate(this.body.angle);
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.body.angle);
        pop();
    }
}
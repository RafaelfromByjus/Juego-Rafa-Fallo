class Floor{
    constructor(x,y,heigth,angle){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,300,heigth,angle, options);
        this.heigth = heigth;
        this.image = loadImage("sprites/Viga.png");
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
    }
    display(){
        //translate(this.body.position.x, this.body.position.y)
        //rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image, this.body.position.x ,this.body.position.y, 300, this.heigth);
    }
}
class Drops{
    constructor(x,y){
        var options={
            "restitution": 1,
            "friction": 0.5,
            "density": 0.1
        }
        this.x = x;
        this.y = y;
        this.rain = Bodies.circle(x,y,10,options);
        this.radius = 10;

        World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        fill("darkblue");
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}
class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Imagenes/Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.image2 = loadImage("Imagenes/Bat/Bestman-01.png");
    }
    display(){
        var pos = this.umbrella.position;
        
        imageMode(CENTER);

        if(frameCount >= 200){
            image(this.image2,pos.x,pos.y+80,150,230);
        }
        else{
            image(this.image,pos.x,pos.y+70,300,300);
        }
    }
}
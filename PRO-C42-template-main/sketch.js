const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var engine, world;
var rand;
var thunderCreatedFrame=0;
var drops=[];
var maxDrops = 100;

function preload(){
    thunder1 = loadImage("Imagenes/Thunderbolt/1.png");
    thunder2 = loadImage("Imagenes/Thunderbolt/2.png");
    thunder3 = loadImage("Imagenes/Thunderbolt/3.png");
    thunder4 = loadImage("Imagenes/Thunderbolt/4.png");

    batAnimation = loadAnimation("Imagenes/Bat/bat1.png","Imagenes/Bat/bat2.png",
    "Imagenes/Bat/bat3.png","Imagenes/Bat/bat4.png","Imagenes/Bat/bat5.png",
    "Imagenes/Bat/bat6.png","Imagenes/Bat/bat7.png","Imagenes/Bat/bat8.png",
    "Imagenes/Bat/bat9.png","Imagenes/Bat/bat10.png","Imagenes/Bat/bat11.png",
    "Imagenes/Bat/bat12.png");
}
function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);

    umbrella = new Umbrella(200,500);

    if(frameCount % 150 === 0){
        for(var i=0;i<maxDrops;i++){
            drops.push(new Drops(random(0,400),random(0,400)));
        }
    }
}
function draw(){
    Engine.update(engine);
    background(0); 

    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;

    if(frameCount % 100 === 0){
        bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;       
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    for(var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}
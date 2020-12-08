var d1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

drops=[]
function preload(){
    
}

function setup(){
    createCanvas(500,600);
    engine = Engine.create();
    
    world = engine.world;
    
    d1=new Drop(100,100,20);

    for(var j = 0;j <100;j=j+1){ 
      drops.push(new Drop(random(10,480),random(0,350)))
     }
}

function draw(){
    background(0);
    Engine.update(engine);
    d1.display();
    for (var k=0;k<drops.length;k++){
       drops[k].display(); 
      }
if(drops[k].y>600){
  drops[k].display(); 
}


    }
  


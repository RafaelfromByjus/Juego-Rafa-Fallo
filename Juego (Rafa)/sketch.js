const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;

var hero, villian, queen;
var floor1;
var ladder;
var fireball1;
var gameState = 0;
var score = 0;


function setup(){
    var canvas 
    canvas = createCanvas(500, 700);
    engine = Engine.create();
    world = engine.world;

    floor1 = new Floor(50, 490, 150, PI/8);

    fireball1 = new Fireball(200, 200, 100, PI);

}
function draw(){
    floor1.display();

    fireball1.display();

    Engine.update(engine);
}
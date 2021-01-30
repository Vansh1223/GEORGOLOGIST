
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var sand;
var rubber;
var stone;
var iron;
var hammeramp;

function preload()
{
	
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    
	ground = createSprite(400, 400);
	
    iron = new Iron(810, 350);
    sand = new Sand(810, 220);
    stone = new Stone(760,120,150, PI/7);
    rubber = new Rubber(870,120,150, -PI/7);
    hammeramp = new Hammerer(100,100);

}

function draw(){
    background(0, 0, 0);
    Engine.update(engine);
   
    ground.display();
    iron.display();
    stone.display();
    sand.display();
    hammeramp.display();
    rubber.display();
}
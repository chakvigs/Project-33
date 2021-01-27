const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0;
var gameState = "play";

function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    //Create Bodies
    groundObject = new Ground(240, 800, 480, 50);
    for (var i = 0; i <= 480; i=i+80) {
        divisions.push(new Division(i, 800-divisionHeight/2, 10, divisionHeight));
    }
    
    for (var i = 40; i <= 480; i=i+50) {
        plinkos.push(new Plinko(i, 75));
    }

    for (var i = 15; i <= 480; i=i+50) {
        plinkos.push(new Plinko(i, 175));
    }

    for (var i = 40; i <= 480; i=i+50) {
        plinkos.push(new Plinko(i, 275));
    }

    for (var i = 15; i <= 480; i=i+50) {
        plinkos.push(new Plinko(i, 375));
    }
}


function draw(){
    background(0);
    
    textSize(20);
    fill("white");
    text("Score : "+score,20,30);
    text("500",20,525);
    text("300",100,525);
    text("100",180,525);
    text("100",260,525);
    text("300",340,525);
    text("500",420,525);

    Engine.update(engine);
    groundObject.display();

    for(var k = 0; k < plinkos.length; k++) {
        plinkos[k].display();
    }

    if (particle != null) {
        particle.display();
        if (particle.body.position.y > 650) {
            if (particle.body.position.x > 1 && particle.body.position.x < 80) {
                score+=500;
                particle=null;
                if (turn >= 5) {
                    gameState = "end";
                }
            }

            else if (particle.body.position.x > 81 && particle.body.position.x < 160) {
                score+=300;
                particle=null;
                if (turn >= 5) {
                    gameState = "end";
                }
            }

            else if (particle.body.position.x > 161 && particle.body.position.x < 320) {
                score+=100;
                particle=null;
                if (turn >= 5) {
                    gameState = "end";
                }
            }

            else if (particle.body.position.x > 321 && particle.body.position.x < 400) {
                score+=300;
                particle=null;
                if (turn >= 5) {
                    gameState = "end";
                }
            }

            else if (particle.body.position.x > 401 && particle.body.position.x < 480) {
                score+=500;
                particle=null;
                if (turn >= 5) {
                    gameState = "end";
                }
            }
        }
    }

    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

    if (gameState === "end") {
        textSize(30);
        fill("white");
        text("GAME OVER",150,250);
    }
}

function mousePressed() {
    if (gameState !== "end") {
        turn++;
        particle = new Particle(mouseX, 10, 10, 10);
    }
}
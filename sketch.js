var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
music= loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,580,180,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,180,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "green";


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY=3;
    ball.velocityX=3;

}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    

    if(block2.isTouching(ball)){
        music.play()
        ball.shapeColor = "orange";
        
    }
    if(block1.isTouching(ball)){
        music.play()
        ball.shapeColor = "blue";
        
    }
    if(block3.isTouching(ball)){
        music.play()
        ball.shapeColor = "red";
        
    }
    if(block4.isTouching(ball)){
        music.play()
        ball.shapeColor = "green";
        
    }

    ball.bounceOff(block1)
    ball.bounceOff(block2)
    ball.bounceOff(block3)
    ball.bounceOff(block4)
    
    if(ball.isTouching(block1)){
        ball.bounceOff(block1)
    }
    drawSprites();
}

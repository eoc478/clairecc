let myFont;
let pointArray;

let confettiPieces = [];
let explode = false;

const word = "yay"

function preload(){
    myFont = loadFont("../fonts/kindergarten.ttf")
}

function setup(){
    createCanvas(600, 400).parent("prot2sketch");
    rectMode(CENTER);
    pointArray = myFont.textToPoints(word, 15, 250, 300, { sampleFactor: 0.2 });

    for (let i = 0; i < pointArray.length; i++) {
        confettiPieces.push(new confetti(pointArray[i].x, pointArray[i].y));
    }
}

function draw(){
    background("black");
    for (let i = 0; i < confettiPieces.length; i++) {
        confettiPieces[i].update();
        confettiPieces[i].display();
    }
}

function mousePressed(){
    explode = true;
    for (let i = 0; i < confettiPieces.length; i++) {
        confettiPieces[i].explode(); // explode the confetti
    }
}

class confetti {
    constructor(xPos, yPos){
        this.x = xPos;
        this.y = yPos;

        this.xSpeed = 0; //when confetti explodes
        this.ySpeed = 0;

        this.length = random(5, 15);
        this.width = random(5, 10);

        this.r = random(100, 255);
        this.g = random(100, 255);
        this.b = random(100, 255);
    }
    
    update(){
        if(explode){
            this.x += this.xSpeed;
            this.y += this.ySpeed;
            this.ySpeed += 0.1; //gravity
            //.5 gravity for fun
        }
    }

    display(){
        push();
        noStroke();
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.length, this.width);
        pop();
    }

    explode(){
        this.xSpeed = random(-10, 10); //(left, right)
        this.ySpeed = random(-10, 10); //(up, down)
        //50 for fun
    }
}
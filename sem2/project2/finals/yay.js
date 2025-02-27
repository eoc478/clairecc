let myFont;
let pointArray;

let confettiPieces = [];
let explode = false;

const word = "yay"

function preload(){
    myFont = loadFont("../../../assets/Oliver-Regular.ttf")
}

function setup(){
    createCanvas(600, 400).parent("yay");
    rectMode(CENTER);
    pointArray = myFont.textToPoints(word, 15, 325, 310, {sampleFactor: .2}); //generate points for yay

    for (let i = 0; i < pointArray.length; i++) {
        let yPos = random(-200, -50); // Random starting height above the canvas
        confettiPieces.push(new confetti(pointArray[i].x, yPos, pointArray[i].y));
      }
}

function draw(){
    background(20,20,20 );
    noStroke();

    for(let i = 0; i < confettiPieces.length; i++){
        confettiPieces[i].update();
        confettiPieces[i].display();
    }

}

function resetConfetti(){
    explode = false;
    confettiPieces = []; //had to chatGPT this, I didn't know I had to clear the array
    for (let i = 0; i < pointArray.length; i++) {
        let yPos = random(-200, -50);
        confettiPieces.push(new confetti(pointArray[i].x, yPos, pointArray[i].y));
    } //resets it
}

function keyPressed(){
        resetConfetti();
}

function mousePressed(){
    explode = true;
    for (let i = 0; i < confettiPieces.length; i++) {
        confettiPieces[i].explode(); // explode the confetti
    }
}

class confetti{
    constructor(xPos, yPos, endY){
        this.x = xPos;
        this.y = yPos; //starting from top
        this.endY = endY; //ending position
        this.length = random(5, 15);
        this.width = random(5, 10);
        this.fallingSpeed = random(2, 10);

        this.xSpeed = 0; //when confetti explodes
        this.ySpeed = 0;

        this.r = random(100, 255);
        this.g = random(100, 255);
        this.b = random(100, 255);
    }
    update(){
        if (this.y < this.endY) { //if confetti is above target psition, keep falling
            this.y += this.fallingSpeed;
            if (this.y > this.endY) {
              this.y = this.endY; 
            }
          }
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
        this.xSpeed = random(-50, 50); //(left, right)
        this.ySpeed = random(-50, 50); //(up, down)
        //50 for fun
    }
}



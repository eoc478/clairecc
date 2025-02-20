let myFont;
let pointArray;

let confettiPieces = [];

const word = "yay"

function preload(){
    myFont = loadFont("../fonts/kindergarten.ttf")
}

function setup(){
    createCanvas(600, 400).parent("prot1sketch");
    rectMode(CENTER);
    pointArray = myFont.textToPoints(word, 15, 250, 300, {sampleFactor: .2}); //generate points for yay

    for (let i = 0; i < pointArray.length; i++) {
        let yPos = random(-200, -50); // Random starting height above the canvas
        confettiPieces.push(new confetti(pointArray[i].x, yPos, pointArray[i].y));
      }
}

function draw(){
    background("#322a52");
    noStroke();

    for(let i = 0; i < confettiPieces.length; i++){
        confettiPieces[i].update();
        confettiPieces[i].display();
    }

}

//i am so bad at classes, confetti falls down to form "yay"
class confetti{
    constructor(xPos, yPos, endY){
        this.x = xPos;
        this.y = yPos; //starting from top
        this.endY = endY; //ending position
        this.length = random(5, 15);
        this.width = random(5, 10);
        this.speed = random(2, 10);

        this.r = random(100, 255);
        this.g = random(100, 255);
        this.b = random(100, 255);
    }
    update(){
        if (this.y < this.endY) { //if confetti is above target psition, keep falling
            this.y += this.speed;
            if (this.y > this.endY) {
              this.y = this.endY; 
            }
          }
    }
    display(){
        push();
        noStroke();
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.length, this.width);
        pop();
    }
}

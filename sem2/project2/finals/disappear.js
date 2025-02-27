let myFont;
let pointArray;
let customPoints = [];
let angle = 50;
let speed = 1;

const word = "disappear"

function preload(){
    myFont = loadFont("../fonts/square.ttf")
}



function setup(){
    createCanvas(600, 400).parent("disappear");
    rectMode(CENTER);
    angleMode(DEGREES);
    pointArray = myFont.textToPoints(word, 20, 250, 100, { sampleFactor: 0.2 });

    for (let i = 0; i < pointArray.length; i++) {
        customPoints.push(new customPoint(pointArray[i].x, pointArray[i].y));

    }
}

function draw(){
    background(0,0,0, 20); //tail effect
    for (let i = 0; i < customPoints.length; i++) {
        customPoints[i].update();
        customPoints[i].display();
    }
    angle += speed;
}

class customPoint {
    constructor(xPos, yPos){
        this.x = xPos;
        this.y = yPos;
        this.size = 4;

        this.r = 255;
        this.g = 255;
        this.b = 255;
        this.t = 255;
    }

    update(){
        const distance = dist(this.x, this.y, mouseX, mouseY);
        if(distance < 300){ 
            this.t = map(distance, 0, 255, 255, 5); //i have no idea what the parameters of the map does, i just played with the numbers
        }else{
            this.t--
        }
        this.y = this.y + sin(this.x * 0.05 + angle) * 10;
    }

    display(){ //styling
        fill(this.r, this.g, this.b, this.t);
        noStroke();
        rect(this.x, this.y, this.size);
    }
}
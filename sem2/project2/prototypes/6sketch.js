let myFont;
let pointArray;
let customPoints = [];
let angle = 50;
let speed = 2;

const word = "disappear"

function preload(){
    myFont = loadFont("../fonts/square.ttf")
}



function setup(){
    createCanvas(600, 400).parent("prot6sketch");
    rectMode(CENTER);
    angleMode(DEGREES);
    pointArray = myFont.textToPoints(word, 20, 250, 100, { sampleFactor: 0.2 });

    for (let i = 0; i < pointArray.length; i++) {
        customPoints.push(new customPoint(pointArray[i].x, pointArray[i].y));

    }
}

function draw(){
    background("black");
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

    }

    update(){
        this.y = this.y + sin(this.x * 0.05 + angle) * 50;
    }

    display(){ //styling
        fill(255,255,255);
        noStroke();
        rect(this.x, this.y, this.size);
    }
}
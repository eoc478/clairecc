let myFont;
let pointArray;
let customPoints = [];

const word = "aw"

function preload(){
    myFont = loadFont("../fonts/kindergarten.ttf")
}

function setup(){
    createCanvas(600, 400).parent("prot7sketch");
    rectMode(CENTER);
    pointArray = myFont.textToPoints(word, 125, -50, 300, { sampleFactor: 0.2 });

    for (let i = 0; i < pointArray.length; i++) {
        customPoints.push(new customPoint(pointArray[i].x, pointArray[i].y));

    }
}

function draw(){
    background("#6a707d");
    for (let i = 0; i < customPoints.length; i++) {
        customPoints[i].update();
        customPoints[i].display();
    }
}

class customPoint {
    constructor(xPos, yPos){
        this.x = xPos;
        this.y = yPos;
        this.size = 10;

        this.time = .5;
        this.timer = 0;
    }

    update(){
        this.timer += deltaTime / 1000;
        if (this.timer > this.time) {
            this.y += deltaTime;
          }
        if(this.y > 300){
            this.y = 300 //stop at y = 300
        }
    }
    

    display(){ //styling
        fill(this.r, this.g, this.b);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}
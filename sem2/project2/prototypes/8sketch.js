let myFont;
let pointArray;
let customPoints = [];
let bounce = true;

const word = "aw"

function preload(){
    myFont = loadFont("../fonts/kindergarten.ttf")
}

function setup(){
    createCanvas(600, 400).parent("prot8sketch");
    rectMode(CENTER);
    pointArray = myFont.textToPoints(word, 125, 300, 300, { sampleFactor: 0.2 });

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

        this.time = 2;
        this.timer = 0;

        this.r = random(100, 255);
        this.g = random(100, 255);
        this.b = random(100, 255);
    }

    update(){
        this.timer += deltaTime / 1000;
        if (this.timer > this.time) {
            this.size += deltaTime/5;
          }
    }
    

    display(){ //styling
        fill(this.r, this.g, this.b);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}
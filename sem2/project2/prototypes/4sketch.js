let myFont;
let pointArray;
let customPoints = [];

const word = "disappear"

function preload(){
    myFont = loadFont("../fonts/square.ttf")
}



function setup(){
    createCanvas(600, 400).parent("prot4sketch");
    rectMode(CENTER);
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
        if(distance < 80){ //if mouse dist is in 80 radius, jitter
            this.t = 0;
            //why does it not go back to normal when I stop hovering it??
        }
    }

    display(){ //styling
        fill(this.r, this.g, this.b, this.t);
        noStroke();
        rect(this.x, this.y, this.size);
    }
}
let myFont;
let pointArray;
let customPoints = [];

const word = "yay"

function preload(){
    myFont = loadFont("../fonts/kindergarten.ttf")
}

function setup(){
    createCanvas(600, 400).parent("prot3sketch");
    rectMode(CENTER);
    pointArray = myFont.textToPoints(word, 15, 250, 300, { sampleFactor: 0.2 });

    for (let i = 0; i < pointArray.length; i++) {
        customPoints.push(new customPoint(pointArray[i].x, pointArray[i].y));
        //push the custom letter pointSSSS with a new customPoint class thing
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
        this.size = 10;

        this.r = random(100, 255);
        this.g = random(100, 255);
        this.b = random(100, 255);
    }

    update(){
        const distance = dist(this.x, this.y, mouseX, mouseY);
        if(distance < 80){ //if mouse dist is in 80 radius, jitter
            this.x = this.x + random(-2, 2);
            this.y = this.y + random(-2, 2);
            //why does it not go back to normal when I stop hovering it??
        }
    }

    display(){ //styling
        fill(this.r, this.g, this.b);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}
let myFont;
let pointArray;
let customPoints = [];
let bounce = true;

const word = "aw"

function preload(){
    myFont = loadFont("../fonts/kindergarten.ttf")
}

function setup(){
    createCanvas(600, 400).parent("prot9sketch");
    rectMode(CENTER);
    pointArray = myFont.textToPoints(word, 0, 300, 300, { sampleFactor: 0.54 });

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
        this.size = 5;

        this.color = 255;
    }

    update(){
        const distance = dist(this.x, this.y, mouseX, mouseY);
        if(distance < 10){ 
            this.x = map(distance, 0, 10, 255, 5); 
            this.color = color(random(0,255), random(0, 255), random(0,255));
            // background("black") epilepsy no
        }else{
            this.x++
        }
    }

    display(){ //styling
        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}
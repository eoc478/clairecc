let myFont;
let pointArray;
let customPoints = [];

const word = "aw man"

function preload(){
    myFont = loadFont("../../../assets/Kids-Regular.ttf")
}

function setup(){
    createCanvas(600, 400).parent("awMan");
    rectMode(CENTER);
    pointArray = myFont.textToPoints(word, 80, -100, 150, { sampleFactor: 0.5 });

    for (let i = 0; i < pointArray.length; i++) {
        customPoints.push(new customPoint(pointArray[i].x, pointArray[i].y));

    }
}

function draw(){
    background(220,220,220);
    for (let i = 0; i < customPoints.length; i++) {
        customPoints[i].update();
        customPoints[i].display();
    }
}

function reset(){
    customPoints = [];
    for (let i = 0; i < pointArray.length; i++) {
        customPoints.push(new customPoint(pointArray[i].x, pointArray[i].y));

    }
}

function keyPressed(){
    reset();
}

class customPoint {
    constructor(xPos, yPos){
        this.x = xPos;
        this.y = yPos;
        this.size = 5;

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
        const distance = dist(this.x, this.y, mouseX, mouseY);
        if(distance < 20){ 
            this.y = map(distance, 5, 20, 255, 5); 
            this.size++ //absolutely inconvenience the user
            // this.timer += deltaTime/10000000 slow down?
        }else{
            this.y++ 
        }
    }
    

    display(){ //styling
        fill(this.r, this.g, this.b);
        noStroke();
        circle(this.x, this.y, this.size);
    }
}
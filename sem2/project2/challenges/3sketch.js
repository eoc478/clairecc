let myFont;
let pointArray;

const wow = "wow"

function preload() {
    myFont = loadFont("/assets/comicSans.ttf");

}


function setup(){
    createCanvas(600, 300).parent("chal3sketch");
    noStroke();
    textAlign(CENTER);
        
}

function draw(){
    background("#5c2056");
    
    pointArray = myFont.textToPoints(wow, 25, 225, 300, {sampleFactor: .1});

    for(let i = 0; i < pointArray.length; i++){

        if(pointArray[i].x > 300){
            fill("#faa2d7");
        }else{
            fill(191, 78, 148);
        }
        
        circle(pointArray[i].x, pointArray[i].y, 10);
    }
}
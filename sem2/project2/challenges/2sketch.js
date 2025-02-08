let myFont;
let pointArray;

const wow = "wow"

function preload() {
    myFont = loadFont("/assets/comicSans.ttf");

}


function setup(){
    createCanvas(600, 300).parent("chal2sketch");
    noStroke();
    textAlign(CENTER);
        
}

function draw(){
    background("#5c2056"); //this took so long for me to figure out and turns out all I needed to do was move the background and fill() 
    
    pointArray = myFont.textToPoints(wow, 25, 225, 300, {sampleFactor: .1});

    for(let i = 0; i < pointArray.length; i++){
            let transparency = map(pointArray[i].x, 25, 600, 255, 0);
            fill(191, 78, 148, transparency);

        circle(pointArray[i].x, pointArray[i].y, 10);
    }
}
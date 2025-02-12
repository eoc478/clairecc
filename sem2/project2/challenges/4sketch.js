let myFont;
let pointArray;

const wow = "wow"
let size = 10

function preload() {
    myFont = loadFont("../../../assets/comicSans.ttf");

}


function setup(){
    createCanvas(600, 300).parent("chal4sketch");
    noStroke();
    textAlign(CENTER);
        
}
//mix of 3 and the practice from class
function draw(){
    background("#5c2056");
    
    pointArray = myFont.textToPoints(wow, 25, 225, 300, {sampleFactor: .1});

    for(let i = 0; i < pointArray.length; i++){

        if(pointArray[i].x > 300){
            fill("#faa2d7");
        }else{
            fill(191, 78, 148);
        }
        size = map(pointArray[i].y, 0, 300, 0, 10);
        
        circle(pointArray[i].x, pointArray[i].y, size);
    }
}
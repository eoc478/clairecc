let myFont;
let pointArray;

const wow = "wow"
let size = 10

function preload() {
    myFont = loadFont("/assets/comicSans.ttf");

}


function setup(){
    createCanvas(600, 300).parent("chal5sketch");
    noStroke();
    textAlign(CENTER);
        
}
//mix of 3 and the practice from class
function draw(){
    background("#5c2056");
    
    pointArray = myFont.textToPoints(wow, 25, 225, 300, {sampleFactor: .1});

    for(let i = 0; i < pointArray.length; i++){
        if(i % 2 == 1){ //every odd circle? 
            square(pointArray[i].x, pointArray[i].y, 4);
            fill("#91bbe3") //why is the circle blue??
        }else{
            circle(pointArray[i].x, pointArray[i].y, size);
            fill("#bf4e94");
        }
        
    }
}
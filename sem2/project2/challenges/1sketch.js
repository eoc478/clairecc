let myFont;
let pointArray;

const wow = "wow"

function preload() {
    myFont = loadFont("../../../assets/comicSans.ttf");

}


function setup(){
    createCanvas(600, 300).parent("chal1sketch");
    background("#5c2056");
    noStroke();
    fill("#bf4e94");
    textAlign(CENTER);
    text
        
}

function draw(){
    pointArray = myFont.textToPoints(wow, 25, 225, 300, {sampleFactor: .1});

    console.log(pointArray.length);

    for(let i = 0; i < pointArray.length; i++){
        circle(pointArray[i].x, pointArray[i].y, 10);
    }


}
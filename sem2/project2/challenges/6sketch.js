let myFont;
let pointArray;
let r = 10;
let angle = 0;

const wow = "wow"
let size = 10

function preload() {
    myFont = loadFont("../../../assets/comicSans.ttf");

}


function setup(){
    createCanvas(600, 300).parent("chal6sketch");
    noStroke();
    textAlign(CENTER);
    angleMode(DEGREES);
        
}

function draw(){
    background("#5c2056");
    
    pointArray = myFont.textToPoints(wow, 25, 225, 300, {sampleFactor: .1});

    for(let i = 0; i < pointArray.length; i++){
        fill("#bf4e94");
        ellipse(pointArray[i].x, pointArray[i].y + r*sin(angle + i*10), 10, 10);
        
        
    }
    angle += 2;

    // used this video to help
    //www.youtube.com/watch?v=eZHclqx2eJY&list=PL0beHPVMklwhDvna8wS-oJXuQO3ZCvDFl
    // idk why it's halved like that though
}
let myFont;
let pointArray;

const wow = "wow"

function preload() {
    myFont = loadFont("../../../assets/comicSans.ttf");

}


function setup(){
    createCanvas(600, 300).parent("chal7sketch");
    background("#5c2056");
    noStroke();
    fill("#bf4e94");
    textAlign(CENTER);
        
}

function draw(){ //i have no idea
    let size = 10;
    
    let d = 50;   
    
    pointArray = myFont.textToPoints(wow, 25, 225, 300, {sampleFactor: .1});

    for(let i = 0; i < pointArray.length; i++){
        let distance = dist(pointArray[i].x, pointArray[i].y, mouseX, mouseY); //distance from "wow"
        circle(pointArray[i].x, pointArray[i].y, size);
        if(distance < d){ //gets bigger when closer
            size = 80; 
        } else if(distance > d){
            size = 10; //gets smaller when further
              //how to get it to not do that???
        }
    }

}
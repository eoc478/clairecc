let myFont;
let pointArray;

const ourWord = "wow"

function preload() {
    myFont = loadFont("/assets/comicSans.ttf");

}


function setup(){
    createCanvas(400, 200).parent("chal1sketch");
    background(0);
    background(180, 115, 200);
    stroke("");

    pointArray = myFont.textToPoints(ourWord, 20, 150, 135, {sampleFactor: .15});

    console.log(pointArray.length);

    for(let i = 0; i < pointArray.length; i++){
        let size = 0;

        if(i < 10){
            size= 10;
        }else{
            size = 1;
        }
        circle(pointArray[i].x, pointArray[i].y, 8);
    }

        
}

function draw(){

}
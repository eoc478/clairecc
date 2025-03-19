let capture;
let tracker;
let positions; 
let center;
let initialized = false;
let isWatching = false;

function setup(){
    createCanvas(windowWidth, windowHeight).parent("prototype3");
    noStroke();
    capture = createCapture(VIDEO, {flipped:true}, captureCreated);
    // capture.size(width, height);
    capture.hide(); 

    tracker = new clm.tracker; //create tracker
    tracker.init(); //initialize it

    center = createGraphics(width, height); //this tracker is lowk bad?
}

function captureCreated(){
    capture.size(windowWidth, windowHeight);
    tracker.start(capture.elt);

    initialized = true;
}

function windowResized() { //stops making it buggy, found it on p5 reference
    resizeCanvas(windowWidth, windowHeight);  // Resize canvas
}

function draw(){
    if(!initialized) return; //doesn't draw until it's been initialized

    positions = tracker.getCurrentPosition();

     image(capture, 0, 0, width, height);

     if(!positions){
        isWatching = false;
        return; //null/undefined 
     }

     if(isWatching){ //check to see if you're facing the screen
        fill("blue")
        circle(width/2, height/2, 50);
     }else{
        fill("red")
        circle(width/2, height/2, 50)
     }

    drawRightEye();
    drawLeftEye();
}

function drawRightEye(){

    const xPos = capture.width - positions[32][0]; //32 right 27 left
    const yPos = positions[32][1];

    fill("white");
    circle(xPos, yPos, 10);

    center.circle(xPos, yPos, 10);
    center.noStroke();
 
}

function drawLeftEye(){

    const xPos = capture.width - positions[27][0]; //32 right 27 left
    const yPos = positions[27][1];

    fill("white");
    circle(xPos, yPos, 10);

    center.circle(xPos, yPos, 10);
    center.noStroke();
 
}
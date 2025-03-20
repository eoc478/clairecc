let capture;
let tracker;
let positions; 
let center;

let initialized = false;
let isWatching = false;

let countdown = 0;

function setup(){
    createCanvas(windowWidth, windowHeight).parent("prototype3"); //how to fix stetched resolution?
    noStroke();
    capture = createCapture(VIDEO, {flipped:true}, captureCreated);
    // capture.size(width, height);
    capture.hide(); 

    tracker = new clm.tracker; //create tracker
    tracker.init(); //initialize it

    center = createGraphics(width, height); //this tracker is lowk bad?

    countdown = millis();
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

     console.log(positions);

     if(!positions){
        isWatching = false;
        console.log("pay attention!");
        // return; //null/undefined 
     }else{
        isWatching = true;
        countdown = millis(); //reset timer
        console.log("watching");

        drawRightEye();//comment this out later
        drawLeftEye();
     }

     if(isWatching){ //check to see if you're facing the screen, just testing
        fill("blue");
     }else{
        fill("red");
     }
     if(!isWatching && millis() - countdown >= 10000){ //after 10 seconds
        fill("green"); //screaming
     }
     circle(width/2, height/2, 50);



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
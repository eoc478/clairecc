let capture;
let tracker;
let positions; 

let initialized = false;
let isWatching = false;

let countdown = 0;
let attention = 0;

let scream;

let subway; 
let slime;
let minecraft;

function setup(){
    createCanvas(windowWidth, windowHeight).parent("prototype3"); //how to fix stetched resolution?
    noStroke();
    capture = createCapture(VIDEO, {flipped:true}, captureCreated);
    // capture.size(width, height);
    capture.hide(); 

    tracker = new clm.tracker; //create tracker
    tracker.init(); //initialize it
    
    countdown = millis();

    subway.hide(); //https://p5js.org/examples/imported-media-video/
    slime.hide();
    minecraft.hide();
    subway.volume(0);
    slime.volume(0);
    minecraft.volume(0);
}

function captureCreated(){
    capture.size(width, height);
    tracker.start(capture.elt);

    initialized = true;
}

function preload(){
    scream = loadSound("../assets/scream.mp3");
    subway = createVideo("../assets/subway.mp4");
    slime = createVideo("../assets/slime.mp4");
    minecraft = createVideo("../assets/minecraft.mp4");
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
     }

     if(isWatching){ //check to see if you're facing the screen, just testing
        fill("blue");
        scream.stop();
        if(millis > attention){
            subway.stop();
            subway.hide();
        }
     }else{
        fill("red");
        if(!isWatching && millis() - countdown >= 3000){ //after 3 seconds
            fill("green"); //screaming
            scream.play();
            loadVideos();
         }
     }
  
     circle(width/2, height/2, 50); //deleting later

}

function loadVideos(){
    if(!isWatching && millis() - countdown >= 8000){
        subway.play();
        subway.volume(0);

        image(subway, 100, 100, 270, 480);
    }

    if(!isWatching && millis() - countdown >= 12000){
        minecraft.play();
        minecraft.volume(0);

        image(minecraft, 500, 400, 652, 378);
    }

    if(!isWatching && millis() - countdown >= 15000){
        slime.play();
        slime.volume(0);

        image(slime, 1000, 30, 576, 324);
    }
}

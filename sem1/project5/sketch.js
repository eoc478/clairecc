let rippleSize = 0
let maxRipple = 800
let rippleX = 0
let rippleY = 0
let ripple = false
let cursor = 20
let cursorPulse = 10

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("black");
  noFill()
  strokeWeight(1)
  stroke("#C582F5")
  ellipse(mouseX, mouseY, 20, 20)
  
  for(let x = 0; x < 150; x++){
    for(let y = 0; y < 150; y++){
    strokeWeight(1)
    rect(x * 5, y  * 5, 5, 5)
    ellipse(x * 40, y * 40, 40, 40)
    }
  }
  
  if(ripple == true){
    for(let r = 0; r < 15; r++){
      let w = rippleSize - r * 200
      if(rippleSize > 0){
        strokeWeight(2)
        stroke("#9537DA")
        ellipse(rippleX, rippleY, w, w)
      }
    }
    rippleSize += 2
     if (rippleSize > maxRipple) {
      ripple = false
      rippleSize = 0
  }
  }else{
  strokeWeight(5)
  stroke("#9537DA")
 fill("#9537DA49")
  ellipse(mouseX, mouseY, cursor, cursor)
  cursor += cursorPulse
  }
  if(cursor > 800){
    cursor = 0
  }
}

function mousePressed(){
  ripple = true
  rippleSize = maxRipple/2
  rippleX = mouseX
  rippleY = mouseY
  
}
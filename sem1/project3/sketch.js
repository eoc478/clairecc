let opacity = 180
let minOpacity = 0
let maxOpacity = 180
let minSec = 0
let maxSec = 59


function setup() {
  createCanvas(600, 600);
 angleMode(DEGREES)
//glow = color(236, 250, 192, opacity)
body = color("#c3e68e")
bgColor = ("#bdebff")
}

function draw() {
  background(bgColor); 
  
  if(bgColor == "black"){
  let s = second()
  if (opacity > minOpacity) {
      opacity = map(s, minSec, maxSec, maxOpacity, minOpacity);
    } else {
      opacity = minOpacity;
    }
  glow = color(236, 250, 192, opacity)
  console.log(opacity, second());
  
  /////////////////////////////////glow
  push()
  blendMode(ADD)
  strokeJoin(ROUND)
  strokeWeight(100)
  stroke(glow)
  noFill()
  quad(260,400,240,470,360,470,340,400)
  
  //head
  strokeWeight(60)
  ellipse(width/2, 200, 220, 220)

  
  //arms
  bezier(230, 290, 172, 370, 175, 386, 245, 411)
  bezier(370, 290, 428, 370, 425, 386, 355, 411)
  pop()
  }else{
    console.log(opacity, second())
  }
  
  
  ////////////////////////////MAIN
  //body
  strokeJoin(ROUND)
  strokeWeight(60)
  stroke(body)
  fill("#c3e68e")
  quad(280,150,240,440,360,440,320,150) 
  //head
 stroke("#bde087")
  strokeWeight(5)
  ellipse(width/2, 200, 220, 220) 
  //legs
  rect(300, 350, 60, 140)
  rect(240, 350, 60, 140)
  push()
  translate(330,355)
  rotate(180)
  arc(0,0, 60, 50, 0, 180)
  arc(0,-140, 65, 55, 0, 180, CHORD)
  pop()
  push()
  translate(270,355)
  rotate(180)
  arc(0,0, 60, 50, 0, 180)
  arc(0,-140, 65, 55, 0, 180, CHORD)
  pop() 
  //arms
  ellipse(265,391,65,50)
  ellipse(335,391,65,50)
  bezier(230, 290, 172, 370, 175, 386, 245, 411)
  bezier(370, 290, 428, 370, 425, 386, 355, 411)
  noFill()
  bezier(241, 344, 230, 360, 221, 372, 243, 374)
  bezier(359, 344, 370, 360, 380, 370, 357, 374) 
  //face
  noStroke()
  fill("#677a49")
  ellipse(255,190,20,20)
  ellipse(345,190,20,20)
  push()
  translate(300,225)
  rotate(180)
  arc(0,0,30, 15, 0, 180)
  
}

function mousePressed() { //lights on and off
if(bgColor == "#bdebff"){
bgColor = ("black")
  opacity = 180
  }else{
    bgColor = ("#bdebff")
  }
}
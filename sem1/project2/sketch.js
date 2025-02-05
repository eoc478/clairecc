let petal;
let bgColor;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
petal = color(random (0,255), random (0,255), random (0,255));
bgColor = ("#225873");
}

function draw() {
    background(bgColor)
  //petals
  noStroke()
fill(petal)
  ellipse(width/2, height/2, 50, mouseY)
  fill(petal)
  ellipse(width/2, height/2, mouseX, 50)
  
  push()
  noStroke()
  fill(petal)
  translate(200,200)
  rotate(45)
  ellipse(0, 0, 50, mouseY)
  pop()
  push()
  translate(200,200)
  rotate(135)
  ellipse(0, 0, 50, mouseY)
  pop()
  
  //face
  noStroke()
  fill("#f0e5ad")
  ellipse(width/2, height/2, 100, 100)
  fill("black")
  ellipse(160,200,35,35)
  ellipse(240,200,35,35)
  fill("white")
  ellipse(165,190,15,15)
  ellipse(235,190,15,15)
  push()
  stroke(80)
  stroke("black")
  fill("#5c161f")
  arc(width/2, height/2, 20, 15, 0, 180)
  noStroke()
  fill("#ed80b3")
  ellipse(155, 220,20,10)
  ellipse(245, 220,20,10)

}
function mousePressed(){
petal = color(random (0,255), random (0,255), random (0,255))

}

function keyPressed(){
bgColor = color(random (0,100), random (100,101), random (0,200));
}
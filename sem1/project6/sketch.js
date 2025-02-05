let days = ['Click to Start', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // Monday - Sunday
let day = 0 //for the days
let hours = [0, 2, 5, 10, 5, 2, 6, 11] //hours of sleep
let sheepCount = 0 //for the hours
let sheepX = 0
let sheepY
let sheepSpeed = 7

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("rgb(38,73,95)");
  fill("rgb(48,90,48)")
  rect(0, 380, 600, 340)
  fill('#79ABDDD8')
  textSize(50)
  textAlign(CENTER)
  text(days[day], width/2, 80)
  textSize(20)
  text('Hours: ' + sheepCount, 550, 590)
  
  fence()

 
  if(sheepCount < hours[day]){
    sheepJump()
  }
  
  sheep(sheepX, sheepY)
}

function fence(){
  noStroke()
  fill("rgb(136,98,65)")
  rect(220, 360, 20, 100)
  rect(300, 300, 20, 100)
  stroke("rgb(136,98,65)")
  strokeWeight(8)
  line(229, 391, 313, 328)
  line(229, 426, 313, 362)
}
function sheep(x, y){
  stroke(30)
  strokeWeight(5)
  line(x - 8, y + 8, x - 12, y + 20)
  line(x + 8, y + 8, x + 12, y + 20)
  noStroke()
  fill(205) 
  ellipse(x, y, 50, 30)
  ellipse(x + 2, y - 10, 30, 30)
  ellipse(x - 10, y - 12, 20, 20)
  ellipse(x + 10, y + 12, 20, 10)
  ellipse(x - 12, y + 8, 20, 15)
  fill(30)
  ellipse(x + 25, y - 9, 25, 20)
  stroke(30)
  line(x + 14, y - 11, x + 7, y - 8)
  noStroke()
  fill(220)
  ellipse(x + 17, y - 18, 15, 10)
  ellipse(x + 26, y - 18, 15, 8)
  
}

function sheepJump(){
  sheepX += sheepSpeed
  if(sheepX > 150 && sheepX < 470){
     sheepY = 380 - sin((sheepX - 150) * PI/320) * 80
  }else if(sheepX > 600){
    sheepY = 380
    sheepCount++
  }
  if(sheepX > 600){
    sheepX = 0
    sheepY = 380
  }
}

function mousePressed(){
  sheepCount = 0
  sheepX = 0
  day++
  if(day > 8){
    day = 0
  }
  
}
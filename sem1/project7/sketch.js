let otherCats = []
let Ato
let char
let treat1, treat2, treat3, toy, hiddenAto
let inv = []
let targets = []
let scene = 0

function setup() {
  createCanvas(600, 525);
  textAlign(CENTER)
  //textFont(font)
  Ato = new AtoClass(random(400, 550), 145)
  kitties() //middle
  char = new Character(width/2, height/2)
  treat1 = new Treat(338, 374)
  treat2 = new Treat(141, 367)
  treat3 = new Treat(517, 239)
  toy = new Treat(138, 180)
  hiddenAto = new atoHide(388, 58)
}

function draw() {
  background("rgb(215,235,248)");
  push()
  stroke(150)
  strokeWeight(5)
  stroke("#AFCBE4")
  fill(220)
  rectMode(CENTER)
  rect(width/2, 230, 550, 400)
  pop()
  //25, 30  25, 430  575, 30  575, 430

  switch(scene){
    case 0: //intro
    scene0()
    break
    
    case 1: //beginning
    scene1()
    break
    
    case 2: //congrats
    scene2()
    break
    
    case 3: //middle
    scene3()
    
    break
    
    case 4: //congrats
    scene4()
    break
    
    case 5: //gain ato's trust
    scene5()
    break
    
    case 6:
    scene6()
    break
  }
if(scene === 3 || scene === 5){
  inventory()
  }
}

function scene0(){
  push()
  imageMode(CENTER)
  image(introScreen, width/2, 230, 550, 400)
  pop()
  if(keyIsDown(ENTER)){
    scene = 1
  }
}
  
function scene1(){
  textSize(15)
  fill("#947967")
  text("this is a decision that will affect the rest of my life. find the right cat to adopt!", 0, 450, 600, 450)
  text("click on the correct cat to continue", width/2, 500)
  noStroke()
  for (let i = 0; i < otherCats.length; i++){
    otherCats[i].render()
    otherCats[i].move()
  }
  Ato.render()
  Ato.move()
  
  stroke(150)
  strokeWeight(5)
  line(208.3, 30, 208.3, 430)
  line(391.6, 30, 391.6, 430)
  line(25, 230, 575, 230)
  
  noStroke()
  fill("rgb(226,91,114)")
  circle(mouseX, mouseY, 15)
} //adopt ato

function scene2(){ //congrats, you've adopted ato!
  fill("#947967")
  text("I've adopted Macchiato! this is the first photo I took of her after the adoption", 0, 450, 600, 450)
  text("press ENTER to continue", width/2, 500)
  push()
  imageMode(CENTER)
 image(firstPhoto, width/2, 230, 550, 400)
  pop()
  if(keyIsDown(ENTER)){
    scene++
  }
}

function scene3(){ //find ato
  fill("#947967")
  text("we're home now but it seems that Ato is scared of a new environment. she ran off and hid somewhere.", 25, 450, 550, 450)
  text("press SPACE to interact and find ato.", width/2, 500)
  push()
  textSize(10)
    text("hint: cats love to hide under furniture.", width/2, 515)
  pop()
  layout()
  char.render()
  char.move()
  treat1.render()
  treat2.render()
  treat3.render()
  toy.render()
  hiddenAto.render()
  treat1.checkCollision()
  treat2.checkCollision()
  treat3.checkCollision()
  toy.checkCollision()
  hiddenAto.checkCollision(char.charX, char.charY, char.width, char.height)
  text("find ato", 400, 400)
  pickTreat()
  findAto()
}
  
function scene4(){ //congrats, you found ato! now gain her trust
  fill("#947967")
  text("when it comes to new environments or people, Ato is very skiddish. all she needs is a little TLC.", 25, 450, 550, 450)
  text("press ENTER to continue.", width/2, 500)
  push()
  imageMode(CENTER)
  image(hidingAto, width/2, 230, 550, 400)
  pop()
  if(keyIsDown(ENTER)){
    scene++
  }
}

function scene5(){ //gain ato's trust
  fill("#947967")
 text("Ato was hiding under the shelf!", 25, 470, 550, 450)
  text("click to pet Ato and gain her trust.", width/2, 500)
  AtoState()
  showTarget()
  statusBar()
  
}

function scene6(){
  fill("#947967")
  text("slowly but surely, Ato is getting comfortable. 5 years later and she is spoiled with love every day.", 25, 450, 550, 450)
  text("this was our connection story. thank you for playing.", width/2, 500)
  push()
  imageMode(CENTER)
  image(atoCuddle, width/2, 230, 550, 400)
  pop()
}
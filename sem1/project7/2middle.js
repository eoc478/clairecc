function layout(){
  noStroke()
  // fill("white")
  // rect(28, 148, 70, 120) //couch
  // rect(28, 357, 350, 70) //table
  // rect(66, 33, 150, 40) //cabinet
  // rect(216, 33, 110, 25) //shelf
  // rect(324, 33, 150, 40) //cabinet2
  // rect(506, 211, 65, 65) //weird halfwall thing
  push()
  imageMode(CENTER)
  image(room, width/2, 230, 550, 400)
  pop()
}

class Character {
  constructor(charX, charY) {
    this.charX = charX;
    this.charY = charY;
    this.width = 80;
    this.height = 80;
    this.speed = 4;
    this.claireimg = [Claire, Claire2]
    this.imgCounter = 0
  }

  render() {
    // fill("pink");
    // rect(this.charX, this.charY, this.width, this.height);
 image(this.claireimg[this.imgCounter],this.charX,this.charY,this.width, this.height)
  }

  move() {
    let newX = this.charX;
    let newY = this.charY;

    if (keyIsDown(UP_ARROW)){
       newY -= this.speed
      this.imgCounter++
    }
    if (keyIsDown(DOWN_ARROW)){
      newY += this.speed
      this.imgCounter++
    } 
    if (keyIsDown(LEFT_ARROW)){
       newX -= this.speed
      this.imgCounter++
      
    }
    if (keyIsDown(RIGHT_ARROW)){
       newX += this.speed
      this.imgCounter++
      }
    
   if(this.imgCounter >= this.claireimg.length){
      this.imgCounter = 0  
      
    if (this.boundary(newX, newY) && !this.collide(newX, newY)) {
      this.charX = newX;
      this.charY = newY;
        }
     }
   }

  boundary(x, y) {
    return x >= 0 && x + this.width <= width && y >= 0 && y + this.height <= height;
  }

  collide(x, y) {
    const obstacles = [
      { x: 28, y: 148, w: 70, h: 120 },
      { x: 28, y: 357, w: 350, h: 70 },
      { x: 66, y: 33, w: 150, h: 40 },
      { x: 216, y: 33, w: 110, h: 25 },
      { x: 324, y: 33, w: 150, h: 40 },
      { x: 506, y: 211, w: 65, h: 65 },
    ];

    for (let obstacle of obstacles) {
      if (
        x < obstacle.x + obstacle.w &&
        x + this.width > obstacle.x &&
        y < obstacle.y + obstacle.h &&
        y + this.height > obstacle.y
      ) {
        return true;
      }
    }
    return false;
  }
}

class Treat {
  constructor(x, y){
    this.treatX = x
    this.treatY = y
    this.size = 50
    this.c = color("cyan")
    this.pickedUp = false
    this.inInv = false
  }
  render(){
    if(!this.pickedUp){
      // fill(this.c)
      // circle(this.treatX, this.treatY, this.size)
      image(toyImg, this.treatX, this.treatY, this.size, this.size)
    }
    if(this.pickedUp) {
      let invX = 20 + inv.indexOf(this) * 30;
      let invY = 430;
      let invSize = 50
      // fill(this.c);
      // circle(invX, invY, invSize)
      image(toyImg, invX, invY, invSize, invSize)
    }
  }
checkCollision(charX, charY, charWidth, charHeight) {
  if (
    charX + charWidth > this.treatX - this.size / 2 &&
    charX < this.treatX + this.size / 2 &&
    charY + charHeight > this.treatY - this.size / 2 &&
    charY < this.treatY + this.size / 2) {
    console.log("hit");
    this.pickedUp = true
    this.inInv = true
     inv.push(this)
    this.treatX = 35 + inv.length * 60
    this.treatY = 465
    }
  }
  isClicked(clickX, clickY){
     let d = dist(clickX, clickY, this.treatX, this.treatY)
    return d < this.size / 2
  }
}
  
function pickTreat(){
    if (keyIsDown(32)) { //spacebar
    treat1.checkCollision(char.charX, char.charY, char.width, char.height)
    treat2.checkCollision(char.charX, char.charY, char.width, char.height)
    treat3.checkCollision(char.charX, char.charY, char.width, char.height)
    toy.checkCollision(char.charX, char.charY, char.width, char.height)
  }
}

class atoHide {
  constructor(x, y){
    this.treatX = x
    this.treatY = y
    this.size = 50
    this.c = color("#673AB7")
    this.atoFound = false
    this.change = false
  }
  render(){
    if(!this.atoFound){
    noFill()
    circle(this.treatX, this.treatY, this.size)
    }
  }
checkCollision(charX, charY, charWidth, charHeight) {
  if(
    charX + charWidth > this.treatX - this.size / 2 &&
    charX < this.treatX + this.size / 2 &&
    charY + charHeight > this.treatY - this.size / 2 &&
    charY < this.treatY + this.size / 2) {
    console.log("ato found");
    this.change = true
    let d = dist(this.charX, this.charY, this.treatX, this.treatY)
    }
  }
}


function findAto(){
    if(keyIsDown(32) && hiddenAto.change === true){
    console.log("changing")
    scene++
    }
}

function inventory(){
  for(let i = 0; i < inv.length; i++){
   inv[i].render()
  }
}
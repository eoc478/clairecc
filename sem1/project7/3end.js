class Target{
  constructor(x, y){
    this.targetX = x
    this.targetY = y
    this.size = 20
    this.color = color("green")
    this.visible = true
    this.timer = millis()
    this.safe = true
    this.lifetime = 2000
  }
  render(){
    if(this.visible){
    fill(this.color)
    circle(this.targetX, this.targetY, this.size)
    }
  }
  isClicked(clickX, clickY){
     let d = dist(clickX, clickY, this.targetX, this.targetY)
    return d < this.size / 2
  }
  update(){
     if (millis() - this.timer > this.lifetime) {
      this.visible = false
    }
    this.unsafeArea()
  }
  unsafeArea(){
    let unsafeX1 = 355
    let unsafeX2 = 500
    let unsafeY1 = 116
    let unsafeY2 = 356
    if (this.targetX > unsafeX1 && this.targetX < unsafeX2 && this.targetY > unsafeY1 && this.targetY < unsafeY2) {
      this.color = color("red");
      this.safe = false
    } else {
      this.color = color("green")
      this.safe = true
      }
    }
  }

function showTarget(){
  for (let i = targets.length - 1; i >= 0; i--) {
    targets[i].render()
    targets[i].update()
    if (!targets[i].visible) {
      targets.splice(i, 1)
    }
}
  

  if (frameCount % 60 === 0) {
    let rectX = width / 2
    let rectY = 250

    let x = random(rectX - 480 / 2, rectX + 500 / 2);
    let y = random(rectY - 240 / 2, rectY + 240 / 2);
    targets.push(new Target(x, y));
  }
  console.log(mouseX, mouseY)
  }

function mousePressed() {
  
  if(mouseX > Ato.x - Ato.width / 2 && mouseX < Ato.x + Ato.width / 2 &&
      mouseY > Ato.y - Ato.height / 2 && mouseY < Ato.y + Ato.height / 2) {
    scene++ 
  }
  
  for (let i = targets.length - 1; i >= 0; i--) {
    if (targets[i].isClicked(mouseX, mouseY)) {
      if (targets[i].safe === true) {
        status = min(100, status + 20)
      }else if (targets[i].safe === false) {
        status = max(0, status - 20)
      }
      targets.splice(i, 1)
      }
    }
  for (let i = inv.length - 1; i >= 0; i--) {
    if (inv[i].isClicked(mouseX, mouseY)) {
      status = min(100, status + 10)
      inv.splice(i, 1)
    }
  }
}


let status = 0
function statusBar(){
   fill(0);
  rect(375, 443, 200, 20);
  fill("rgb(125,213,125)");
  rect(375, 443, map(status, 0, 100, 0, 200), 20);
 
if(status === 100){
  scene++
}
}

function AtoState(){
  if(status < 100){
    push()
    imageMode(CENTER)
    image(scaredAto, width/2, 230, 550, 400)
    pop()
  }
}
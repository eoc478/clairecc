function setup() {
    createCanvas(400, 400);
    background("#cac0d1");
      angleMode(DEGREES)
  
    // oval shape
   strokeWeight(5);
    stroke("gray");
     fill(173, 216, 230);
    ellipse(width / 2, height / 2, 200, 300);
    push()
    noStroke()
    blendMode(SCREEN)
    fill("#3154b5")
    ellipse(width / 2, height / 2, 180, 280);
    fill("#3154b5")
    ellipse(width / 2, height / 2, 150, 250);
    pop()
    
    //woman
    push()
    noStroke();
    fill("#f7fcff")
    ellipse(210,170,90,100)
    pop()
    
    //chin
    push()
    strokeWeight(10)
    stroke("#f7fcff")
    strokeJoin(ROUND);
    fill("#f7fcff")
    arc(200, 170, 100, 180, 0, 67);
    translate(width / 2, height / 2)
    rotate(90)
    arc(-9, -29, 100, 100, 0, 59);
    pop()
    
    //neck
    noStroke()
    fill('#f7fcff')
    rect(177,200,40,80)
    arc(200,256,150,130,0,170)
    push()
    noFill()
    stroke("#f7fcff")
    strokeWeight(8)
    arc(150, 230, 60, 90, -60, 60)
    pop()
    
    //hair
    push()
    translate(width/2,height/2)
    rotate(140)
    ellipse(-5,30,90,70)
    pop()
    push()
    translate(width/2, height/2)
    rotate(180)
    ellipse(-25,50,90,60)
    pop()
    push()
    translate(width/2, height/2)
    rotate(160)
    ellipse(5,55,60,50)
    pop()
   ellipse(200,125,60,40)
    
    //dont forget blendmode
  push()
    noFill()
    stroke("gray")
    translate(width/2, height/2)
    arc(90, 0, 50, 30, -50, 50)
    rotate(180)
    arc(90, 0, 50, 30, -50, 50)
    rotate(90)
    arc(140, 0, 50, 30, -50, 50)
    rotate(2700)
    arc(140, 0, 50, 30, -50, 50)
  pop()
    noFill()
    stroke("gray")
    bezier(100,180, 80, 100, 150, 40, 185, 50)
    bezier(300,220, 320, 300, 250, 360, 215, 350)
    bezier(300,185, 305, 100, 275, 40, 205, 50)
    bezier(100,220, 80, 300, 150, 360, 185, 350)
  }
function kitties(){
    let y = 130
  //cage1 
  for(let i = 0; i < 2; i++){
   let x = random(40, 150)
   let color = random(30,200)
   otherCats.push(new cage1(x, y, random(cats)))
  }
//cage2
  for(let i = 0; i < 1; i++){
   let x = random(220, 360)
   let color = random(30,200)

   otherCats.push(new cage2(x, y, random(cats)))
  }
//cage3
  for(let i = 0; i < 1; i++){
   let x = random(400, 550)
   let color = random(30,200)
  otherCats.push(new cage3(x, y, random(cats)))
  }

//cage4
  for(let i = 0; i < 3; i++){
   let x = random(40, 150)
   let y = 330
   let color = random(30,200)

   otherCats.push(new cage4(x, y, random(cats)))
  }
//cage5
 for(let i = 0; i < 1; i++){
   let x = random(220, 360)
   let y = 330
   let color = random(30,200)
  
   otherCats.push(new cage5(x, y, random(cats)))
  }
//cage6
  for(let i = 0; i < 1; i++){
   let x = random(400, 550)
   let y = 330
   let color = random(30,200)
   
   otherCats.push(new cage6(x, y, random(cats)))
  }
}


class cage1 {
  constructor(x, y, color, img){
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.color = color
    this.speed = random(0.5, 5)
    this.napping = false
    this.napFrames = 0
    this.randomCat = random(cats)
  }
  
  render(){
    // fill(this.color)
    // rect(this.x, this.y, this.width, this.height)
    image(this.randomCat, this.x, this.y, this.width, this.height)
  }
  
  move(){
    if(this.napping){
      this.napFrames--
      if(this.napFrames <= 0){
        this.napping = false
        this.speed = (random(0.5, 3))
      }
      return
    }
    
    if (random(1) < 0.01){
      this.napping = true
      this.napFrames = int(random(30,150))
      return
    }
    
    this.x += this.speed
    
    if(this.x < 20 || this.x > 144){
      this.speed *= -1
    }
  }
}   
class cage2 { 
  constructor(x, y, img){
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.color = color
    this.speed = random(0.5, 3)
    this.napping = false
    this.napFrames = 0
    this.randomCat = random(cats)
  }
  
  render(){
     // fill(this.color)
    // rect(this.x, this.y, this.width, this.height)
    image(this.randomCat, this.x, this.y, this.width, this.height)
  }
  
  move(){
    if(this.napping){
      this.napFrames--
      if(this.napFrames <= 0){
        this.napping = false
        this.speed = (random(0.5, 3))
      }
      return
    }
    
    if (random(1) < 0.02){
      this.napping = true
      this.napFrames = int(random(30,150))
      return
    }
    
    this.x += this.speed
    
    if(this.x < 170 || this.x > 310){
      this.speed *= -1
    }
  }
}
class cage3 { //Ato 
  constructor(x, y, color, img){
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.color = color
    this.speed = random(0.5, 3)
    this.napping = false
    this.napFrames = 0
    this.randomCat = random(cats)
  }
  
  render(){
     // fill(this.color)
    // rect(this.x, this.y, this.width, this.height)
    image(this.randomCat, this.x, this.y, this.width, this.height)
  }
  
  move(){
    if(this.napping){
      this.napFrames--
      if(this.napFrames <= 0){
        this.napping = false
        this.speed = (random(0.5, 3))
      }
      return
    }
    
    if (random(1) < 0.02){
      this.napping = true
      this.napFrames = int(random(30,150))
      return
    }
    
    this.x += this.speed
    
    if(this.x < 350 || this.x > 500){
      this.speed *= -1
    }
  }
}

class AtoClass{
  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 90
    this.height = 90
    this.speed = random(0.5, 3)
    this.napping = false
    this.napFrames = 0
  }
  render(){
      image(AtoSitting, this.x, this.y, 90, 90)
  }
  move(){
        if(this.napping){
      this.napFrames--
      if(this.napFrames <= 0){
        this.napping = false
        this.speed = (random(0.5, 3))
      }
      return
    }
    
    if (random(1) < 0.02){
      this.napping = true
      this.napFrames = int(random(30,150))
      return
    }
    
    this.x += this.speed
    
    if(this.x < 350 || this.x > 500){
      this.speed *= -1
    }
  }
}
class cage4 {
  constructor(x, y, color, img){
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.color = color
    this.speed = random(0.5, 5)
    this.napping = false
    this.napFrames = 0
   this.randomCat = random(cats)
  }
  
  render(){
    // fill(this.color)
    // rect(this.x, this.y, this.width, this.height)
    image(this.randomCat, this.x, this.y, this.width, this.height)
  }
  
  move(){
    if(this.napping){
      this.napFrames--
      if(this.napFrames <= 0){
        this.napping = false
        this.speed = (random(0.7, 5))
      }
      return
    }
    
    if (random(1) < 0.01){
      this.napping = true
      this.napFrames = int(random(30,150))
      return
    }
    
    this.x += this.speed
    
    if(this.x < 20 || this.x > 104){
      this.speed *= -1
    }
  }
}   
class cage5 { 
  constructor(x, y, color, img){
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.color = color
    this.speed = random(0.3, 0.9)
    this.napping = false
    this.napFrames = 0
    this.Ato = Ato
    this.randomCat = random(cats)
  }
  
  render(){
     // fill(this.color)
    // rect(this.x, this.y, this.width, this.height)
    image(this.randomCat, this.x, this.y, this.width, this.height)
  }
  
  move(){
    if(this.napping){
      this.napFrames--
      if(this.napFrames <= 0){
        this.napping = false
        this.speed = (random(0.3, 0.9))
      }
      return
    }
    
    if (random(1) < 0.03){
      this.napping = true
      this.napFrames = int(random(50,150))
      return
    }
    
    this.x += this.speed
    
    if(this.x < 170 || this.x > 310){
      this.speed *= -1
    }
  }
}
class cage6 { //Ato 
  constructor(x, y, color, img){
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.color = color
    this.speed = random(0.5, 3)
    this.napping = false
    this.napFrames = 0
    this.Ato = Ato
   this.randomCat = random(cats)
  }
  
  render(){
     // fill(this.color)
    // rect(this.x, this.y, this.width, this.height)
    image(this.randomCat, this.x, this.y, this.width, this.height)
  }
  
  move(){
    if(this.napping){
      this.napFrames--
      if(this.napFrames <= 0){
        this.napping = false
        this.speed = (random(0.5, 3))
      }
      return
    }
    
    if (random(1) < 0.02){
      this.napping = true
      this.napFrames = int(random(30,150))
      return
    }
    
    this.x += this.speed
    
    if(this.x < 350 || this.x > 500){
      this.speed *= -1
    }
  }
}
let introScreen
let AtoSitting
let catImages = []
let toyImg
let treatImg
let room
let Claire, Claire2
let scaredAto
let congrats
let firstPhoto
let hidingAto
let kittyAto
let atoCuddle
let font

function preload(){
  introScreen = loadImage("images/Untitled3_20241115050650.png")
  AtoSitting = loadImage("cats/Atositting.png")
  
 let cat1 = loadImage("cats/Untitled4_20241115055426.png")
 let cat2 = loadImage("cats/Untitled4_20241115055545.png")
 let cat3 = loadImage("cats/Untitled4_20241115055645.png")
 let cat4 = loadImage("cats/Untitled4_20241115055649.png")
 let cat5 = loadImage("cats/Untitled4_20241115055848.png")
 
 cats = [cat1, cat2, cat3, cat4, cat5]
  
  toyImg = loadImage('images/toy.png')
  treatImg = loadImage('images/treat.png')
  room = loadImage('images/roomBackground.png')
  
  Claire = loadImage("character/Claire.png")
  Claire2 = loadImage('character/Claire2.png')
  
  scaredAto = loadImage('images/scared.png')
  
  congrats = loadImage('images/congrats.png')
  firstPhoto = loadImage('images/firstphoto.png')
  hidingAto = loadImage('images/scaredAtophoto.png')
  kittyAto = loadImage('images/atoatoato.png')
  atoCuddle = loadImage('images/atocuddle.png')
  
  font = loadFont('images/DK Crayonista.ttf')
}
document.addEventListener("DOMContentLoaded", onDOMLoaded);

function onDOMLoaded(){
  const button = document.querySelector(".next"); //querySelector calls anything, getElementById only gets id
   
  radio();
  updatePity();
}

//dictionary points
const sleepPoints = {
    "0": 0,
    "10": 10,
    "20": 20,
    "30": 30,
    "50": 50,
    "70": 70
  };
  
const allnightPoints = {
    "5": 5,  
    "20": 20, 
    "30": 30  
  };

const caffeinePoints = {
    "5": 5,
    "20": 20,
    "50": 50,
    "100": 100
}
  

//RADIO
function radio(){
    let radio = document.querySelectorAll('input[type="radio"]');
    radio.forEach(radio =>{
      radio.addEventListener("change", updatePity);
      //https://www.youtube.com/watch?v=J254pngGt6E for the forEach thing (forEach applies the code for each option in radio) 
      //i actually think i hate js
    });
  }

  //PITY POINTS
function updatePity(){
    let pity = document.getElementById("pityPoints");
    let storedPity = Number(localStorage.getItem("pityPoints"));
    let pity3 = 0;

    const sleepValue = document.querySelector('input[name="sleep"]:checked'); //if this option is checked
    const allnightValue = document.querySelector('input[name="allnight"]:checked');
    const caffeineValue = document.querySelector('input[name="caffeine"]:checked');
  
    //sleep
    if(sleepValue){
        const key = sleepValue.value;
        const points = sleepPoints[key];
        if(points !== undefined){
            pity3 += points
        }
    }

    //allnight
    if(allnightValue){
      const key = allnightValue.value;
      const points = allnightPoints[key];
      if (points !== undefined) { //if points is NOT the exact value 
        pity3 += points;
      }
    }
  
    //caffeine
    if (caffeineValue) {
      const key = caffeineValue.value;
      const points = caffeinePoints[key];
      if (points !== undefined) {
        pity3 += points;
      }
    }

    let totalPity = pity3 + storedPity
    localStorage.setItem("pityPoints", totalPity);
    pity.textContent = totalPity;
  }
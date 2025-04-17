
document.addEventListener("DOMContentLoaded", onDOMLoaded);

function onDOMLoaded(){
  const button = document.querySelector(".next"); //querySelector calls anything, getElementById only gets id

  slider();
  radio();
  updatePity();
}

//dictionary points
const absentPoints = {
  "0": 0,
  "5": 5
}

const screenPoints = {
  "5": 5,  
  "10": 10, 
  "15": 15, 
  "20": 20  
};


//SLIDER
function slider(){
  let slider = document.getElementById("myRange");
  let output = document.getElementById("value");
  // let cat = document.getElementById("cat");
  // let cats = ["catStressed , catMeh, catHappy"];
  output.textContent = slider.value; // Display the default slider value
  
  //https://www.youtube.com/watch?v=c3Dw7rdG4N4&list=PLNCevxogE3fhJDWT6urvq5lN5mdC0NiTP&index=3 for cats changing (didnt add any yet)
  
  //update value
  slider.oninput = function() {
    output.textContent = this.value;
    // cat.innerHTML = [cats, slider.value];
    updatePity();
  }

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
  let pity = 0;
  const sliderValue = document.getElementById("myRange").value; //check for value="" in html
  const absentValue = document.querySelector('input[name="absent"]:checked'); //if this option is checked
  const screenValue = document.querySelector('input[name="screen"]:checked');

  //slider
  if (sliderValue >= 31 && sliderValue <= 50) {
    pity += 10;
  } else if (sliderValue >= 51 && sliderValue <= 70) {
    pity += 15;
  } else if (sliderValue >= 71) {
    pity += 30;
  }

  //absent
  if(absentValue){
    const key = absentValue.value;
    const points = absentPoints[key];
    if (points !== undefined) { //if points is NOT the exact value 
      pity += points;
    }
  }

  //screen
  if (screenValue) {
    const key = screenValue.value;
    const points = screenPoints[key];
    if (points !== undefined) {
      pity += points;
    }
  }

  localStorage.setItem("pityPoints", pity);
  const display = document.getElementById("pityPoints");
  if (display) {
    display.textContent = pity;
  }
}


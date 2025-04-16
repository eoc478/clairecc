
//SLIDER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let slider = document.getElementById("myRange");
let output = document.getElementById("value");
let cat = document.getElementById("cat");
let cats = ["catStressed, catMeh, catHappy"];
output.innerHTML = slider.value; // Display the default slider value

//https://www.youtube.com/watch?v=c3Dw7rdG4N4&list=PLNCevxogE3fhJDWT6urvq5lN5mdC0NiTP&index=3 for cats changing (didnt add any yet)

//update
slider.oninput = function() {
  output.innerHTML = this.value;
  cat.innerHTML = [cats, slider.value];
}



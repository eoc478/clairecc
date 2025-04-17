
let count = 0;
let count2 = 0;

document.addEventListener("DOMContentLoaded", onDOMLoaded);

function onDOMLoaded(){
  const button = document.querySelector(".next"); //querySelector calls anything, getElementById only gets id
  
  counters();
  updatePity();
}



//COUNTER
function counters(){
    const decreaseBtn = document.getElementById("decreaseBtn"); //const is better for constant variable (duh), let is for variables that change
    const increaseBtn = document.getElementById("increaseBtn");
    const counter = document.getElementById("count1");
    
    decreaseBtn.addEventListener("click", decrease);
    increaseBtn.addEventListener("click", increase);
    
    const decreaseBtn2 = document.getElementById("decreaseBtn2");
    const increaseBtn2 = document.getElementById("increaseBtn2");
    const counter2 = document.getElementById("count2");
    
    decreaseBtn2.addEventListener("click", decrease2);
    increaseBtn2.addEventListener("click", increase2);
    
    
    function decrease(){
        if(count > 0){
            count--;
            counter.textContent = count;
            updatePity();
        }
    
    }
    
    function increase(){
        count++;
        counter.textContent = count;
        updatePity();
    }
    
    function decrease2(){ //if it aint broke...
        if(count2 > 0){
            count2--;
            counter2.textContent = count2;
            updatePity();
        }
    }
    
    function increase2(){ //...don't fix it
        count2++;
        counter2.textContent = count2;
        updatePity();
    }
    
}

function updatePity(){
    let pity = document.getElementById("pityPoints");
    let storedPity = Number(localStorage.getItem("pityPoints")); //had to get chatGPT to get this idk
   
    let currentPity = 0;
    

    if(count >= 50){ //how many assignments due?
        currentPity = 50;
    }else if(count >= 20){
        currentPity = 20;
    }else if(count >= 10){
        currentPity = 15;
    }else if(count >= 5){
        currentPity = 0;
        console.log("added 0")
    }else{
        currentPity += 0;
        console.log("added 0")
    }

    if(count2 >= 50){ //how many assignments completed?
        currentPity = 10;
    }else if(count2 >= 20){
        currentPity = 15;
    }else if(count >= 10){
        currentPity = 20;
    }else{
        currentPity += 0;
    }
    
    let totalPity = storedPity + currentPity;
    pity.textContent = totalPity;
    localStorage.setItem("pityPoints", totalPity);
}



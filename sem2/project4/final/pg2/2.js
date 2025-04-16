
//COUNTER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const decreaseBtn = document.getElementById("decreaseBtn"); //const is better for constant variable (duh), let is for variables that change
const increaseBtn = document.getElementById("increaseBtn");
const counter = document.getElementById("count1");
let count = 0;

decreaseBtn.addEventListener("click", decrease);
increaseBtn.addEventListener("click", increase);

const decreaseBtn2 = document.getElementById("decreaseBtn2");
const increaseBtn2 = document.getElementById("increaseBtn2");
const counter2 = document.getElementById("count2");
let count2 = 0;

decreaseBtn2.addEventListener("click", decrease2);
increaseBtn2.addEventListener("click", increase2);


function decrease(){
    if(count > 0){
        count--;
        counter.textContent = count;
    }

}

function increase(){
    count++;
    counter.textContent = count;
}

function decrease2(){ //if it aint broke...
    if(count2 > 0){
        count2--;
        counter2.textContent = count2;
    }
}

function increase2(){ //...don't fix it
    count2++;
    counter2.textContent = count2;
}
// i figured out a way that wasn't so complicated as my first plan! 
// i decided to ID a certain alcohol and find cocktails using that kind of alcohol, then it would randomize the cocktails with that type of alcohol


// slider and button
const slider = document.getElementById("misery");
const output = document.getElementById("miseryLabel");

const miseryLevel = {
    "1": "unhappy",
    "2": "glum",
    "3": "miserable"
}

output.textContent = miseryLevel[slider.value];

slider.oninput = function() {
    output.textContent = miseryLevel[this.value];
  }

const button = document.getElementById("getDrink");
button.addEventListener("click", onClick);


//api stuff
const randomCocktail = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
let cocktailData;
let ingredient;

  
function onClick(){
    if(miseryLevel.value === "1"){
        ingredient = "Beer";
    } 
    if(miseryLevel.value === "2"){
        ingredient = "Gin";
    } 
    if(miseryLevel.value === "3"){
        ingredient = "Vodka";
    }


    const randomIngredient = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`; // ` IS DIFFERENT FROM '
    fetch(randomIngredient)
    .then(response => response.json())
    .then(handleIngredients) //call handledata
    .catch(error => console.log(error))

    fetch(randomCocktail)
    .then(response => response.json())
    .then(handleCocktail) //spent like 30 min trying to fix this whole code but its because i added ()
    .catch(error => console.log(error))
}

function handleIngredients(data){ //check cocktails with this ingredient
    let drinks = data.drinks;
    let random = drinks[Math.floor(Math.random() * drinks.length)];
    let drinkID = random.idDrink;
    console.log("drink ID:", drinkID);
}

function handleCocktail(data){ //get random cocktail
    let drink = data.drinks[0]; //get the first drink 

    const drinkResult = document.getElementById("result");
    drinkResult.innerHTML = `<img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="300"><p>${drink.strDrink}</p>`; //had to ask chat for this one 
}

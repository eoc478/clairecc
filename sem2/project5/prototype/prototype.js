
//slider and button
const slider = document.getElementById("misery");
const output = document.getElementById("miseryLabel");

const miseryLevel = {
    "1": "unhappy",
    "2": "glum",
    "3": "miserable"
}

const alcStrength = {
    Beer: "weak",
    Champagne: "weak",
    Cider: "weak",
    Wine: "medium",
    Liqueur: "medium",
    Rum: "medium",
    Bourbon: "medium",
    Vodka: "strong",
    Whiskey: "strong",
    Gin: "strong",

}

output.textContent = miseryLevel[slider.value];

slider.oninput = function() {
    output.textContent = miseryLevel[this.value];
  }

const button = document.getElementById("getDrink");
button.addEventListener("click", onClick);


  //api stuff
  const randomCocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  let cocktailData;
  
function onClick(){
    cocktail(parseInt(slider.value));
}

function cocktail(){
    fetch(randomCocktail)
    .then(response => response.json())
    .then(data => {
        const drink = data.drinks[0];

        const ingredients = []; //checks all 15 ingredients given in api
        for(let i = 1; i < 15; i++){
            const ingredient = drink['strIngredient' + i]; //pulls strIngredient 
            if (ingredient) ingredients.push(ingredient);
        }

        function checkIngrTypes(){
            if (
                (miseryLevel == 1 && alcStrength === 'weak') || //or
                (miseryLevel == 2 && alcStrength === 'medium') || //or
                (miseryLevel == 3 && alcStrength === 'strong')
              )
              displayDrink();
              else{

              }
        }
    })
    .catch(error => console.log(error))
}



// function handleData(data){
//     console.log(data);
// }


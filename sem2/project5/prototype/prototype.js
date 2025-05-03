
//slider and button
const slider = document.getElementById("misery");
const output = document.getElementById("miseryLabel");

const miseryLevel = {
    "1": "unhappy",
    "2": "glum",
    "3": "miserable"
};

output.textContent = miseryLevel[slider.value];

slider.oninput = function() {
    output.textContent = miseryLevel[this.value];
  }

const button = document.getElementById("getDrink");
button.addEventListener("click", onClick);

function onClick(){
    cocktail(parseInt(slider.value));
}
  //api stuff

  const randomCocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  let cocktailData;

  cocktail(miseryLevel){
    fetch(randomCocktail)
    .then(response => response.json())
    .then(data => {
        const drink = data.drinks[0];
  
        const ingredients = []; //checks all 15 ingredients given in api
        for(let i = 1; i < 15; i++){
            const ingredient = drink['strIngredient' + i]; //pulls strIngredient 
            if (ingredient) ingredients.push(ingredient);
        };
  
        checkIngrTypes(){
            if (
                (miseryLevel == 1 && alcoholStrength === 'weak') || //or
                (miseryLevel == 2 && alcoholStrength === 'medium') || //or
                (miseryLevel == 3 && alcoholStrength === 'strong')
              )
              displayDrink();
              else{
                console.log("hello")
              }
        }
    })
    .catch(error => console.log(error))
  }
 


// function handleData(data){
//     console.log(data);
// }


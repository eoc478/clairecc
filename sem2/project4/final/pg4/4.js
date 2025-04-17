document.addEventListener("DOMContentLoaded", onDOMLoaded);

function onDOMLoaded() {
    finalPityPoints();
}

// Function to display pity points and response
function finalPityPoints() {
    let pity = document.getElementById("pityPoints");
    let totalPity = Number(localStorage.getItem("pityPoints"));
    const resultContainer = document.querySelector(".result");

    // Display a different message depending on the total pity points
    let result = "";

    if (totalPity >= 100) {
        result = "finals season - you'll live to see next sem!";
    }
    if (totalPity >= 200) {
        result = "you might need to sacrifice some things...";
    }
    if (totalPity >= 300) {
        result = "lock in.";
    }
    if (totalPity >= 500) {
        result = "you're cooked.";
    }else{
        result = "good luck ig."
    }

    const newParagraph = document.createElement("p");
    newParagraph.textContent = result;
    resultContainer.appendChild(newParagraph);
    pity.textContent = totalPity;

}

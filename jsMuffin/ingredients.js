const RECIPES = {
    recipe1: {
        ingredients: [{
            label: "bat",
            quantity: 4
        }, {
            label: "bi",
            quantity: 1
        }, {
            label: "hiru",
            quantity: 20
        }]
    }
}

function showRecipe(recipeId) {
    const recipe = RECIPES[recipeId];

    const title = document.getElementById("recipeTitleLabel");
    title.innerText = "asdfasdf";

    const stuck = document.getElementById("stuckInput");
    console.log(stuck);

    const list = document.getElementById("ingredients-list");
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.innerText = ingredient.label + ": " + ingredient.quantity*2;
        list.appendChild(li);
    });
}
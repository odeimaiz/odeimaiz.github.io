const RECIPES = {
    recipe1: {
        title: "Muffin 1",
        ingredients: [{
            label: "bat",
            quantity: 1
        }, {
            label: "bi",
            quantity: 2
        }, {
            label: "hiru",
            quantity: 3
        }]
    },
    recipe2: {
        title: "Muffin 2",
        ingredients: [{
            label: "lau",
            quantity: 4
        }, {
            label: "bost",
            quantity: 5
        }, {
            label: "sei",
            quantity: 6
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
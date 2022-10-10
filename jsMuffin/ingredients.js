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
    },
    recipe3: {
        title: "Muffin 3",
        ingredients: [{
            label: "sei",
            quantity: 6
        }, {
            label: "zazpi",
            quantity: 7
        }]
    },
    recipe4: {
        title: "Muffin 4",
        ingredients: [{
            label: "zortzi",
            quantity: 8
        }, {
            label: "bederatzi",
            quantity: 9
        }]
    }
}

function showRecipe(recipeId) {
    const recipe = RECIPES[recipeId];

    const title = document.getElementById("recipeTitleLabel");
    title.innerText = recipe.title;

    const stuckInput = document.getElementById("stuckInput");
    let stuck = parseInt(stuckInput.placeholder);
    if (stuckInput.value) {
        stuck = parseInt(stuckInput.value);       
    }

    reloadIngredients(recipeId);
}

function reloadIngredients(recipeId) {
    const recipe = RECIPES[recipeId];
    const list = document.getElementById("ingredients-list");
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.innerText = ingredient.label + ": " + ingredient.quantity*stuck;
        list.appendChild(li);
    });
}
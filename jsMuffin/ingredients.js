const RECIPES = {
    recipe1: {
        title: "Emmentaler Aprikose Thymian",
        ingredients: [{
            label: "Milch",
            weight: 0.2,
            extra: "kg"
        }, {
            label: "Vollei",
            weight: 0.12,
            extra: "kg"
        },{
            label: "Mehl",
            weight: 0.25,
            extra: "kg"
        },{
            label: "Backpulver",
            weight: 0.01,
            extra: "kg"
        },{
            label: "Oel",
            weight: 0.03,
            extra: "kg"
        },{
            label: "Emmentaler gewürfelt",
            weight: 0.2,
            extra: "kg"
        },{
            label: "Getr. Aprikose gewürfelt",
            weight: 0.15,
            extra: "kg"
        },{
            label: "Thymian gehackt",
            weight: 0.005,
            extra: "kg"
        },]
    },
    recipe2: {
        title: "Muffin 2",
        ingredients: [{
            label: "lau",
            weight: 4
        }, {
            label: "bost",
            weight: 5
        }, {
            label: "sei",
            weight: 6
        }]
    },
    recipe3: {
        title: "Muffin 3",
        ingredients: [{
            label: "sei",
            weight: 6
        }, {
            label: "zazpi",
            weight: 7
        }]
    },
    recipe4: {
        title: "Muffin 4",
        ingredients: [{
            label: "zortzi",
            weight: 8
        }, {
            label: "bederatzi",
            weight: 9
        }]
    }
}

let currentRecipe = 'recipe1';

function showRecipe(recipeId) {
    currentRecipe = recipeId;
    const recipe = RECIPES[recipeId];

    const title = document.getElementById("recipeTitleLabel");
    title.innerText = recipe.title;
    
    const selectElement = document.getElementById("stuckInput");
    selectElement.addEventListener('change', () => reloadIngredients());

    reloadIngredients(recipeId);
}

function reloadIngredients(recipeId) {
    if (recipeId === undefined) {
        recipeId = currentRecipe;
    }
    const recipe = RECIPES[recipeId];

    const stuckInput = document.getElementById("stuckInput");
    const quantity = parseInt(stuckInput.value ? stuckInput.value : stuckInput.placeholder);

    const list = document.getElementById("ingredients-list");
    while (list.firstChild) {
        list.removeChild(list.lastChild);
    }
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.innerText = ingredient.label + ": " + (ingredient.weight/20)*quantity;
        if ("extra" in ingredient) {
            li.innerText += ingredient.extra;
        }
        list.appendChild(li);
    });
}
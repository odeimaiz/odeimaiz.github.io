const RECIPES = {
    recipe1: {
        title: "Emmen. Aprikose Thymian",
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
        }]
    },
    recipe2: {
        title: "Speck",
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
            weight: 0.015,
            extra: "kg"
        },{
            label: "Olivenöl",
            weight: 0.02,
            extra: "kg"
        },{
            label: "Speck ausgelasen",
            weight: 0.2,
            extra: "kg"
        },{
            label: "Gruyere gewürfelt",
            weight: 0.15,
            extra: "kg"
        },{
            label: "Rosmarin gehackt",
            weight: 0.005,
            extra: "kg"
        }]
    },
    recipe3: {
        title: "Wurzelgemüse",
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
            weight: 0.015,
            extra: "kg"
        },{
            label: "Rapsöl",
            weight: 0.03,
            extra: "kg"
        },{
            label: "Wurzelgemüse blanchiert",
            weight: 0.25,
            extra: "kg"
        },{
            label: "Baumnuss",
            weight: 0.1,
            extra: "kg"
        },{
            label: "Salvei gehackt",
            weight: 0.005,
            extra: "kg"
        }]
    },
    recipe4: {
        title: "Lachs",
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
            label: "Rapsöl",
            weight: 0.03,
            extra: "kg"
        },{
            label: "Rauchlachs gewürfelt",
            weight: 0.2,
            extra: "kg"
        },{
            label: "Dill Senf Sauce",
            weight: 0.1,
            extra: "kg"
        },{
            label: "Dill",
            weight: 0.005,
            extra: "kg"
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
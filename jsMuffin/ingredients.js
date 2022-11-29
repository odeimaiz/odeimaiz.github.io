const RECIPES = {
    recipe1: {
        title: "Emmen. Aprikose Thymian",
        ingredients: [{
            label: "Milch",
            weight: 200,
            extra: "ml"
        }, {
            label: "Vollei",
            weight: 120,
            extra: "ml"
        },{
            label: "Mehl",
            weight: 250,
            extra: "gr"
        },{
            label: "Backpulver",
            weight: 10,
            extra: "gr"
        },{
            label: "Öl",
            weight: 30,
            extra: "ml"
        },{
            label: "Emmentaler gewürfelt",
            weight: 200,
            extra: "gr"
        },{
            label: "Getr. Aprikose gewürfelt",
            weight: 150,
            extra: "gr"
        },{
            label: "Thymian gehackt",
            weight: 5,
            extra: "gr"
        }]
    },
    recipe2: {
        title: "Speck",
        ingredients: [{
            label: "Milch",
            weight: 200,
            extra: "ml"
        }, {
            label: "Vollei",
            weight: 120,
            extra: "ml"
        },{
            label: "Mehl",
            weight: 250,
            extra: "gr"
        },{
            label: "Backpulver",
            weight: 15,
            extra: "gr"
        },{
            label: "Olivenöl",
            weight: 20,
            extra: "ml"
        },{
            label: "Speck",
            weight: 200,
            extra: "gr"
        },{
            label: "Gruyere gewürfelt",
            weight: 150,
            extra: "gr"
        },{
            label: "Rosmarin gehackt",
            weight: 5,
            extra: "gr"
        }]
    },
    recipe3: {
        title: "Wurzelgemüse",
        ingredients: [{
            label: "Milch",
            weight: 200,
            extra: "ml"
        }, {
            label: "Vollei",
            weight: 120,
            extra: "ml"
        },{
            label: "Mehl",
            weight: 250,
            extra: "gr"
        },{
            label: "Backpulver",
            weight: 15,
            extra: "gr"
        },{
            label: "Rapsöl",
            weight: 30,
            extra: "ml"
        },{
            label: "Wurzelgemüse blanchiert",
            weight: 250,
            extra: "gr"
        },{
            label: "Baumnuss",
            weight: 100,
            extra: "gr"
        },{
            label: "Salvei gehackt",
            weight: 5,
            extra: "gr"
        }]
    },
    recipe4: {
        title: "Lachs",
        ingredients: [{
            label: "Milch",
            weight: 200,
            extra: "ml"
        }, {
            label: "Vollei",
            weight: 120,
            extra: "ml"
        },{
            label: "Mehl",
            weight: 250,
            extra: "gr"
        },{
            label: "Backpulver",
            weight: 10,
            extra: "gr"
        },{
            label: "Rapsöl",
            weight: 30,
            extra: "gr"
        },{
            label: "Rauchlachs gewürfelt",
            weight: 200,
            extra: "gr"
        },{
            label: "Dill Senf Sauce",
            weight: 100,
            extra: "gr"
        },{
            label: "Dill",
            weight: 5,
            extra: "gr"
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
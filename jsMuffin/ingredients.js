function showRecipe(recipeId) {
    console.log(recipeId);
    let list = document.getElementById("ingredients-list");

    let ingredients = [{
        label: "bat",
        quantity: 4
    }, {
        label: "bi",
        quantity: 1
    }, {
        label: "hiru",
        quantity: 20
    }];
    
    ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.innerText = ingredient.label + ": " + ingredient.quantity*2;
        list.appendChild(li);
    });
}
import { fetchData } from "./fetchData.js";
const recipeID = localStorage.getItem('recipeID');
const titleElement = document.querySelector('.selected-recipe-title');
const descElement = document.querySelector('.selected-recipe-desc');
const imageElement = document.querySelector('.selected-recipe-img');
const ingredientsElement = document.querySelector('.ingredients-list');
const stepsElement = document.querySelector('.recipe-steps');
const loader = document.querySelector('.loader');


//EVENT LISTENERS



//FUNCTIONS
const loadRecipe = async () => {
    document.title = recipeID;
    loader.classList.add('hide');

    const data = await fetchData();
    for(let i = 0; i < data.length; i++){
        if(recipeID === data[i].title){
            const {image, title, desc, ingredients, steps} = data[i];
            //steps / ingredients
            const ingredientsList = list(ingredients);
            const stepsList = list(steps);
            console.log(stepsList)
            console.log(stepsElement)

            titleElement.textContent = title;
            descElement.textContent = desc;
            imageElement.style.display = 'block'
            imageElement.src = image;
            ingredientsElement.innerHTML = ingredientsList;
            stepsElement.innerHTML = stepsList;   
    } 
}
}



const list = (array) => {
    array = array.map((item, index) => {
        return `<li>
            <span class="step-number">${index + 1}</span>
            <p class="step-content">${item}</p>
        </li>
        `;
    }).join('');
    return array;
}


window.addEventListener('DOMContentLoaded', loadRecipe)
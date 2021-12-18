import React from 'react';
import recipeData from './recipeData';
import Recipe from './Recipe';
import {useParams} from "react-router-dom";

const RecipeView = () => {
    /* todo(przemyslaw.skoczewski)
        Create simple layout with recipe (ingredients list, description, title, image)
     */
    const data = recipeData.map(recipe => <Recipe key={recipe.id} title={recipe.title}
    description={recipe.description} ingredientsList={recipe.ingredientsList} image={recipe.image} path={recipe.id}/>)
    const { id } = useParams()
    return (
        <div>
            {data[id-1]}

        </div>
    )
};

export default RecipeView;

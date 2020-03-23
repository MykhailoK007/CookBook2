import {getAPI, postAPI} from "../api/api";

const ADD_NEW_RECIPE = 'ADD_NEW_RECIPE'
const SET_RECIPES = 'SET_RECIPES';
const initalState = {
    recipes:[]
}
function cardReducer(state = initalState, action){

    switch (action.type) {
        case SET_RECIPES:
            return {

                recipes:[...action.recipes]
            }

        case ADD_NEW_RECIPE:
            return {
                recipes:[ ...state.recipes.map(element => {
                    if(element.recipeName == action.recipe.name){
                        return {...element, versions:[...element.versions, { description: action.recipe.description, date: new Date()}]}
                    }
                    return {...element}
                })]
            }

        default :
         return state
    }

}
export const setListRecipes = (recipes) => {
    return {
        type:SET_RECIPES,
        recipes
    }
}

export const addNewRecipe = (recipe) => {
    return {
        type: ADD_NEW_RECIPE,
        recipe
    }
}

export const getRecipes = () => dispatch => {
    getAPI.getRecipes()
        .then((data) => {

            dispatch(setListRecipes(data.data))
        }

    )
}

export const postNewRecipe = (form) => (dispatch) => {
    dispatch(addNewRecipe(form))
    postAPI.createRecipe(form)
}



export default cardReducer;
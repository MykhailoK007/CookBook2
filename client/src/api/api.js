import * as axios from 'axios';


const instance = axios.create({
    baseURL:'/api/recipes',

});

export const getAPI = {
     getRecipes(){
         return instance.get('/')
             .then(response => {
                 return response
             })
     },

}
export const postAPI = {
    async createRecipe(form){
const response =  await fetch('/api/recipes/add', {
             method: 'POST',
             headers: {
                "Content-type": "application/json"
             },
             body: JSON.stringify(form)
         });
        return form
    }
}




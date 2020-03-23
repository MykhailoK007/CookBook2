import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import CardsContainer from "./Components/CardsContainer/CardsContainer";
import NewRecipe from "./Components/NewRecipe/NewRecipe";
import {BrowserRouter, Route} from "react-router-dom";
import FormRecipe from "./Components/FormRecipe/FormRecipe";
const App = () => {

    return (
        <BrowserRouter>
          <div className = "App">
            <Header/>
            <NewRecipe/>
            <Route path = '/'exact component = {(props) => <CardsContainer {...props}/> }/>
            <Route path = "/api/recipes/add" exact component = {(props) => <FormRecipe {...props} />}/>
          </div>
        </BrowserRouter>
    );

}

export default App;

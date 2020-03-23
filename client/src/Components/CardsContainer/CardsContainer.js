import React from "react";
import classes from "./CardsContainer.module.css"
import {connect} from "react-redux";
import { getRecipes, postNewRecipe, setListRecipes} from "../../redux/card-reducer";
import CardWrapper from "../CardWrapper/CardWrapper";

class CardsContainer extends React.Component {
        componentDidMount() {
            this.props.getRecipes()
        }


    render() {
        return (

                 <div className = {classes.container}>
                { this.props.recipes.map(recipe => {
                   return  recipe.versions.map((version, index) => {

                        if(index == recipe.versions.length - 1) {

                            return (
                                <CardWrapper name = {recipe.recipeName}
                                                            date = {version.date}
                                                            description = {version.description}
                                                            versions = {recipe.versions}
                                                            key = {recipe._id}
                                                            id = {recipe._id}
                                                            addRecipe = {this.props.postNewRecipe}
                                                            versions = {[...recipe.versions]}
                                />
                            )
                        }
                    })
                })
            }
            </div>

        )

    }
}

function mapStateToProps(state) {
    return {
        recipes: state.card.recipes
    }
}
export default connect(mapStateToProps,{setListRecipes,postNewRecipe, getRecipes})(CardsContainer);
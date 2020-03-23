import React from "react";
import {connect} from "react-redux";
import {addNewRecipe} from "../../redux/card-reducer";
import {NavLink} from "react-router-dom";


class NewRecipe extends React.Component{

    render() {

        return <div className = 'container'>
                <NavLink to = {`/api/recipes/add`}>
                    <button className = 'addNewRecipe'
                    >
                        +
                    </button>
                </NavLink>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.card.recipes,
    }
}

export default connect(mapStateToProps,{addNewRecipe})(NewRecipe);
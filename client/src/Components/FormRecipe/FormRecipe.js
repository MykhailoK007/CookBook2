import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import { postAPI} from "../../api/api";
import classes from './FormRecipe.module.css'
const FormRecipe = (props) => {
    const [form,setForm] = useState({name: '', description: ''})

    const  onChange = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    }

     const handleSubmit = async () => {
                 postAPI.createRecipe(form);
    }

    return  (
            <form   className={classes.form}>

                <h1>New recipe</h1>
                <div className={classes.name}>

                    <span>Name:</span>
                    <input type = "text" name = 'name' onChange = {onChange}/>

                </div>
                 <textarea className={classes.description}
                      name = "description"
                      placeholder = 'Enter recipe ...'
                      onChange = {onChange}
                 />
                <div>
                    <NavLink to="../.." >
                        <div className={classes.buttonWrapper}>
                            <input className= {classes.buttonEddit}
                               type = 'submit'
                               value = {'Done'}
                               onClick = {handleSubmit}
                            />
                            <button className = {classes.buttonEddit}> Cancel </button>
                        </div>
                    </NavLink>
                 </div>
            </form>
    )
}


export default FormRecipe;
import React from "react";
import classes from './EditMode.module.css'
const EditMode = props => {
    return (<div>
        <form >
            <h1 className={classes.name}> {props.name} </h1>
            <div className = {classes.description}>
                <textarea
                          name = "description"
                          className = { classes.textarea }
                          placeholder = 'Enter recipe ...'
                          onChange={ props.onChange }
                />
            </div>
            <div className={classes.buttons}>
                <input className = { classes.button }
                       type = 'submit'
                       value = 'Send'
                       onClick = { props.handleForm }
                />
                <button className = { classes.button }
                        onClick = { props.toggleEditMode }
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
    )
}

export default EditMode;
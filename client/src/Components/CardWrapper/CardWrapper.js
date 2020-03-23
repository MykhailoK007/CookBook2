import React from "react";
import classes from './CardWrapper.module.css'
import EditMode from "../EditMode/EditMode";


class  CardWrapper extends React.Component{
    state = {
        editMode:false,
        showVersions:false,
        name: '',
        description:''
    }

    toggleEditMode(){
        this.setState({
            editMode: !this.state.editMode
        })
    }
    toggleShowVersions(){
        this.setState({
            showVersions: !this.state.showVersions
        })
    }
    onChange(e){
        this.setState({
            name: this.props.name,
            description: e.target.value
        })
    }
    getDate(date){
        let arr = []
       date = new Date(date);
        arr.push(date.getDate())
        arr.push((date.getMonth()+1));
        arr.push((date.getFullYear()))
        return arr.join('-')
    }
    handleForm(){
        this.props.addRecipe({name: this.state.name, description: this.state.description})
        this.toggleEditMode();
    }
    render(){
        return (
            <div className = {classes.container} >
                <nav className = {classes.buttonsWrapper} >
                    <button onClick = {this.toggleEditMode.bind(this)}
                            className = {classes.button}> Edit
                    </button>
                    <button className = {classes.button}
                            onClick={this.toggleShowVersions.bind(this)}
                    >
                        Versions
                    </button>
                </nav>
                 {
                    !this.state.editMode &&
                    <div>
                        <h3 className = {classes.name}> {this.props.name} </h3>
                        <div className = {classes.date}> {this.getDate(this.props.date)} </div>
                        <div className = {classes.description}>
                            <h3>Recipe</h3>
                            {this.props.description} </div>
                     </div>
                }

                 {
                    this.state.editMode &&
                    <EditMode toggleEditMode = {this.toggleEditMode.bind(this)}
                              onChange = {this.onChange.bind(this)}
                              handleForm = {this.handleForm.bind(this)}
                              name = {this.props.name}
                    />
                 }
                {
                    this.state.showVersions &&
                        <div>
                            <h3>Versions</h3>
                            <ol>
                                {this.props.versions.map(version => {
                                    return(
                                        <li className={classes.li} key={version._id}>
                                            <div>
                                                <h4>Created at {this.getDate(version.date)}</h4>
                                            </div>
                                             Recipe: {version.description}
                                    </li>)
                                })}
                            </ol>
                        </div>
                }
            </div>
        )
}
}

export default CardWrapper;
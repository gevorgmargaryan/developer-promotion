import React, {Component} from "react"
import TextValidator from "./ValidatorComponent"
import SelectValidator from "./SelectValid"

const Skill=["","Js", "Node", "MongoDB", "React", "Redux", "C++", "C#", "Pyton", "MySql", "Sql"]

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            Level:"1",
            Skile:""
        };
        this.chooseFirstLevel = this.chooseFirstLevel.bind(this);
        this.chooseSkileFirst=this.chooseSkileFirst.bind(this)
    }
    chooseFirstLevel(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    chooseSkileFirst(event) {
        this.setState({Skile: event.target.value})}

    render(){
    const { Level } = this.state
        return(
            <tr>
                <SelectValidator
                    name="Skile"
                    type = "text"
                    className = "form-control"
                    id = "Skile"
                    arr={Skill}
                    value={this.state.Skile}
                    onChange = {this.chooseSkileFirst}
                    autoComplete="off"
                    validators={['minStringLength:1' ]}
                    errorMessages={['Skill is required.']}
                />
                <TextValidator
                    step="1"
                    name="time"
                    type = "number"
                    className = "form-control"
                    id = "Level"
                    value = {Level}
                    onChange = {this.chooseFirstLevel}
                    autoComplete="off"
                    validators={['minFloat:0', 'maxFloat:10', 'matchRegexp:^[0-9]$']}
                    errorMessages={['Time is required.', 'Level is too hight.']}
                />

            </tr>
        )
    }
}

export default Skills
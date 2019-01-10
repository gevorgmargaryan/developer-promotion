// src/js/components/FormComponent.jsponent.js
import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import {addDeveloper} from "../actions";
import {ADD_Developer} from "../constants/action-types";
import "./AppComoponentDis.css"
import { ValidatorComponent } from 'react-form-validator-core';
import TextValidator from "./ValidatorComponent"
import { ValidatorForm } from 'react-form-validator-core';

const mapDispatchToProps = dispatch => {
    return {
        addDeveloper: developer  => dispatch(addDeveloper(developer))
    };
};
const mapStateToProps = state => {
    return {todos: state.todos, count: state.count};
};



class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName:"",
            Age:"",

        };
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeLastName(event) {
        this.setState({[event.target.id]: event.target.value});

    }
    handleChangeFirstName(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    handleChangeAge(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addDeveloper(this.state);
        this.setState({firstName: "", lastName: "", Age:""});
    }

    render() {
        const {firstName, lastName, Age } = this.state;
        return (

            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <table >
                < tbody >
                    < tr >
                        < td > FirstName </td >
                        < td > LastName </td >
                    </tr>
                    < tr >
                        <TextValidator
                            name="title"
                            type = "text"
                            className = "form-control"
                            id = "firstName"
                            value = {firstName}
                            onChange = {this.handleChangeFirstName}
                            autoComplete="off"
                            validators={['required', 'isString']}
                            errorMessages={['Title is required.', 'Title is not valid.']}
                        />
                        <TextValidator
                            name="title"
                            type = "text"
                            className = "form-control"
                            id = "lastName"
                            value = {lastName}
                            onChange = {this.handleChangeLastName}
                            autoComplete="off"
                            validators={['required', 'isString']}
                            errorMessages={['Title is required.', 'Title is not valid.']}
                        />
                    </tr >
                    <tr>
                        <td>Age</td>
                        <td>Gender</td>
                    </tr>
                    <tr>
                        <TextValidator
                            step="1"
                            name="time"
                            type = "number"
                            className = "form-control"
                            id = "Age"
                            value = {Age}
                            onChange = {this.handleChangeAge}
                            autoComplete="off"
                            validators={['required', 'isFloat']}
                            errorMessages={['Time is required.', 'Time is not valid.']}
                        />
                        <td>
                            <label>
                                <input type="radio" value="option1"  />
                                Male
                            </label>
                            <label>
                                 <input type="radio" value="option1" />
                                 Female
                            </label>
                        </td>
                    </tr>
<tr>

</tr>
            </tbody >
            </table >

                <button
                    type = "submit"
                    className = "btn btn-success btn-lg" >
                    SAVE
                </button>

            </ValidatorForm>
        );
    }
}

const FormComponent = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);
export default FormComponent;

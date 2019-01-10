import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import {addTraning} from "../actions";
import {ADD_Developer} from "../constants/action-types";
import "./AppComoponentDis.css"
import { ValidatorComponent } from 'react-form-validator-core';
import TextValidator from "./ValidatorComponent"
import { ValidatorForm } from 'react-form-validator-core';

const mapDispatchToProps = dispatch => {
    return {
        addTraning: traning  => dispatch(addTraning(traning))
    };
};
const mapStateToProps = state => {
    return {todos: state.todos, };
};



class TraningForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            date:""
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({[event.target.id]: event.target.value});

    }
    handleChangeDate(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    handleChangeAge(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addTraning(this.state);
        this.setState({name: "", date: ""});
    }

    render() {
        const {name, date } = this.state;
        return (

            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <table >
                    < tbody >
                    < tr >
                        < td > Traning Skile </td >
                        < td > Date</td >
                    </tr>
                    < tr >
                        <TextValidator
                            name="title"
                            type = "text"
                            className = "form-control"
                            id = "name"
                            value = {name}
                            onChange = {this.handleChangeName}
                            autoComplete="off"
                            validators={['required', 'isString']}
                            errorMessages={['Title is required.', 'Title is not valid.']}
                        />
                        <TextValidator
                            step="1"
                            name="time"
                            type = "number"
                            className = "form-control"
                            id = "date"
                            value = {date}
                            onChange = {this.handleChangeDate}
                            autoComplete="off"
                            validators={['required', 'isFloat']}
                            errorMessages={['Time is required.', 'Time is not valid.']}
                        />
                    </tr >



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

const Traning = connect(mapStateToProps, mapDispatchToProps)(TraningForm);
export default Traning;
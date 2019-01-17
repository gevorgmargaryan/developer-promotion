import React, {Component} from "react";
import {connect} from "react-redux";
import {addTraning} from "../action/index";
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
            title: "",
            date: "",
            Lector:""
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeLector = this.handleChangeLector.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({[event.target.id]: event.target.value});

    }
    handleChangeDate(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    handleChangeLector(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addTraning(this.state);
        this.setState({name: "", date: ""});
    }

    render() {
        const {title, date, Lector } = this.state;
        return (

            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <table >
                    < tbody >
                    < tr >
                        < td > Traning Title </td >
                        < td > Date</td >
                        < td > Lector </td >
                    </tr>
                    < tr >
                        <TextValidator
                            name="title"
                            type = "text"
                            className = "form-control"
                            id = "title"
                            value = {title}
                            onChange = {this.handleChangeTitle}
                            autoComplete="off"
                            validators={['required', 'isString']}
                            errorMessages={['Title is required.', 'Title is not valid.']}
                        />
                        <TextValidator
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
                        <TextValidator
                            name="Lector"
                            type = "text"
                            className = "form-control"
                            id = "Lector"
                            value = {Lector}
                            onChange = {this.handleChangeTitle}
                            autoComplete="off"
                            validators={['required', 'isString']}
                            errorMessages={['Lector is required.', 'Lector is not valid.']}
                        />
                        <td>
                            <button
                                type = "submit"
                                className = "btn btn-success btn-lg" >
                                SAVE
                            </button>
                        </td>
                    </tr >
                    </tbody >
                </table >



            </ValidatorForm>
        );
    }
}


const Traning = connect(mapStateToProps, mapDispatchToProps)(TraningForm);
export default Traning;
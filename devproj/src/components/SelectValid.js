import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';


class SelectValidator extends ValidatorComponent {
    errorText() {
        const { isValid } = this.state;
        if (isValid) {
            return null;
        }
        return (
            < p style={{ color: 'red',display : 'inline-block' }}>
                {this.getErrorMessage()}
            </p>
        );
    }
    render() {
        console.log(this.props)
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
        return (
            <td style={{fontSize: "14px", color: 'red', verticalAlign: "top"}} >
                <select className="custom-select" onChange={this.props.onChange} value={this.props.value}>
                    {this.props.arr.map(i=><option
                    {...rest}
                    key={i}
                    value={i}
                    ref={() => { this.option = ""; }}
                    >{i}</option>)}
                </select>
                    {this.errorText()}

            </td>
        );
    }
}

export default SelectValidator;
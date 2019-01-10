import React, {Component} from "react";
import Traning from "./AddTraningComponent";
import {connect} from "react-redux";
import {ValidatorForm} from "./FormComponent";

const mapStateToProps = state => {
    return {tranings: state.tranings};
}

const TraningComponent = ({ tranings }) => (
<div>
    <table  width="100%">
        < tbody >
        < tr >
            <td>Traning Name</td>
            <td>Traning Date</td>

        </tr>
    </tbody >
</table >
        <ul className="list-group list-group-flush">
            {tranings.map(el => (
                <div>
                    <table width="100%" >
                        < tbody >
                            < tr >
                             <td width="50%" > {el.traning.name}</td>
                             <td width="50%" > {el.traning.name}</td>

                            </tr>
                        </tbody >
                     </table >


                </div> ))}
        </ul>

</div>
);

const TraningSide = connect(mapStateToProps)(TraningComponent);
export default TraningSide

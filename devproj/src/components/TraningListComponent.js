import React from "react";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {tranings: state.tranings};
}

const TraningComponent = ({ tranings }) => (
    <div>

        <ul className="list-group list-group-flush">
            {tranings.map(el => (
                <div>
                    <table width="100%" >
                        < tbody >
                        < tr >
                            <td width="40%" > {el.traning.title}</td>
                            <td width="30%" > {el.traning.date}</td>
                            <td width="30%" > {el.traning.Lector}</td>

                        </tr>
                        </tbody >
                    </table >


                </div> ))}
        </ul>

    </div>
);

const TraningList = connect(mapStateToProps)(TraningComponent);
export default TraningList
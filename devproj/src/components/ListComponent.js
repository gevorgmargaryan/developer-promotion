import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {developers: state.developers};
};
const DevoloperList = ({ developers }) => (
<div style={{backgroud: "blue"}}>
    <ul className="list-group list-group-flush" >
        {developers.map((el, index)=>(
            <li className="list-group-item list-group-item-primary">{el.developer.firstName} </li>
        ))      }
    </ul>
</div>
);

const ListComponent=connect(mapStateToProps)(DevoloperList)
export default ListComponent
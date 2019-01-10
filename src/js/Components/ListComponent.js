import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {developers: state.developers};
};
const DevoloperList = ({ developers }) => (

    <ul className="list-group list-group-flush">
        {developers.map((el, index)=>(
        <li>{el.developer.firstName} </li>
        ))      }
    </ul>
);

const ListComponent=connect(mapStateToProps)(DevoloperList)
export default ListComponent
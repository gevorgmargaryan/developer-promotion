// src/js/reducers/index.js
import {ADD_Developer, ADD_Traning} from "../Constants/action-types";
const url = "http://localhost:8081"
const postingTodo=(dispatch, todo)=>{
    fetch(url, {
        method: 'POST',
        body: JSON.stringify( todo),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

}
const initialState = {
    developers: [],
    tranings:[]
}
const rootReducer = (state = initialState, {type, payload}) => {

    switch (type) {

        case ADD_Developer: {
            console.log(payload)
            postingTodo(payload)
            return { developers: [...state.developers, payload], tranings: [...state.tranings]};
        }
        case ADD_Traning: {
            console.log(state," pay")
            return { tranings: [...state.tranings, payload], developers: [...state.developers] };
        }

        default:
            return state;
    }

};
export default rootReducer;


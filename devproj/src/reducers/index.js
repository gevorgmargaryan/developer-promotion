import {ADD_Developer, ADD_Traning} from "../constants/action-types";

const initialState = {
    developers: [],
    tranings:[]
}
const rootReducer = (state = initialState, {type, payload}) => {

    switch (type) {

        case ADD_Developer: {
            console.log(payload)

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
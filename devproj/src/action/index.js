import {ADD_Developer, LOAD_Developer, LOADING_Developer, ADD_Traning} from "../constants/action-types";

export const addDeveloper = (developer) => ({
    type: ADD_Developer, payload: {developer}
});
export const addTraning = (traning) => ({
    type: ADD_Traning, payload: {traning}
});
export const loadingDeveloper = (dispatch, page,) => ({
    type: LOADING_Developer, payload: {page, dispatch}
});
export const loadDeveloper = (todos, count) => ({
    type: LOAD_Developer, payload: {todos, count}
});
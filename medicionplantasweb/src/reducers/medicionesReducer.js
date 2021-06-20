import { types } from "../actions/types";

const initialState = {
    mediciones:[]
};

//action: {type:"texto", payload:cualquierCosa}
export const medicionesReducer = (state=initialState, action)=>{
    switch(action.type){
        case types.cargarMediciones: 
            return {mediciones:action.payload};
        case types.guardarMediciones:
            return {mediciones:[...state.mediciones,action.payload]};
        //TODO: Falta la de eliminacion, actualizacion, pero pa cuando las usemos
        default:
            return state;
    }
};
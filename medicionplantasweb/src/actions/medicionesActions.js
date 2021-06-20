import medicionesService from "../services/medicionesService";
import {types} from './types';

const guardarMedicion = (medicion)=>({
    type: types.guardarMediciones,
    payload: medicion
});

const cargarMediciones = (mediciones)=>({
    type: types.cargarMediciones,
    payload: mediciones
});

export const startCargarMediciones = ()=> async (dispatch)=>{

    try{
        const mediciones = await medicionesService.getMediciones();
        if(mediciones){
            dispatch(cargarMediciones(mediciones));
        }
        return true;
    }catch(e){
        return false;
    }

};

export const startGuardarMedicion = (medicion)=> async(dispatch)=>{
    try{
        const medicionNueva = await medicionesService.saveMedicion(medicion);
        if(medicionNueva){
            dispatch(guardarMedicion(medicionNueva));
            return true;
        }else{
            return false;
        }
        
    }catch(e){
        console.log(e);
        return false;
    }
};

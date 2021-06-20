import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { startCargarMediciones } from "../actions/medicionesActions";
import { TablaMedidas } from "../components/TablaMedidas"
import { GraficoMedidas } from "../components/GraficoMedidas";
export const VerMedidasContainer  = ()=>{
    //TODO: Hacer el grafico
    //TODO: Validar el formulario
    const dispatch = useDispatch();
    const {mediciones} = useSelector(state => state.mediciones);
    useEffect(() => {
        dispatch(startCargarMediciones());
    }, [dispatch,startCargarMediciones]);

    return (
        <>
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-6 mx-auto">
                    <TablaMedidas mediciones={mediciones}></TablaMedidas>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-6 col-lg-6 mx-auto">
                    <GraficoMedidas mediciones={mediciones}></GraficoMedidas>
                </div>
            </div>
        </>
    )
}
import { TablaMedidas } from "../components/TablaMedidas"
export const VerMedidasContainer  = ()=>{
    //TODO: Hacer el grafico
    //TODO: Validar el formulario
    //TODO: Integrar Swal
    //TODO: Generar el store, reducers y actions para consumir la api rest
    return (
        <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-6 mx-auto">
                <TablaMedidas></TablaMedidas>
            </div>
        </div>
    )
}
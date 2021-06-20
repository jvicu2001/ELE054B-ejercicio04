import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGuardarMedicion } from '../actions/medicionesActions';
import Swal from 'sweetalert2';
export const AgregarMedidasContainer = ()=>{

    const [fecha, setFecha] = useState(null);
    const [valor, setValor] = useState(0);
    //TODO: Fail del error del valor, ni carajo idea porque pasa todavia
    const [errores, setErrores] = useState({
        valor:'',
        fecha:''
    });
    
    const dispatch = useDispatch();
    const formValido = ()=>{
        let validoValor= false;
        let validoFecha = false;
        debugger;
        if(valor<0 || valor >100){
            validoValor = false;
        }else {
            validoValor = true;
        }

        if(!fecha){   
            validoFecha = false;
        } else {
            validoFecha = true;
        }
        setErrores({...errores, valor: !validoValor? "Debe ingresar valor": ''
        , fecha: !validoFecha? "Debe ingresar fecha": ''  });
        return validoFecha && validoValor;

    };
    const handleRegistrar = async (e)=>{
        const medicion = {fecha,valor};
        if(formValido()){
            const resp = await dispatch(startGuardarMedicion(medicion));
            if(resp){
                Swal.fire("Regitro exitoso","Medicion registrada","info");
            } else {
                Swal.fire("Fail", "Error hermano", "error");
            }
        }
    };
    return (
        <div className="row mt-5">
            <div className="col-12 col-md-6 col-lg-5 mx-auto">
                <div className="card">
                    <div className="card-header bg-dark bg-gradient text-white text-center">
                        <span>Agregar Medida</span>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="fechaDate" className="form-label">Fecha</label>
                            <Calendar className={errores.fecha !== ''? 'p-invalid': ''}
                            value={fecha} onChange={(e) => setFecha(e.value)}></Calendar>
                            {errores.fecha !== '' && <small className="p-error">{errores.fecha}</small>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="valorMedidaTxt"
                                className={`form-label ${errores.valor !== '' && 'is-invalid' }`}>Valor</label>
                            <input type="number"  value={valor} onChange={(e)=>setValor(e.target.value)}
                            id="valorMedidaTxt" className="form-control" />
                            {errores.valor !== ''
                                && <small className="invalid-feedback">{errores.valor}</small>}
                        </div>
                    </div>
                    <div className="card-footer d-grid gap-1">
                        <button onClick={handleRegistrar} className="btn btn-success">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
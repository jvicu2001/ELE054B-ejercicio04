import { Calendar } from 'primereact/calendar';
import { useState } from 'react';

export const AgregarMedidasContainer = ()=>{

    const [fecha, setFecha] = useState(null);
    const [valor, setValor] = useState(0);
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
                            <Calendar  value={fecha} onChange={(e) => setFecha(e.value)}></Calendar>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="valorMedidaTxt" className="form-label">Valor</label>
                            <input type="number"  value={valor} onChange={(e)=>setValor(e.target.value)}
                            id="valorMedidaTxt" className="form-control" />
                        </div>
                    </div>
                    <div className="card-footer d-grid gap-1">
                        <button className="btn btn-success">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
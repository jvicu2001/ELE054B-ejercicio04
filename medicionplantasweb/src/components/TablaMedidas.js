import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
export const TablaMedidas = ()=>{
    const initialState = [
        {id:1,valor:50, fecha:"2021-04-05"},
        {id:2,valor:100, fecha:"2021-04-06"},
        {id:3,valor:200, fecha:"2021-04-07"}
    ];
    const [medidas, setMedidas] = useState(initialState);
    return (
        <>
            <DataTable  value={medidas}>
                <Column field="id" header="Codigo"></Column>
                <Column field="fecha" header="Fecha"></Column>
                <Column field="valor" header="Humedad"></Column>
            </DataTable>  
        </>
    )
};
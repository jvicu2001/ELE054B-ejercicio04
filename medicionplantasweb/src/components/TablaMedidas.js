import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
export const TablaMedidas = ({mediciones})=>{
 
    return (
        <>
            <DataTable  value={mediciones}>
                <Column field="id" header="Codigo"></Column>
                <Column field="fecha" header="Fecha"></Column>
                <Column field="valor" header="Humedad"></Column>
            </DataTable>  
        </>
    )
};
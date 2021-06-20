import { Chart } from 'primereact/chart';
export const GraficoMedidas = ({mediciones})=>{

    const basicData = {
        labels: [...mediciones.map(m=>m.fecha)],
        datasets: [
            {
                label: 'Humedad',
                data: [...mediciones.map(m=>m.valor)],
                fill: false,
                borderColor: '#42A5F5',
                tension: .4
            }
        ]
    };
    let basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return <Chart type="line" data={basicData} options={basicOptions} />;
}
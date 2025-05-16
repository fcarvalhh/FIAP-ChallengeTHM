import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { DadosPluviometricos } from '../types';

// Registrando os componentes necessários do Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const GraficoChuvas: React.FC = () => {
    const [dados, setDados] = useState<DadosPluviometricos[]>([]);

    useEffect(() => {
        // TODO: Implementar chamada à API para buscar dados pluviométricos
        const buscarDados = async () => {
            // Simulação de dados
            const dadosSimulados: DadosPluviometricos[] = Array.from({ length: 7 }, (_, i) => ({
                data: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
                volumeChuva: Math.random() * 100,
                localizacao: 'São Paulo - Centro'
            }));
            setDados(dadosSimulados.reverse());
        };

        buscarDados();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Volume de Chuvas nos Últimos 7 Dias'
            }
        }
    };

    const data = {
        labels: dados.map(d => d.data),
        datasets: [
            {
                label: 'Volume de Chuva (mm)',
                data: dados.map(d => d.volumeChuva),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
    };

    return (
        <div className="card">
            <div className="card-body">
                <Line options={options} data={data} />
            </div>
        </div>
    );
};

export default GraficoChuvas; 
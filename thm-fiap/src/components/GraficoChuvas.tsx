import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { DadosApi, DadosPluviometricos } from "../types";

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
  const [dadosApi, setDadosApi] = useState<DadosApi>();
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {

//Para pegar as datas (de hoje e de sete dias antes)
const hora = Date.now();
const hoje = new Date(hora);
const seteDiasAntes = new Date(hoje.getTime() - (7 * 24 * 60 * 60 * 1000));

const dataInicio: string = converterData(hoje.toLocaleDateString());
const dataFim: string = converterData(seteDiasAntes.toLocaleDateString());

console.log(dataInicio + " - " + dataFim);

const getDias: DadosApi = {
    dtInicio: dataInicio,
    dtFim: dataFim,
};

setDadosApi(getDias);

//Função para converter de dd/MM/yyyy para yyyy-MM-dd
function converterData(data : string) : string {
    const partes = data.split("/");
     const dia = parseInt(partes[0]);
     const mes = parseInt(partes[1]) - 1; 
     const ano = parseInt(partes[2]);

    let mesFormatado = mes.toString().length === 1 ? "0" + mes.toString() : mes.toString();
    let diaFormatado = dia.toString().length === 1 ? "0" + dia.toString() : dia.toString();

    return `${ano}-${mesFormatado}-${diaFormatado}`;
}
    // TODO: Implementar chamada à API para buscar dados pluviométricos
    const buscarDados = async () => {
        //Estou usando o Meteostat API mas caso queiram trocar OBS: Pode fazer 500 request por mês
        try {
            const response = await fetch(
        `https://meteostat.p.rapidapi.com/point/daily?lat=52.5244&lon=13.4105&alt=43&start=${dadosApi?.dtFim}&end=${dadosApi?.dtInicio}`,
        {
          headers: {
            "x-rapidapi-host": "meteostat.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        }
      );

      const dataApi = await response.json();
      console.log(dataApi);
        } catch (error) {
            console.log(error);
        }
      
      // Simulação de dados
      const dadosSimulados: DadosPluviometricos[] = Array.from(
        { length: 7 },
        (_, i) => ({
          data: new Date(
            Date.now() - i * 24 * 60 * 60 * 1000
          ).toLocaleDateString(),
          volumeChuva: Math.random() * 100,
          localizacao: "São Paulo - Centro",
        })
      );
      setDados(dadosSimulados.reverse());
    };

    buscarDados();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Volume de Chuvas nos Últimos 7 Dias",
      },
    },
  };

  const data = {
    labels: dados.map((d) => d.data),
    datasets: [
      {
        label: "Volume de Chuva (mm)",
        data: dados.map((d) => d.volumeChuva),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
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

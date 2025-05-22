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
import { DadosApi, DadosPluviometricos } from "../../types";
import { callback } from "chart.js/dist/helpers/helpers.core";

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
  const [chartData, setChartData] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const buscarDados = async () => {
      //Converter data de dd/MM/yyyy para yyyy-MM-dd
      function converterData(data: string): string {
        const partes = data.split("/");
        const dia = parseInt(partes[0]);
        const mes = parseInt(partes[1]) - 1;
        const ano = parseInt(partes[2]);

        let mesFormatado = (mes + 1).toString().padStart(2, "0");
        let diaFormatado = dia.toString().padStart(2, "0");

        return `${ano}-${mesFormatado}-${diaFormatado}`;
      }

      const hora = Date.now();
      const hoje = new Date(hora);
      const seteDiasAntes = new Date(hoje.getTime() - 7 * 24 * 60 * 60 * 1000);

      const dataInicio = converterData(seteDiasAntes.toLocaleDateString());
      const dataFim = converterData(hoje.toLocaleDateString());

      try {
        //api.openweathermap.org/data/2.5/forecast?lat=-23.550&lon=-46.6333&appid=5ec0aa161894ef139fb6ed2e6090b626
        const response = await fetch(
          //Estou usando o Meteostat API mas caso queiram trocar OBS: Pode fazer 500 request por mês
          `https://meteostat.p.rapidapi.com/point/daily?lat=-23.5505&lon=-46.6333&alt=43&start=${dataInicio}&end=${dataFim}`,
          {
            headers: {
              "x-rapidapi-host": "meteostat.p.rapidapi.com",
              "x-rapidapi-key": apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API");
        }

        const dataApi = await response.json();
        const dataApiReverse = dataApi.data.reverse();

        const dadosGrafico: DadosPluviometricos[] = dataApiReverse.map(
          (item, index) => ({
            data: new Date(
              Date.now() - index * 24 * 60 * 60 * 1000
            ).toLocaleDateString(),
            volumeChuva: item.prcp ?? 0,
            localizacao: "São Paulo - Centro",
          })
        );

        setDados(dadosGrafico.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    buscarDados();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: "Volume de Chuvas nos Últimos 7 Dias",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.parsed.y} mm`;
          },
        },
      },
    },
    animation: {
      duration: 300,
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Volume (mm)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Data",
        },
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
        tension: 0.1,
        fill: true,
      },
    ],
  };

  return (
    <div className="card">
      <div
        className="card-body"
        style={{ height: "450px", width: "100%" }}
      >
        {dados.length > 0 ? (
          <Line options={options} data={data} />
        ) : (
          <p>Carregando dados do gráfico...</p>
        )}
        <div className="mt-3 text-center">
          <small className="text-muted">
            <i className="bi bi-info-circle me-1"></i>
            Dados meteorológicos de precipitação pluviométrica da região central
            de São Paulo
          </small>
        </div>
      </div>
    </div>
  );
};

export default GraficoChuvas;

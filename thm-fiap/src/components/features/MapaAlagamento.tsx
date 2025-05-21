import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { PontoAlagamento } from "../../types";
import { Icon } from "leaflet";

/**
 * Componente que exibe o mapa com os pontos de alagamento
 * @returns {JSX.Element} Retorna o componente do mapa
 */
const MapaAlagamento: React.FC = () => {
  // Estado para armazenar os pontos de alagamento, depois vamos tentar fazer pro rio ou so sp?? nmao sei
  const [pontos, setPontos] = useState<PontoAlagamento[]>([]);
  const [loading, setLoading] = useState(true);

  /* Definindo a posição inicial do mapa
       Coordenadas do centro de São Paulo */
  const posicaoInicial = { lat: -23.5505, lng: -46.6333 };

  const iconeAlagamento = new Icon({
    iconUrl: "/cuidado.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  useEffect(() => {
    // TODO: Implementar chamada à API para buscar pontos de alagamento
    const buscarPontos = async () => {
      try {
        // Simulação de dados para desenvolvimento
        const dadosSimulados: PontoAlagamento[] = [
          {
            id: "1",
            latitude: -23.5505,
            longitude: -46.6333,
            endereco: "Praça da Sé",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "21",
            latitude: -23.5278,
            longitude: -46.7281,
            endereco: "Vila Leopoldina, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "2",
            latitude: -23.5592,
            longitude: -46.5981,
            endereco: "Mooca, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "3",
            latitude: -23.5362,
            longitude: -46.5679,
            endereco: "Tatuapé, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "4",
            latitude: -23.5432,
            longitude: -46.5895,
            endereco: "Belém, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "5",
            latitude: -23.5726,
            longitude: -46.5175,
            endereco: "Aricanduva, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "6",
            latitude: -23.5847,
            longitude: -46.5819,
            endereco: "Vila Prudente, São Paulo",
            nivelRisco: "baixo",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "7",
            latitude: -23.61,
            longitude: -46.53,
            endereco: "Sapopemba, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "8",
            latitude: -23.4947,
            longitude: -46.4739,
            endereco: "Ermelino Matarazzo, São Paulo",
            nivelRisco: "medio",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "9",
            latitude: -23.4939,
            longitude: -46.4023,
            endereco: "Itaim Paulista, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "10",
            latitude: -23.5,
            longitude: -46.4333,
            endereco: "São Miguel Paulista, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "11",
            latitude: -23.517,
            longitude: -46.6,
            endereco: "Vila Maria, São Paulo",
            nivelRisco: "medio",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "12",
            latitude: -23.4669,
            longitude: -46.5793,
            endereco: "Jaçanã, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "13",
            latitude: -23.46,
            longitude: -46.65,
            endereco: "Tremembé, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "14",
            latitude: -23.5,
            longitude: -46.7,
            endereco: "Pirituba, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "15",
            latitude: -23.4988,
            longitude: -46.6998,
            endereco: "Freguesia do Ó, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "16",
            latitude: -23.45,
            longitude: -46.7,
            endereco: "Brasilândia, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "17",
            latitude: -23.68,
            longitude: -46.75,
            endereco: "Jardim Ângela, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "18",
            latitude: -23.75,
            longitude: -46.7,
            endereco: "Grajaú, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "19",
            latitude: -23.7,
            longitude: -46.7,
            endereco: "Socorro, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "20",
            latitude: -23.7,
            longitude: -46.7,
            endereco: "Interlagos, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
          {
            id: "22",
            latitude: -23.6233,
            longitude: -46.6988,
            endereco: "Morumbi, São Paulo",
            nivelRisco: "alto",
            ultimaAtualizacao: new Date().toISOString(),
          },
        ];
        setPontos(dadosSimulados);
      } catch (error) {
        // Log de erro para debugging
        console.error("Erro ao buscar pontos de alagamento:", error);
      } finally {
        setLoading(false);
      }
    };

    buscarPontos();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="map-container" style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[posicaoInicial.lat, posicaoInicial.lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {pontos.map((ponto) => (
          <Marker
            key={ponto.id}
            position={[ponto.latitude, ponto.longitude]}
            icon={iconeAlagamento}
          >
            <Popup>
              <div>
                <h6>{ponto.endereco}</h6>
                <p>Nível de Risco: {ponto.nivelRisco}</p>
                <p>
                  Última Atualização:{" "}
                  {new Date(ponto.ultimaAtualizacao).toLocaleString()}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapaAlagamento;

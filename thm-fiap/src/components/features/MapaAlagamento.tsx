import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PontoAlagamento } from '../../types';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

    // Definindo o ícone personalizado para os marcadores
    const iconeAlagamento = new Icon({
        iconUrl: '/img/cuidado.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    useEffect(() => {
        // TODO: Implementar chamada à API para buscar pontos de alagamento
        const buscarPontos = async () => {
            try {
                // Simulação de dados para desenvolvimento
                const dadosSimulados: PontoAlagamento[] = [
                    {
                        id: '1',
                        latitude: -23.5505,
                        longitude: -46.6333,
                        endereco: 'Avenida Paulista, 1000',
                        nivelRisco: 'alto',
                        ultimaAtualizacao: new Date().toISOString()
                    }
                ];
                setPontos(dadosSimulados);
            } catch (error) {
                // Log de erro para debugging
                console.error('Erro ao buscar pontos de alagamento:', error);
            } finally {
                setLoading(false);
            }
        };

        buscarPontos();
    }, []);

    if (loading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Carregando...</span>
            </div>
        </div>;
    }

    return (
        <div className="map-container" style={{ height: '500px', width: '100%' }}>
            <MapContainer
                center={[posicaoInicial.lat, posicaoInicial.lng]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
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
                                <p>Última Atualização: {new Date(ponto.ultimaAtualizacao).toLocaleString()}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapaAlagamento; 
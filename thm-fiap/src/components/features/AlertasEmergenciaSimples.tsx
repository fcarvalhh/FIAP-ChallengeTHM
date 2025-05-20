import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Alerta {
    id: number;
    data: string;
    regiao: string;
    nivel: 'leve' | 'moderado' | 'grave';
    descricao: string;
}

const AlertasEmergenciaSimples: React.FC = () => {
    const [alertas, setAlertas] = useState<Alerta[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {
        const fetchAlertas = async () => {
            try {
                setCarregando(true);

                // Simulação de dados da API do CGE
                const dadosSimulados: Alerta[] = [
                    {
                        id: 1,
                        data: '27/06/2024',
                        regiao: 'Zona Leste',
                        nivel: 'grave',
                        descricao: 'Alagamento na Av. Aricanduva. Evite a região.'
                    },
                    {
                        id: 2,
                        data: '27/06/2024',
                        regiao: 'Zona Sul',
                        nivel: 'moderado',
                        descricao: 'Pontos de alagamento na região do Ipiranga. Tráfego lento.'
                    },
                    {
                        id: 3,
                        data: '27/06/2024',
                        regiao: 'Zona Norte',
                        nivel: 'leve',
                        descricao: 'Risco de alagamento na região da Freguesia do Ó. Chuva moderada.'
                    }
                ];

                // Em produção, aqui seria a chamada real à API
                setTimeout(() => {
                    setAlertas(dadosSimulados);
                    setCarregando(false);
                }, 1000);
            } catch (error) {
                console.error('Erro ao buscar alertas:', error);
                setCarregando(false);
            }
        };

        fetchAlertas();
    }, []);

    const getBadgeClass = (nivel: string) => {
        switch (nivel) {
            case 'leve':
                return 'bg-warning';
            case 'moderado':
                return 'bg-orange';
            case 'grave':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    };

    const getNivelText = (nivel: string) => {
        switch (nivel) {
            case 'leve':
                return 'Leve';
            case 'moderado':
                return 'Moderado';
            case 'grave':
                return 'Grave';
            default:
                return 'Desconhecido';
        }
    };

    return (
        <div className="alertas-simples-container">
            {carregando ? (
                <div className="text-center py-2">
                    <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </div>
                    <span className="ms-2">Carregando alertas...</span>
                </div>
            ) : alertas.length === 0 ? (
                <p className="text-center m-0">Nenhum alerta ativo no momento.</p>
            ) : (
                <>
                    <div className="alertas-simples-list">
                        {alertas.slice(0, 3).map((alerta) => (
                            <div key={alerta.id} className="alerta-simples-item">
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="alerta-regiao">{alerta.regiao}</span>
                                    <span className={`badge ${getBadgeClass(alerta.nivel)}`}>{getNivelText(alerta.nivel)}</span>
                                </div>
                                <p className="alerta-descricao mb-0">{alerta.descricao}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/alertas" className="btn btn-sm btn-outline-primary">
                            Ver todos os alertas <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default AlertasEmergenciaSimples; 
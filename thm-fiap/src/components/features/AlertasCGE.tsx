import React, { useState, useEffect } from 'react';

interface Alerta {
    id: number;
    data: string;
    regiao: string;
    nivel: 'leve' | 'moderado' | 'grave';
    descricao: string;
    atualizadoEm: string;
}

const AlertasCGE: React.FC = () => {
    const [alertas, setAlertas] = useState<Alerta[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const fetchAlertas = async () => {
            try {
                setCarregando(true);

                // Aqui faremos a chamada à API do CGE de São Paulo
                // Como esta API pode não estar disponível publicamente, estamos usando dados simulados
                // Em um ambiente de produção, isso deveria ser substituído pela chamada real à API

                // Simulação de dados da API
                const dadosSimulados: Alerta[] = [
                    {
                        id: 1,
                        data: '27/06/2024',
                        regiao: 'Zona Leste',
                        nivel: 'grave',
                        descricao: 'Alagamento na Av. Aricanduva. Evite a região.',
                        atualizadoEm: '27/06/2024 às 15:30'
                    },
                    {
                        id: 2,
                        data: '27/06/2024',
                        regiao: 'Zona Sul',
                        nivel: 'moderado',
                        descricao: 'Pontos de alagamento na região do Ipiranga. Tráfego lento.',
                        atualizadoEm: '27/06/2024 às 14:45'
                    },
                    {
                        id: 3,
                        data: '27/06/2024',
                        regiao: 'Zona Norte',
                        nivel: 'leve',
                        descricao: 'Risco de alagamento na região da Freguesia do Ó. Chuva moderada.',
                        atualizadoEm: '27/06/2024 às 14:20'
                    },
                    {
                        id: 4,
                        data: '27/06/2024',
                        regiao: 'Centro',
                        nivel: 'moderado',
                        descricao: 'Alagamento na Praça da Sé. Vias interditadas.',
                        atualizadoEm: '27/06/2024 às 13:50'
                    },
                ];

                // Em uma implementação real, a chamada seria algo como:
                // const resposta = await fetch('https://api.cge.sp.gov.br/alertas');
                // const dados = await resposta.json();

                setTimeout(() => {
                    setAlertas(dadosSimulados);
                    setCarregando(false);
                }, 1000); // Simula tempo de carregamento da API
            } catch (error) {
                console.error('Erro ao buscar alertas do CGE:', error);
                setErro('Não foi possível carregar os alertas. Tente novamente mais tarde.');
                setCarregando(false);
            }
        };

        fetchAlertas();

        // Atualiza os dados a cada 5 minutos
        const intervalId = setInterval(fetchAlertas, 5 * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getClasseNivel = (nivel: string) => {
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

    return (
        <div className="alertas-container">
            <div className="alertas-header">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                <h6 className="mb-0">Alertas em tempo real do CGE</h6>
            </div>

            {carregando ? (
                <div className="text-center py-4">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </div>
                    <p className="mt-2">Buscando alertas...</p>
                </div>
            ) : erro ? (
                <div className="alert alert-danger" role="alert">
                    {erro}
                </div>
            ) : alertas.length === 0 ? (
                <p className="text-center py-3">Nenhum alerta ativo no momento.</p>
            ) : (
                <div className="alertas-list">
                    {alertas.map((alerta) => (
                        <div key={alerta.id} className="alerta-item shadow-sm">
                            <div className={`alerta-nivel ${getClasseNivel(alerta.nivel)}`} />
                            <div className="alerta-content">
                                <div className="alerta-header">
                                    <h6>{alerta.regiao}</h6>
                                    <span className="alerta-data">{alerta.data}</span>
                                </div>
                                <p className="alerta-descricao">{alerta.descricao}</p>
                                <small className="alerta-atualizacao">Atualizado em: {alerta.atualizadoEm}</small>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="alertas-footer">
                <small>
                    <i className="bi bi-info-circle me-1"></i>
                    Fonte: Centro de Gerenciamento de Emergências (CGE) de São Paulo
                </small>
            </div>
        </div>
    );
};

export default AlertasCGE; 
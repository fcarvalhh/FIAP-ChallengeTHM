import React from 'react';
import AlertasCGE from '../components/features/AlertasCGE';
import './SobreNos.css'; // Reutilizando os estilos de página existentes

const Alertas: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title">
                                <i className="bi bi-exclamation-triangle-fill text-gradient me-2"></i>
                                Alertas do CGE São Paulo
                            </h2>
                            <p className="lead mb-4">
                                Acompanhe em tempo real os alertas de alagamentos e enchentes emitidos pelo Centro de Gerenciamento de Emergências da cidade de São Paulo.
                            </p>

                            <div className="alert alert-info">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-info-circle me-3" style={{ fontSize: '1.5rem' }}></i>
                                    <div>
                                        <h5 className="mb-1">O que é o CGE?</h5>
                                        <p className="mb-0">
                                            O Centro de Gerenciamento de Emergências (CGE) é o órgão da Prefeitura de São Paulo responsável pelo monitoramento das condições meteorológicas e emissão de alertas relacionados a alagamentos, enchentes e outros eventos climáticos que afetam a cidade.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-4">
                                <div className="card-body">
                                    <AlertasCGE />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-exclamation-circle text-warning me-2"></i>
                                                Como interpretar os alertas
                                            </h5>
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex align-items-center">
                                                    <div className="me-3" style={{ width: '20px', height: '20px', backgroundColor: '#f1c40f', borderRadius: '4px' }}></div>
                                                    <span><strong>Nível Leve:</strong> Possibilidade de alagamentos pontuais. Mantenha-se atento.</span>
                                                </li>
                                                <li className="list-group-item d-flex align-items-center">
                                                    <div className="me-3" style={{ width: '20px', height: '20px', backgroundColor: '#fd7e14', borderRadius: '4px' }}></div>
                                                    <span><strong>Nível Moderado:</strong> Alagamentos em vias e pontos críticos. Evite deslocamentos desnecessários.</span>
                                                </li>
                                                <li className="list-group-item d-flex align-items-center">
                                                    <div className="me-3" style={{ width: '20px', height: '20px', backgroundColor: '#e74c3c', borderRadius: '4px' }}></div>
                                                    <span><strong>Nível Grave:</strong> Enchentes e alagamentos severos. Evite áreas de risco e siga orientações da Defesa Civil.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-telephone-fill text-success me-2"></i>
                                                Contatos úteis
                                            </h5>
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex align-items-center">
                                                    <i className="bi bi-telephone-fill me-3 text-primary"></i>
                                                    <span><strong>Defesa Civil:</strong> 199</span>
                                                </li>
                                                <li className="list-group-item d-flex align-items-center">
                                                    <i className="bi bi-telephone-fill me-3 text-danger"></i>
                                                    <span><strong>Corpo de Bombeiros:</strong> 193</span>
                                                </li>
                                                <li className="list-group-item d-flex align-items-center">
                                                    <i className="bi bi-telephone-fill me-3 text-success"></i>
                                                    <span><strong>SAMU:</strong> 192</span>
                                                </li>
                                                <li className="list-group-item d-flex align-items-center">
                                                    <i className="bi bi-globe me-3 text-info"></i>
                                                    <span><strong>Site CGE São Paulo:</strong> <a href="https://www.cgesp.org/" target="_blank" rel="noopener noreferrer">www.cgesp.org</a></span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alertas; 
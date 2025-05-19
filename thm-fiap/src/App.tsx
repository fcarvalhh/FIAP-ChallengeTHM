import React from 'react';
import MapaAlagamento from './components/MapaAlagamento';
import GraficoChuvas from './components/GraficoChuvas';
import PainelNoticias from './components/PainelNoticias';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="container-fluid">
            <header className="bg-primary text-white py-4 mb-4">
                <div className="container">
                    <h1 className="mb-0">Sistema de Monitoramento de Enchentes</h1>
                    <p className="mb-0">Acompanhe em tempo real as áreas de risco na sua região</p>
                </div>
            </header>

            <main className="container">
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Mapa de Pontos de Alagamento</h5>
                                <MapaAlagamento />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Histórico de Chuvas</h5>
                                <GraficoChuvas />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Dicas de Segurança</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <i className="bi bi-exclamation-triangle text-warning me-2"></i>
                                        Evite áreas alagadas - a água pode estar contaminada
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-house-door text-primary me-2"></i>
                                        Se possível, permaneça em local seguro durante chuvas intensas
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-telephone text-success me-2"></i>
                                        Mantenha contatos de emergência sempre à mão
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Notícias</h5>
                                <PainelNoticias />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-light py-4 mt-4">
                <div className="container text-center">
                    <p className="mb-0">© 2024 FJF System </p>




                </div>
            </footer>
        </div>
    );
};

export default App; 
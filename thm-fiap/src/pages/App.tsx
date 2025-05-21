import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapaAlagamento from '../components/features/MapaAlagamento';
import GraficoChuvas from '../components/features/GraficoChuvas';
import PainelNoticias from '../components/features/PainelNoticias';
import AlertasEmergenciaSimples from '../components/features/AlertasEmergenciaSimples';
import SobreNos from './SobreNos';
import Alertas from './Alertas';
import "../components/style/App.css";
import Navbar from '../components/navbar/Navbar';
import BotaoYoutube from '../components/features/BotaoYoutube';
import "../js/bootstrap.js";

// Componente da página inicial
const Home = () => {
    return (
        <div className="animate-fade-in">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="bi bi-map text-gradient"></i>
                                Mapa de Pontos de Alagamento
                            </h5>
                            <MapaAlagamento />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="bi bi-graph-up text-gradient"></i>
                                Histórico de Chuvas
                            </h5>
                            <div className="grafico-container">
                                <GraficoChuvas />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="bi bi-shield-check text-gradient"></i>
                                Dicas de Segurança
                            </h5>
                            <ul className="list-group">
                                <li className="list-group-item shadow-sm">
                                    <i className="bi bi-exclamation-triangle text-warning"></i>
                                    <span>Evite áreas alagadas - a água pode estar contaminada</span>
                                </li>
                                <li className="list-group-item shadow-sm">
                                    <i className="bi bi-house-door text-primary"></i>
                                    <span>Se possível, permaneça em local seguro durante chuvas intensas</span>
                                </li>
                                <li className="list-group-item shadow-sm">
                                    <i className="bi bi-telephone text-success"></i>
                                    <span>Mantenha contatos de emergência sempre à mão</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="bi bi-newspaper text-gradient"></i>
                                Notícias
                            </h5>
                            <PainelNoticias />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="bi bi-exclamation-triangle-fill text-gradient"></i>
                                Alertas do CGE
                            </h5>
                            <AlertasEmergenciaSimples />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




// Componente para a página de vídeo
const Video = () => {
    return (
        <div className="container mt-4 animate-fade-in">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h2 className="card-title">
                        <i className="bi bi-play-circle text-gradient"></i>
                        Conteúdo em Vídeo
                    </h2>
                    <p className="lead">Confira nossa apresentação sobre o Sistema de Monitoramento de Enchentes de São Paulo.</p>
                    <div className="mt-4 ratio ratio-16x9">
                        <iframe
                            src="https://www.youtube.com/embed/TK1_i7kZAqQ"
                            title="Apresentação do Sistema de Monitoramento de Enchentes"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};





const App: React.FC = () => {
    return (


        <Router>
            <div className="container-fluid p-0">
                <header className="main-header">
                    <div className="container">
                        <h1>
                            <i className="bi bi-droplet-fill text-gradient me-2"></i>
                            Sistema de Monitoramento de Enchentes de São Paulo
                        </h1>
                        <p>Acompanhe em tempo real as áreas de risco na sua região</p>
                        <Navbar />
                    </div>
                </header>

                <main className="container py-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/alertas" element={<Alertas />} />
                        <Route path="/video" element={<Video />} />
                        <Route path="/sobre" element={<SobreNos />} />
                    </Routes>
                </main>
                <BotaoYoutube />
                <footer>
                    <div className="container text-center">
                        <p>© 2024 FJF System - Monitoramento Inteligente de Enchentes</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default App;

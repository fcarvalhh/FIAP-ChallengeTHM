import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">


                {/* Botão do menu hamburguer para mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links de navegação */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="bi bi-house-door me-1"></i>
                                Início
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/alertas">
                                <i className="bi bi-exclamation-triangle me-1"></i>
                                Alertas CGE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/video">
                                <i className="bi bi-play-circle me-1"></i>
                                YouTube Video
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre">
                                <i className="bi bi-info-circle me-1"></i>
                                Sobre o projeto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

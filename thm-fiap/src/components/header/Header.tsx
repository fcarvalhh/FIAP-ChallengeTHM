import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faYoutube } from '@fontawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#inicio">
                    {/* Logo ou nome do projeto */}
                    Meu Projeto
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">
                            <FontAwesomeIcon icon={faHome} /> Início
                        </Nav.Link>
                        <Nav.Link href="#sobre">
                            <FontAwesomeIcon icon={faInfoCircle} /> Sobre Nós
                        </Nav.Link>
                        <Nav.Link href="#youtube">
                            <FontAwesomeIcon icon={faYoutube} /> YouTube Video
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
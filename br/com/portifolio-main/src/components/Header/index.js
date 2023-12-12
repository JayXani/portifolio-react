/* eslint-disable jsx-a11y/alt-text */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoPortifolio from '../../images/portifolio-logo.png'
import { A } from './style';

function header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg='' data-bs-theme="dark" id='header'>
            <Container>
                <Navbar.Brand href="#home">
                    <A href='#header'>
                        <img src={logoPortifolio} title='home' />
                    </A>
                    Meu portifólio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#top-website">Início</Nav.Link>
                        <Nav.Link href="#section-skills">Especialidades</Nav.Link>
                        <Nav.Link href="#about-me">Sobre</Nav.Link>
                        <Nav.Link href="#section-projects">Projetos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default header;
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { LinkContainer } from 'react-router-bootstrap'


function Layout() {
  return (
    <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
            <Navbar.Brand>Directorio de Personas</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
            <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/persona">
                <Nav.Link>Persona</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/estadisticas">
                <Nav.Link>Estadisticas</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
                <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>
        </Nav>
    </Navbar>
  );
}

export default Layout;

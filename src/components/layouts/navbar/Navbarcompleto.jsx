import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { productos } from "../../../routes/productos.js";
import { servicios } from "../../../routes/servicios.js";
import { informacion } from "../../../routes/informacion.js";

function Navbarcompleto() {
  return (
    <Navbar
      expand="lg"
      className="Navbar"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            style={{ width: "50%", margin: "1vw" }}
            src="src\components\common\Logos\1.2-Negro_Horizontal.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              {productos.map(({ id, title, path }) => (
                <NavDropdown.Item key={id} href={path}>
                  {title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              {servicios.map(({ id, title, path }) => (
                <NavDropdown.Item key={id} href={path}>
                  {title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/about">Sobre UCHI</Nav.Link>
            <NavDropdown title="Información útil" id="basic-nav-dropdown">
              {informacion.map(({ id, title, path }) => (
                <NavDropdown.Item key={id} href={path}>
                  {title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcompleto;

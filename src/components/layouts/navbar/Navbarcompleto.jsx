import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { productos } from "../../../routes/productos.js";
import { informacion } from "../../../routes/informacion.js";
import "./Navbar.css";

function Navbarcompleto() {
  return (
    <div>
      <Navbar expand="md" className="Navbar">
        <Container className="Container">
          <Navbar.Brand href="/">
            <img
              className="logoNavbar"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"
            ></img>
          </Navbar.Brand>
          <Container style={{ display: "grid", justifyContent: "end" }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/productos">
                    Todos los productos
                  </NavDropdown.Item>
                  {productos.map(({ id, title, path }) => (
                    <NavDropdown.Item key={id} href={path}>
                      {title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <NavDropdown title="Servicios" id="basic-nav-dropdown">
                  <NavDropdown.Item  href="/servicios">
                    Todos los servicios
                  </NavDropdown.Item>
                  <NavDropdown.Item  href="servicios/interiorismo">
                    Interiorismo
                  </NavDropdown.Item>
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
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarcompleto;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { productos } from "../../../routes/productos.js";
import { servicios } from "../../../routes/servicios.js";
import { informacion } from "../../../routes/informacion.js";
import "./Navbar.css";

export const NavbarDesktop = () => {
  return (
    <div>
      <Navbar expand="md" className="Navbar">
        <Container className="Container">
          <Navbar.Brand href="/">
            <img
              style={{ height:"80px", marginRight:"100px" }}
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"
            ></img>
          </Navbar.Brand>
          <Container style={{ display: "grid", justifyContent: "spaceEvenly" }}>
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
        </Container>
      </Navbar>
    </div>
  );
};

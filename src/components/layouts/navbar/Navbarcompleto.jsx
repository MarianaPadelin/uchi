import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { productos } from "../../../routes/productos.js";


import { NavbarDesktop } from "./NavbarDesktop.jsx";
import { NavbarCelular } from "./NavbarCelular.jsx";

function Navbarcompleto() {
  return (
  
      <Navbar collapseOnSelect expand="md" className="Navbar">
        <Container className="Container">
          <Navbar.Brand href="/">
            <img
              className="logoNavbar"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"
            ></img>
          </Navbar.Brand>
          <Container className="Container2">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {window.innerWidth > 700 ? <NavbarDesktop /> : <NavbarCelular />}
              {/* <Nav className="me-auto">
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
                  <NavDropdown.Item href="/servicios">
                    Todos los servicios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="servicios/interiorismo">
                    Interiorismo
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">Sobre UCHI</Nav.Link>
                <Nav.Link href="/info">Información útil</Nav.Link>
                
                <Nav.Link href="/contacto">Contacto</Nav.Link>
              </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>

  );
}

export default Navbarcompleto;

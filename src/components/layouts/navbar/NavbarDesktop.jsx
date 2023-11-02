import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { productos } from "../../../routes/productos.js";
import "./Navbar.css";

export const NavbarDesktop = () => {
  return (
    <div>
      <Nav className="me-auto">
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item className="dropdown" href="/productos">
            Todos los productos
          </NavDropdown.Item>
          {productos.map(({ id, title, path }) => (
            <NavDropdown.Item className="dropdown" key={id} href={path}>
              {title}
            </NavDropdown.Item>
          ))}
        </NavDropdown>
        <Nav.Link href="/servicios">Servicios</Nav.Link>
        <Nav.Link href="/about">Sobre UCHI</Nav.Link>
        <Nav.Link href="/info">Información útil</Nav.Link>

        <Nav.Link href="/contacto">Contacto</Nav.Link>
      </Nav>
    </div>
  );
};

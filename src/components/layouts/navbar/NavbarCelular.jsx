import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


function NavbarCelular() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="/">
          <img
            style={{ width: "126px", height: "56px" }}
            className="logoNavbar"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="/about">Sobre UCHI</Nav.Link>
            <Nav.Link href="/info">Información útil</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <div className="subRedes" style={{marginTop:"40px"}}>
              <Link
                style={{ color: "inherit", marginRight: "10px" }}
                to="https://www.youtube.com/channel/UCZyzYTcjeYO-M1M48_XiM2Q"
                target="_blank"
              >
                <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698319397/uchi/iconos/youtube_qrzg9k.png" />
              </Link>
              <Link
                style={{ color: "inherit", marginRight: "10px" }}
                to="https://www.instagram.com/uchi__ar/"
                target="_blank"
              >
                <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698319462/uchi/iconos/instagram_dhprrb.png" />
              </Link>
              <Link
                style={{ color: "inherit" }}
                to="https://www.uchi.com.ar/"
                target="_blank"
              >
                <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698319400/uchi/iconos/shopping-cart_h9obws.png" />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCelular;

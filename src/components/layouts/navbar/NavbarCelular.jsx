import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarCelular = () => {
  return (
    <div>
      <Nav className="me-auto">
        <Nav.Link href="/productos">Productos</Nav.Link>
        <Nav.Link href="/servicios">Servicios</Nav.Link>
        <Nav.Link href="/about">Sobre UCHI</Nav.Link>
        <Nav.Link href="/about">Sobre UCHI</Nav.Link>
        <Nav.Link href="/about">Sobre UCHI</Nav.Link>
        <Nav.Link href="/info">Información útil</Nav.Link>
        <Nav.Link href="/contacto">Contacto</Nav.Link>
        <div className="redes2">
          <div className="subRedes">
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
        </div>
      </Nav>
    </div>
  );
}

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavbarDesktop } from "./NavbarDesktop.jsx";
import "./Navbar.css";

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
              <NavbarDesktop />
           
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>

  );
}

export default Navbarcompleto;

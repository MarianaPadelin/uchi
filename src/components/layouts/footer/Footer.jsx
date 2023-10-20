import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



const Footer = () => {
  return (
    <>
      <div className="redes">
        <div className="contactoFooter">
          <div>
            <h5 className="soloTitulo">Contacto </h5>
          </div>
          <div className="mediosDeContacto">
            <p>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="https://wa.me/541169550440?text=Buenos días. Estoy interesado en información sobre"
                target="_blank"
              >
                <WhatsAppIcon />
                Whatsapp
              </Link>
            </p>
            <p>
              <EmailIcon fontSize="small" /> hola@uchi.com.ar
            </p>
            <p>+54 0000 0000</p>
          </div>
        </div>


        <div className="redes2">
          <h4>Seguinos en</h4>
          <div className="subRedes">
            <Link
              style={{ color: "inherit" }}
              to="https://www.youtube.com/channel/UCZyzYTcjeYO-M1M48_XiM2Q"
              target="_blank"
            >
              <YouTubeIcon />
            </Link>
            <Link
              style={{ color: "inherit" }}
              to="https://www.instagram.com/uchi__ar/"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              style={{ color: "inherit" }}
              to="https://www.uchi.com.ar/"
              target="_blank"
            >
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

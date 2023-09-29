import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Divider } from "@mui/material";
import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: "#a2988e",
  padding: theme.spacing(1),
  display: "block",
  textAlign: "center",
}));

const Footer = () => {
  return (
    <>
      <div className="redes">
        <Div>
          <LocationOnIcon fontSize="large" />
          <br></br>
          {"Envíos a todo el país"}
          <br></br>
          {"Comprá sin salir de tu casa"}
        </Div>
        <Divider className="divider" orientation="vertical" flexItem />
        <Div>
          <LocationOnIcon fontSize="large" />
          <br></br>
          {"Retiros en CABA"}
          <br></br>
          {"BELGRANO / PALERMO / RETIRO"}
        </Div>
        <Divider className="divider" orientation="vertical" flexItem />
        <Div>
          <h3>Medios de envío</h3>
          <img
            src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/e-pick.png"
            className="footer__top__icon"
            alt="Medio Envio"
          />
          <img
            src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/correo-argentino.png"
            className="footer__top__icon"
            alt="Medio Envio"
          />
          <img
            src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/personalizado.png"
            className="footer__top__icon"
            alt="Medio Envio"
          />
          <img
            src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/retiro-local.png"
            className="footer__top__icon"
            alt="Medio Envio"
          />
          <img
            src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/acordar.png"
            className="footer__top__icon"
            alt="Medio Envio"
          />
        </Div>
      </div>
      <Divider />
      <div className="redes">
        <Div style={{ alignSelf: "baseline" }}>
          <h3>Contacto </h3>
          <Link
            to="https://wa.me/541169550440?text=Buenos días. Estoy interesado en información sobre"
            target="_blank"
          >
            <WhatsAppIcon className="iconoWhatsapp" color="success" />
          </Link>
          <EmailIcon fontSize="small" /> hola@uchi.com.ar
        </Div>
        <Divider className="divider" orientation="vertical" flexItem />
        <Div>
          <h3>Nuestras redes sociales</h3>
          <Link
            style={{ color: "inherit" }}
            to="https://www.youtube.com/channel/UCZyzYTcjeYO-M1M48_XiM2Q"
            target="_blank"
          >
            <YouTubeIcon fontSize="large" />
          </Link>
          <Link
            style={{ color: "inherit" }}
            to="https://www.instagram.com/uchi__ar/"
            target="_blank"
          >
            <InstagramIcon fontSize="large" />
          </Link>
        </Div>
      </div>
    </>
  );
};

export default Footer;

import "./Footer.css";

import { Link } from "react-router-dom";



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
                <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698319402/uchi/iconos/ph_whatsapp-logo-thin_ahnkdg.png" />
                Whatsapp
              </Link>
            </p>
            <p>hola@uchi.com.ar</p>
            <p>+54 0000 0000</p>
          </div>
        </div>

        <div className="redes2">
          <h4 className="soloTitulo">Seguinos en</h4>
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
      </div>
    </>
  );
};

export default Footer;

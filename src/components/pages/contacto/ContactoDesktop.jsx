// import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";

export const ContactoDesktop = () => {
  return (
    <div className="contacto">
      {/* <Box component="form" className="form">
        <TextField label="Nombre" required fullWidth variant="filled" />
        <TextField
          label="Teléfono de contacto"
          required
          fullWidth
          variant="filled"
        />
        <TextField
          label="Mail de contacto"
          required
          fullWidth
          variant="filled"
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Escriba aquí su consulta"
        />
        <Button
          style={{ backgroundColor: "#a2988e" }}
          variant="contained"
          type="submit"
          value="send"
        >
          Enviar
        </Button>
        <Button
          style={{ backgroundColor: "#a2988e" }}
          variant="contained"
          type="reset"
          value="borrar"
        >
          Borrar
        </Button>
      </Box> */}
      <div className="titulos">
        <h1 className="tituloParrafo">Contacto</h1>
        <p>
          Si te gustaron nuestros productos, querés conocer más sobre nosotros o
          querés hacernos una consulta no dudes en ponerte en contacto con
          nosotros.
        </p>

        <span className="mediosContacto">
          +54 0000 0000
          <EmailIcon fontSize="small" /> hola@uchi.com.ar
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to="https://wa.me/541169550440?text=Buenos días. Estoy interesado en información sobre"
            target="_blank"
          >
            <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698319402/uchi/iconos/ph_whatsapp-logo-thin_ahnkdg.png" />
            Whatsapp
          </Link>
        </span>
        <div className="redesContacto">
          <Link
            style={{ color: "inherit" }}
            to="https://www.youtube.com/channel/UCZyzYTcjeYO-M1M48_XiM2Q"
            target="_blank"
          >
            <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698319397/uchi/iconos/youtube_qrzg9k.png" />
          </Link>
          <Link
            style={{ color: "inherit" }}
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
  );
};

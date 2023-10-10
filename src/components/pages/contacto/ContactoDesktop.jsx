import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export const ContactoDesktop = () => {
  return (
    <div className="contacto">
      <Box component="form" className="form">
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
      </Box>
      <div className="titulosContacto">
        <h1>Contacto</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac
          turpis egestas maecenas.
        </p>
        <span style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link
            style={{ color: "inherit" }}
            to="https://wa.me/541169550440?text=Buenos días. Estoy interesado en información sobre"
            target="_blank"
          >
            <WhatsAppIcon />
          </Link>
          <EmailIcon fontSize="small" /> hola@uchi.com.ar +54 0000 0000
        </span>
      </div>
    </div>
  );
};

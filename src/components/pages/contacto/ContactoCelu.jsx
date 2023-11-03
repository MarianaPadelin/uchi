// import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";


export const ContactoCelu = ({ sendEmail, form, nombre, email, mensaje, setNombre, setEmail, setMensaje }) => {
  return (
    <div>
      <div className="titulos">
        <h1 className="tituloParrafo">Contacto</h1>
        <p>
          Si te gustaron nuestros productos, querés conocer más sobre nosotros o
          querés hacernos una consulta no dudes en ponerte en contacto con
          nosotros.
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          +54 0000 0000
          <br />
          hola@uchi.com.ar
        </p>

        <div className="redesContacto">
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to="https://wa.me/541169550440?text=Buenos días. Estoy interesado en información sobre"
            target="_blank"
          >
            <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698319402/uchi/iconos/ph_whatsapp-logo-thin_ahnkdg.png" />
          </Link>
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
      <form
        action="mailto:marianapadelin@gmail.com"
        method="post"
        ref={form}
        onSubmit={sendEmail}
        className="form"
      >
        <p>
          También podés escribirnos y nos pondremos en contacto a la brevedad
        </p>
        <input
          label="Tu nombre"
          name="user_name"
          required
          className="input"
          placeholder="Tu nombre"
          onChange={(event) => setNombre(event.target.value)}
          value={nombre}
        />

        <input
          placeholder="Tu email"
          label="Tu email"
          name="user_email"
          required
          className="input"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <textarea
          rows={5}
          name="message"
          placeholder="Tu mensaje"
          className="input"
          id="textArea"
          onChange={(event) => setMensaje(event.target.value)}
          value={mensaje}
        />
        <div id="botonForm">
          <button className="botonera" type="submit" value="Send">
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

import { ImageList, ImageListItem } from "@mui/material";
import { servicios } from "../../../routes/servicios";
import "./Servicios.css"
import { Link } from "react-router-dom";


export const Servicios = () => {
  return (
    <div className="servicios">
      <div className="titulos">
        <h1>Nuestros servicios</h1>
        <p>Párrafo descriptivo</p>
      </div>
      <div className="link1">
        <Link style={{ color: "black" }} to="/productos">
          Volver a la colección
        </Link>
      </div>

      <ImageList className="listadoServicios" cols={3} gap={10}>
        {servicios.map(({ id, title, descripcion, boton }) => (
          <ImageListItem
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "4vh",
            }}
            key={id}
          >
            <img
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696603802/uchi/icono_generico_ezfvml.png"
              // src={`${icono}?w=164&h=164&fit=crop&auto=format`}
              alt={title}
              loading="lazy"
              style={{ borderRadius: "3vw", width: "40%", height: "100px" }}
            />
            <h3>{title}</h3>
            <h6>{descripcion}</h6>
            <Link className="link" to="/servicios/interiorismo">
              {boton}
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
      <h1></h1>
    </div>
  );
}

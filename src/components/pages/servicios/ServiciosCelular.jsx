import { ImageList, ImageListItem } from "@mui/material";
import { servicios } from "../../../routes/servicios";
import "./Servicios.css";
import { Link } from "react-router-dom";

export const ServiciosCelular = ({ scrollToTop }) => {
  return (
    <div className="servicios">
      <div className="titulos">
        <h1 className="tituloParrafo">Servicios</h1>
        <p>Diseñamos y producimos objetos, desde packaging a espacios.</p>
        <p>
          El resultado final es producto del desarrollo en base a las
          necesidades funcionales y requerimientos estéticos en cada caso.
        </p>
        <p>
          Consideramos que la relación material - función - uso de los elementos
          es clave, así como el mensaje y la idea que se quieren transmitir.
        </p>
      </div>
      <ImageList
        className="listadoServicios"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        cols={3}
        gap={10}
      >
        {servicios.map(({ id, title, icono, height, width, path }) => (
          <ImageListItem className="servicio" key={id}>
            <img
              src={icono}
              alt={title}
              loading="lazy"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                marginBottom: "40px",
              }}
            />
            <h3 className="titulo2">{title}</h3>

            <Link onClick={scrollToTop} className="link" to={path}>
              Ver más
            </Link>
          </ImageListItem>
        ))}
      </ImageList>

    
    </div>
  );
};

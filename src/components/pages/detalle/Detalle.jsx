import { Link } from "react-router-dom";
import "./Detalle.css"
import {  Button } from "@mui/material";
import { ImagenesDesktop } from "./ImagenesDesktop";
import { ImagenesCelular } from "./ImagenesCelular";





export const Detalle = ( { seleccionado } ) => {

  return (
    <div className="detalle">
      <div className="titulos">
        <h1>{seleccionado.title}</h1>
        <p>{seleccionado.descripcion}</p>
      </div>
      <div className="link1">
        <Link style={{ color: "black" }} to="/productos">
          Volver a la colección
        </Link>
      </div>

      {window.innerWidth > 700 ? (
        <ImagenesDesktop seleccionado={seleccionado} />
      ) : (
        <ImagenesCelular seleccionado={seleccionado} />
      )}

      <div className="titulos">{seleccionado.especificaciones}</div>
      <div className="titulos">
        <h2>Datos del producto</h2>
        {seleccionado.medidas}
        <Button
          variant="contained"
          href={seleccionado.enlace}
          className="botonera2"
          target="_blank"
        >
          Comprar
        </Button>
      </div>

      <div className="cuidados">
        <h2>Cuidados del producto</h2>
        {seleccionado.cuidados}
      </div>
      <Button
        variant="contained"
        className="botonera2"
        href={`/productos/${seleccionado.categoria}`}
      >
        Más {seleccionado.categoria}
      </Button>
    </div>
  );
};

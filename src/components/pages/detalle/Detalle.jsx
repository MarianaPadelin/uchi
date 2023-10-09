import { Link } from "react-router-dom";
import "./Detalle.css"
import {  Button } from "@mui/material";
import { ImagenesDesktop } from "./imagenesDesktop";
import { ImagenesCelular } from "./imagenesCelular";




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

      <div className="titulos">
        <h2>Datos del producto</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="cuidados">
        <h2>Cuidados del producto</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
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

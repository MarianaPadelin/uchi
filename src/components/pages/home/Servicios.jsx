import { Button } from "@mui/material"
import "./Servicios.css"

export const Servicios = () => {
  return (
    <div className="homeServicios" id="servicios">
      <h1>SERVICIOS</h1>
      <h3>Descripción de los servicios</h3>
      <Button className="botonera2"
        variant="contained"
        href="/servicios"
      >
        Ver más
      </Button>
    </div>
  );
}

import { Button } from "@mui/material"
import "./Servicios.css"

export const Servicios = () => {
  return (
    <div className="servicios" id="servicios">
      <h1>SERVICIOS</h1>
      <h3>Descripción de los servicios</h3>
      <Button className="botonera"
        variant="contained"
        size="large"
        href="/servicios"
      >
        Ver más
      </Button>
    </div>
  );
}

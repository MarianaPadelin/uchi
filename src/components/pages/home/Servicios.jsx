import { Button } from "@mui/material"
import "./Servicios.css"

export const Servicios = () => {
  return (
    <div className="homeServicios" id="servicios">
      <h1>SERVICIOS</h1>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h5>
      <Button className="botonera2" variant="contained" href="/servicios">
        Ver más
      </Button>
    </div>
  );
}

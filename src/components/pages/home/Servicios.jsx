import { Button } from "@mui/material"
import "./Servicios.css"

export const Servicios = () => {
  return (
    <div className="homeServicios">
      <h2>SERVICIOS</h2>
      <h5>
        Diseño, desarrollo y produzco objetos, desde packaging a espacios. El
        resultado final es producto del desarrollo en base a las necesidades
        funcionales y requerimientos estéticos del caso. La relación entre la
        materialización, función y uso de los elementos es clave. Así también el
        mensaje o idea que se quiere transmitir.
      </h5>
      <Button className="botonera2" variant="contained" href="/servicios">
        Ver más
      </Button>
    </div>
  );
}

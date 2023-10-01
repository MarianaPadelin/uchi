import { Button } from "@mui/material"
import "./Servicios.css"

export const Servicios = () => {
  return (
    <div className="servicios">
      <h1>SERVICIOS</h1>
      <h3>Descripción de los servicios</h3>
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#719c7e", margin: "1vh", width: "40%" }}
        href="/servicios"
      >
        Ver servicios
      </Button>
    </div>
  );
}

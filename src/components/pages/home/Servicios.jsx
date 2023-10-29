
import { Link } from "react-router-dom";
import "./Servicios.css"

export const Servicios = () => {
  return (
    <div className="homeServicios">
      <h2 className="tituloParrafo">Servicios</h2>
      <p>
        Ofrecemos servicios de packaging, vajilla, iluminación, interiorismo,
        piezas de madera y nudos japoneses
      </p>
      <Link style={{ textDecoration: "none" }} to="/servicios">
        <button className="botonera2">
          VER MÁS
        </button>
      </Link>
    </div>
  );
}

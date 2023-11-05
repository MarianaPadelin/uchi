
import { Link } from "react-router-dom";
import "./Servicios.css"

export const Servicios = () => {
  return (
    <div className="homeServicios">
      <h2 className="titulo3">Servicios</h2>
      <p className="parrafoServicios">
        Diseñamos tus proyectos. <br /> Te invitamos a conocer más acerca de nuestros
        servicios.
      </p>
      <Link style={{ textDecoration: "none" }} to="/servicios">
        <button className="botonera2">Más información</button>
      </Link>
    </div>
  );
}

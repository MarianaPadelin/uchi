
import { ServicioIndCelu } from "./ServicioIndCelu";
import { ServicioIndDesktop } from "./ServicioIndDesktop";
import "./ServicioIndividual.css";



export const ServicioIndividual = ({ seleccionado }) => {
  return (
    <div>
      {window.innerWidth > 600 ? (
        <ServicioIndDesktop seleccionado={seleccionado} />
      ) : (
        <ServicioIndCelu seleccionado={seleccionado} />
      )}
    </div>
  );
};

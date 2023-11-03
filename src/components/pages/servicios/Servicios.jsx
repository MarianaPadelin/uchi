import "./Servicios.css"
import { ServiciosCelular } from "./ServiciosCelular";
import { ServiciosDesktop } from "./ServiciosDesktop";


export const Servicios = () => {
  return (
    <div>{window.innerWidth > 768 ? <ServiciosDesktop /> : <ServiciosCelular />}</div>
  );
}

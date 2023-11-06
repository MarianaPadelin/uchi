import "./Servicios.css"
import { ServiciosCelular } from "./ServiciosCelular";
import { ServiciosDesktop } from "./ServiciosDesktop";


export const Servicios = ({ scrollToTop }) => {
  return (
    <div>{window.innerWidth > 768 ? <ServiciosDesktop scrollToTop={scrollToTop} /> : <ServiciosCelular scrollToTop={scrollToTop} />}</div>
  );
}

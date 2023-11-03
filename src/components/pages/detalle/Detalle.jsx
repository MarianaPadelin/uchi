import "./Detalle.css";
import { ImagenesDesktop } from "./ImagenesDesktop";
import { ImagenesCelular } from "./ImagenesCelular";

export const Detalle = ({ seleccionado }) => {
  return (
  <div>

      {window.innerWidth > 768 ? (
        <ImagenesDesktop seleccionado={seleccionado} />
      ) : (
        <ImagenesCelular seleccionado={seleccionado} />
      )}

      
    </div>
  );
};

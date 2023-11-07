import "./Detalle.css";
import { ImagenesDesktop } from "./ImagenesDesktop";
import { ImagenesCelular } from "./ImagenesCelular";

export const Detalle = ({ seleccionado, scrollToTop }) => {
  return (
    <div>
      {window.innerWidth > 768 ? (
        <ImagenesDesktop
          seleccionado={seleccionado}
          scrollToTop={scrollToTop}
        />
      ) : (
        <ImagenesCelular
          seleccionado={seleccionado}
          scrollToTop={scrollToTop}
        />
      )}
    </div>
  );
};

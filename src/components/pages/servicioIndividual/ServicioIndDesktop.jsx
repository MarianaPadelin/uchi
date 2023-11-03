import Carousel from "react-bootstrap/Carousel";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ServicioIndDesktop = ({ seleccionado }) => {
  return (
    <div>
      <div className="titulos">
        <h1 className="tituloParrafo">{seleccionado.title}</h1>
        <p>{seleccionado.descripcion}</p>
      </div>

      <Carousel touch="true" className="carouselInteriorismo">
        <Carousel.Item className="slidesInteriorismo">
          <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={5}
          >
            <img className="imagenCarousel" src={seleccionado.img1}></img>
            <img className="imagenCarousel" src={seleccionado.img2}></img>
            <img className="imagenCarousel" src={seleccionado.img3}></img>
          </Stack>
        </Carousel.Item>
        <Carousel.Item>
          <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={5}
          >
            <img className="imagenCarousel" src={seleccionado.img4}></img>
            <img className="imagenCarousel" src={seleccionado.img5}></img>
            <img className="imagenCarousel" src={seleccionado.img6}></img>
          </Stack>
        </Carousel.Item>
        {/* <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img2}></img>
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img3}></img>
        </Carousel.Item> */}
      </Carousel>
      <p id="interiorismo">{seleccionado.infoExtra}</p>
      <div className="botonVolver">
        <Link className="link" to="/servicios">
          Volver a servicios
        </Link>
      </div>
    </div>
  );
};

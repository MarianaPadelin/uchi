import Carousel from "react-bootstrap/Carousel";
import "./ServicioIndividual.css";
import { Stack } from "react-bootstrap";


export const ServicioIndividual = ({ seleccionado }) => {
  return (
    <div>
      <div className="titulos">
        <h1 className="tituloParrafo">{seleccionado.title}</h1>
        <p>{seleccionado.descripcion}</p>
        <p>{seleccionado.infoExtra}</p>
      </div>

      <Carousel
        pause="hover"
        touch="true"
        indicators="false"
        className="carouselInteriorismo"
      >
        <Carousel.Item className="slidesInteriorismo">
          <Stack
            direction="horizontal"
            className="h-100 justify-content-center align-items-center"
            gap={3}
          >
            <img className="imagenCarousel" src={seleccionado.img1}></img>
            <img className="imagenCarousel" src={seleccionado.img2}></img>
            <img className="imagenCarousel" src={seleccionado.img3}></img>
            <img className="imagenCarousel" src={seleccionado.img1}></img>
            <img className="imagenCarousel" src={seleccionado.img2}></img>
            <img className="imagenCarousel" src={seleccionado.img3}></img>
          </Stack>
        </Carousel.Item>
        {/* <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img2}></img>
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img3}></img>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ServicioIndCelu = ({ seleccionado }) => {
  return (
    <div className="servicioIndividual">
      <div className="titulos">
        <h1 className="tituloParrafo">{seleccionado.title}</h1>
        <p>{seleccionado.descripcion}</p>
        <p id="interiorismo">{seleccionado.infoExtra}</p>
      </div>

      <Carousel touch="true" className="carouselInteriorismo">
        <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img1}></img>
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img2}></img>
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img3}></img>
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img4}></img>
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img5}></img>
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img className="imagenCarousel" src={seleccionado.img6}></img>
        </Carousel.Item>
      </Carousel>
      <div className="botonVolver">
        <Link className="link" to="/servicios">
          Volver a servicios
        </Link>
      </div>
    </div>
  );
}

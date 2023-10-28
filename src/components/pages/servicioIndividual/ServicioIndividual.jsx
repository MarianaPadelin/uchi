import Carousel from "react-bootstrap/Carousel";
import "./ServicioIndividual.css";

export const ServicioIndividual = ({ seleccionado }) => {
  return (
    <div>
      <div className="titulos">
        <h1>{seleccionado.title}</h1>
        <p>{seleccionado.descripcion}</p>
        <p>{seleccionado.infoExtra}</p>
      </div>
      <Carousel className="carouselInteriorismo">
        <Carousel.Item className="slidesInteriorismo">

          {/* cuando esten las imagenes ponerlas acá */}
          <img src={seleccionado.icono}></img>
          {/* CREO QUE VA SIN CAPTION
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1697718741/uchi/Interiorismo/IMG_4037_bf9lpr.jpg"></img>
          
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1697718749/uchi/Interiorismo/IMG_4097_jpg_git9bs.jpg"></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

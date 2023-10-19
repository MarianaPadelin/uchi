import Carousel from "react-bootstrap/Carousel";
import "./Interiorismo.css"

export const Interiorismo = () => {
  return (
    <div>
      <div className="titulos">
        <h1>Interiorismo</h1>
        Yuzu es un nomikai (bar de sake y highball) ubicado en Palermo, Buenos
        Aires. Su chef, -Edgar Kuda- propone una reinterpretación moderna de los
        típicos platos de izakaya. Se realizó una relectura de elementos de la
        estética japonesa tradicional para lograr un ambiente relajado y
        descontracturado. El espacio previamente funcionaba como un omakase a
        puertas cerradas. La propuesta tomó en consideración los elementos clave
        de un izakaya tradicional: sector descontracturado de tatami, barra con
        cocina a la vista y lámparas colgantes que remiten a los faroles de
        papel de arroz, logrando un ambiente cálido y apenas melancólico.
      </div>
      <Carousel className="carouselInteriorismo">
        <Carousel.Item className="slidesInteriorismo">
          <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1697718731/uchi/Interiorismo/IMG_3981_oy1log.jpg"></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1697718741/uchi/Interiorismo/IMG_4037_bf9lpr.jpg"></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slidesInteriorismo">
          <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1697718749/uchi/Interiorismo/IMG_4097_jpg_git9bs.jpg"></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

import { Carousel, CarouselCaption } from "react-bootstrap";


export const HomeCelular = () => {
  const imagenesVerticales = [
    {
      id: "imgV1",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1698584785/uchi/inicio/390x755-Home_Mobile_2_ecessn.jpg",
    },
    {
      id: "imgV2",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1698584781/uchi/inicio/390x755-Home_Mobile_4_z4aatn.jpg",
    },
    {
      id: "imgV3",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1698584778/uchi/inicio/390x755-Home_Mobile_5_gzngj9.jpg",
    },
    {
      id: "imgV4",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1698584776/uchi/inicio/390x755-Home_Mobile_9_cqkkfd.jpg",
    },
  ];
  return (
    <div className="home">
      <Carousel indicators={false} touch={true}>
        {imagenesVerticales.map(({ id, url }) => (
          <Carousel.Item key={id}>
            <img style={{ opacity: "70%" }} src={url}></img>
            <CarouselCaption className="textoCarrusel">
              <div className="texto1">
                <h3
                  className="titulo3"
                  style={{
                    marginLeft: "0px",
                    marginRight: "0px",
                    fontSize: "30px",
                  }}
                >
                  Tradición japonesa, fabricación local
                </h3>
              </div>
              <a
                style={{ textDecoration: "none", color: "#3a3a3a" }}
                href="#botonera"
              >
                <h3 id="autoscroll" className="texto2">
                  <b>Descubre nuestros productos</b>
                </h3>

                <img
                  src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698414308/uchi/iconos/arrow-down-circle_cqkmai.png"
                  width={35}
                />
              </a>
            </CarouselCaption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

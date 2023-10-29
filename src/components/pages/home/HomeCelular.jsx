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
      <Carousel indicators={false}>
        {imagenesVerticales.map(({ id, url }) => (
          <Carousel.Item key={id}>
            <img width="100%" style={{opacity:"70%"}} src={url}></img>
            <CarouselCaption>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="#botonera"
              >
                <h3 id="autoscroll" style={{ color: "#3a3a3a" }}>
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


          <div className="textoCarrusel">
            <h3 style={{ color: "#3a3a3a", fontSize: "30px" }}>
              Tradición japonesa, fabricación local
            </h3>
          </div>

      </Carousel>
    </div>
  );
};

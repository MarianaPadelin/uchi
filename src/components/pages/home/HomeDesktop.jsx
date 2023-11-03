import { Carousel } from "react-bootstrap";


export const HomeDesktop = () => {
  const imagenes = [
    {
      id: "img1",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1698412856/uchi/inicio/1440x747-Home_WEB_1_e5gvrd.jpg",
    },
    {
      id: "img2",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1698412853/uchi/inicio/1440x747-Home_WEB_2_kjvbhf.jpg",
    },
    {
      id: "img3",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1698412851/uchi/inicio/1440x747-Home_WEB_3_tsm7xb.jpg",
    },
    {
      id: "img4",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1698412849/uchi/inicio/1440x747-Home_WEB_5_lrjzhq.jpg",
    },
  ];
  return (
    <div className="home">
      <Carousel indicators={false}>
        {imagenes.map(({ id, url }) => (
          <Carousel.Item key={id}>
            <img
              style={{ opacity: "70%", width: "100%" }}
              src={url}
            ></img>

            <Carousel.Caption className="textoCarrusel">
              <div className="texto1">
                <h3 className="titulo3">
                  Tradición japonesa, fabricación local
                </h3>
              </div>
              <div>
                <a className="texto2" href="#botonera">
                  <h3 id="autoscroll">
                    <b>Descubre nuestros productos</b>
                  </h3>

                  <img
                    src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1698414308/uchi/iconos/arrow-down-circle_cqkmai.png"
                    width={35}
                  />
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

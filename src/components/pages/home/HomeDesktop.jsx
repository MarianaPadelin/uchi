import { Carousel } from "react-bootstrap";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";



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
      <Carousel>
        {imagenes.map(({ id, url }) => (
          <Carousel.Item key={id}>
            <img
              style={{ opacity: "70%", height: "747px", width: "1560px" }}
              src={url}
            ></img>

            <Carousel.Caption>
              <h3 style={{ color: "#3a3a3a", fontSize: "30px" }}>
                <b>Tradición japonesa, fabricación local</b>
              </h3>
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="#botonera"
              >
                <h3 id="autoscroll" style={{ color: "#3a3a3a" }}>
                  Descubre nuestros productos
                </h3>

                <ArrowCircleDownIcon
                  fontSize="large"
                  style={{ color: "#3a3a3a" }}
                />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

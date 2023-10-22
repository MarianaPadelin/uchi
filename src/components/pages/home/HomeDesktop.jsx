import { Carousel } from "react-bootstrap";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";



export const HomeDesktop = () => {
  const imagenes = [
    {
      id: "img1",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696516385/uchi/inicio/Test-web_1024x722-opacidad_50_axhj9m.png",
    },
    {
      id: "img2",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696516385/uchi/inicio/Test-web_1024x722-opacidad_50_axhj9m.png",
    },
    {
      id: "img3",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696516385/uchi/inicio/Test-web_1024x722-opacidad_50_axhj9m.png",
    },
  ];
  return (
    <div className="home">
      <Carousel>
        {imagenes.map(({ id, url }) => (
          <Carousel.Item key={id}>
              <img
                src={url}
              ></img>
           
            <Carousel.Caption>
              <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"></img>
              <h3 style={{ color: "#3a3a3a" }}>Slogan</h3>

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

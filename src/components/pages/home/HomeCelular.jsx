import { Carousel } from "react-bootstrap";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Link } from "@mui/material";


export const HomeCelular = () => {
  const imagenesVerticales = [
    {
      id: "imgV1",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696516024/uchi/inicio/Test-celular_480x800-opacidad_50_skaxgt.png",
    },
    {
      id: "imgV2",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696516024/uchi/inicio/Test-celular_480x800-opacidad_50_skaxgt.png",
    },
    {
      id: "imgV3",
      url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696516024/uchi/inicio/Test-celular_480x800-opacidad_50_skaxgt.png",
    },
  ];
  return (
    <div className="home">
      <Carousel>
        {imagenesVerticales.map(({ id, url }) => (
          <Carousel.Item key={id}>
            <img width="100%" style={{height:"600px"}} src={url}></img>

            <Carousel.Caption>
              <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"></img>
              <h3 style={{ color: "#3a3a3a" }}>Slogan</h3>

              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="#servicios"
              >
                <h3 id="autoscroll" style={{ color: "#3a3a3a" }}>
                  Descubre nuestros productos
                </h3>

                <ArrowCircleDownIcon
                  fontSize="large"
                  style={{ color: "#3a3a3a" }}
                />
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

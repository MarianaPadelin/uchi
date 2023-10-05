import { Carousel } from "react-bootstrap";
import "./Home.css";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Link } from "@mui/material";

const imagenes = [
  {
    id: "img1",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696446168/uchi/En_dudas_01_u7pkup.jpg",
  },
  {
    id: "img2",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696516385/uchi/inicio/Test-web_1024x722-opacidad_50_axhj9m.png",
  },
  {
    id: "img3",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696446240/uchi/Suribachi_wdju2w.jpg",
  },
];

const imagenesVerticales = [
  {
    id: "imgV1",
    url: "https://res.cloudinary.com/dvxkjikvk/image/upload/v1696516024/uchi/inicio/Test-celular_480x800-opacidad_50_skaxgt.png",
  },
];
const Home = () => {
  return (
    <div className="home">
      <Carousel>
        {imagenes.map(({ id, url }) => (
          <Carousel.Item key={id}>
            {window.innerWidth > 600 ? (
              <img style={{ opacity: "60%", height:"" }} width="100%" src={url}></img>
            ) : (
              <img style={{height:"600px"}} src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696516024/uchi/inicio/Test-celular_480x800-opacidad_50_skaxgt.png"></img>
            )}

            <Carousel.Caption>
              <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"></img>
              <h3 style={{ color: "#3a3a3a" }}>Slogan</h3>

              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="#servicios"
              >
                {/* no anda el link */}
                <h3 style={{ color: "#3a3a3a" }}>
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

export default Home;

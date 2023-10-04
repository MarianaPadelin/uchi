import { Carousel } from "react-bootstrap";
import "./Home.css"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const Home = () => {
  return (
    <div className="home">
      <Carousel>
        <Carousel.Item>
          <img
            width="100%"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696446168/uchi/En_dudas_01_u7pkup.jpg"
          ></img>
          <Carousel.Caption>
            <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"></img>
            <h3 style={{ color: "#3a3a3a" }}>Slogan</h3>
            <h3 style={{ color: "#3a3a3a" }}>Descubre nuestros productos</h3>
            <ArrowCircleDownIcon
              fontSize="large"
              style={{ color: "#3a3a3a" }}
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696446407/uchi/00_Suribachi_03_ojjnzs.jpg"
          ></img>
          <Carousel.Caption>
            <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"></img>
            <h3 style={{ color: "#3a3a3a" }}>Slogan</h3>
            <h3 style={{ color: "#3a3a3a" }}>Descubre nuestros productos </h3>
            <ArrowCircleDownIcon
              fontSize="large"
              style={{ color: "#3a3a3a" }}
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696446240/uchi/Suribachi_wdju2w.jpg"
          ></img>
          <Carousel.Caption>
            <img src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1696427102/uchi/02-Logo_Horiz_Mediano_Positivo_i2xbz7.png"></img>
            <h3 style={{ color: "#3a3a3a" }}>Slogan</h3>
            <h3 style={{ color: "#3a3a3a" }}>Descubre nuestros productos</h3>
            <ArrowCircleDownIcon
              fontSize="large"
              style={{ color: "#3a3a3a" }}
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home
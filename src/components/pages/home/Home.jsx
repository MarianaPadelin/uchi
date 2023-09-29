import "./Home.css"
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const Home = () => {
  return (
    <div className="home">
      <img
        style={{ marginTop: "1vw" }}
        src="src\components\common\Logos\1.2-Negro_Horizontal.png"
      ></img>
      <br />
      <h2>SLOGAN</h2>
      <br />
      <h3>Descubre nuestros productos</h3>
      <ArrowCircleDownIcon fontSize="large" />
    </div>
  );
}

export default Home
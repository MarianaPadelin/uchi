import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Este es el home</h1>
      <Link to={"/productos"}>
        <button>Ir a Productos</button>
      </Link>
      <Link to={"/servicios"}>
        <button>Ir a Servicios</button>
      </Link>
    </div>
  );
}

export default Home